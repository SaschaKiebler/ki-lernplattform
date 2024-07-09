'use client'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

export function QuizQuestionCard(props: { quizID: string }) {
  const [quiz, setQuiz] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`/api/quiz/${props.quizID}`);
        if (!response.ok) {
          throw new Error("Etwas ist schief gelaufen, bitte versuche es erneut");
        }
        const data = await response.json();
        setQuiz(data);
        console.log(data);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchQuiz();
  }, [props.quizID]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!quiz) {
    return <div>Loading...</div>;
  }

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, quiz.questions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center h-full  bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl w-full px-6 py-12 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Multiple Choice Quiz</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Test your knowledge with this fun quiz!</p>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-900">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{`Question ${currentQuestionIndex + 1}`}</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{currentQuestion.question}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {currentQuestion.options.map((option: string, answerIndex: number) => (
                  <label key={answerIndex} className="flex items-center bg-white rounded-lg shadow-md p-4 cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-750 transition-colors">
                    <input
                      className="form-radio text-indigo-600 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500"
                      name={`question${currentQuestionIndex}`}
                      type="radio"
                    />
                    <span className="ml-3 text-gray-700 dark:text-gray-400 font-medium">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <Button size="sm" variant="outline" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
              Previous
            </Button>
            <Button size="sm" variant="outline" onClick={handleNext} disabled={currentQuestionIndex === quiz.questions.length - 1}>
              Next
            </Button>
          </div>
          <div className="flex justify-end">
            <Button size="sm" variant="outline">
              Submit Answers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
