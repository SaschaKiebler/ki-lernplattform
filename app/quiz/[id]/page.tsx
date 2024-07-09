import { QuizQuestionCard } from "@/components/quiz-question-card";

export default function QuizPage({ params }: { params: { id: string } }){

    const { id } = params

        return (
            <QuizQuestionCard quizID={id?.toString() ?? ''} />
        )
    
}