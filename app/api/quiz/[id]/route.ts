import { prisma } from '@/lib/prisma';



export async function GET({ params }: { params: { id: string } }) {
    const quizId = params.id;
    const quiz = await prisma.quiz.findFirst({
        include: {
            questions: true,
        },
        where: {
            id: quizId,
        },
    });
    if (!quiz) {
        return new Response(JSON.stringify({ message: "Quiz not found" }), { status: 404 });
    }

    return Response.json(quiz);
    }