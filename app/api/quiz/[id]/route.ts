import { prisma } from '@/lib/prisma';



export async function GET() {
    const quiz = await prisma.quiz.findFirst({
        include: {
            questions: true,
        },
    });
    if (!quiz) {
        return new Response(JSON.stringify({ message: "Quiz not found" }), { status: 404 });
    }

    return Response.json(quiz);
    }