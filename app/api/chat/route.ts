import {
    Message as VercelChatMessage,
    StreamingTextResponse,
    createStreamDataTransformer
} from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { HttpResponseOutputParser } from 'langchain/output_parsers';
import { generateVectorDB } from '@/lib/langchain/vectordb';
import { Document } from "langchain/document";

import { createRetrievalChain } from "langchain/chains/retrieval";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { RunnableSequence } from "@langchain/core/runnables";


export const dynamic = 'force-dynamic'

/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
    return `${message.role}: ${message.content}`;
};

const TEMPLATE = `Du bist einer der weltbesten Lerntutoren. Versuche dem Nutzer ausführlich beim Lernen zu helfen.

Current conversation:
{chat_history}

user: {input}
assistant:`;


export async function POST(req: Request) {
    try {
        // Extract the `messages` from the body of the request
        const { messages } = await req.json();

        const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);

        const currentMessageContent = messages.at(-1).content;

        const prompt = PromptTemplate.fromTemplate(TEMPLATE);

        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY!,
            model: 'gpt-4o',
            temperature: 0.8,
            verbose: true,
        });

        /**
       * Chat models stream message chunks rather than bytes, so this
       * output parser handles serialization and encoding.
       */
        const parser = new HttpResponseOutputParser();

        const chain = RunnableSequence.from([prompt, model, parser]);
/*
        const testDoc:Document = new Document({pageContent: "hello Word"});

        const vectorStore = await generateVectorDB();
        await vectorStore.addDocuments([testDoc]);

        const retriever = await vectorStore.asRetriever();
        const combineDocsChain = await createStuffDocumentsChain();

        const retrievalChain = await createRetrievalChain(retriever);

        const docs = await retriever.getRelevantDocuments("hello");
*/
        // Convert the response into a friendly text-stream
        const stream = await chain.stream({
            chat_history: formattedPreviousMessages.join('\n'),
            input: currentMessageContent,
        });

        // Respond with the stream
        return new StreamingTextResponse(
            stream.pipeThrough(createStreamDataTransformer()),
        );
    } catch (e: any) {
        return Response.json({ error: e.message }, { status: e.status ?? 500 });
    }
}