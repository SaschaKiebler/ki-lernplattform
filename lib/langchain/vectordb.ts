import { PrismaClient, Prisma, Document } from "@prisma/client";
import { PrismaVectorStore } from "@langchain/community/vectorstores/prisma";
import { OpenAIEmbeddings } from "@langchain/openai";

export async function generateVectorDB() {
    const db = new PrismaClient();

    try {
        const vectorStore = await PrismaVectorStore.withModel<Document>(db).create(
            new OpenAIEmbeddings(),
            {
                prisma: Prisma,
                tableName: "Document",
                vectorColumnName: "vector",
                columns: {
                    id: PrismaVectorStore.IdColumn,
                    content: PrismaVectorStore.ContentColumn,
                },
            }
        );
        return vectorStore;
    } catch (error) {
        console.error("Error generating vector store:", error);
        throw error; // Rethrow the error after logging it
    } finally {
        await db.$disconnect(); // Ensure Prisma client is disconnected
    }
}
