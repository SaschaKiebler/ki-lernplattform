'use client'
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { XIcon } from "@/components/Icons";

interface Lecture {
  title: string;
  video: File | null;
  url: string;
  file: File | null;
}

interface Quiz {
  title: string;
  file: File | null;
  text: string;
}

interface CourseFormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  description: HTMLTextAreaElement;
}

interface CourseFormElement extends HTMLFormElement {
  elements: CourseFormElements;
}

export function NewCourse() {
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  function handleSubmit(event: FormEvent<CourseFormElement>) {
    event.preventDefault();
    const formData = new FormData();

    const courseTitle = event.currentTarget.elements.title.value;
    const courseDescription = event.currentTarget.elements.description.value;

    formData.append("title", courseTitle);
    formData.append("description", courseDescription);

    lectures.forEach((lecture, index) => {
      formData.append(`lectures[${index}][title]`, lecture.title);
      if (lecture.video) {
        formData.append(`lectures[${index}][video]`, lecture.video);
      }
      formData.append(`lectures[${index}][url]`, lecture.url);
      if (lecture.file) {
        formData.append(`lectures[${index}][file]`, lecture.file);
      }
    });

    quizzes.forEach((quiz, index) => {
      formData.append(`quizzes[${index}][title]`, quiz.title);
      if (quiz.file) {
        formData.append(`quizzes[${index}][file]`, quiz.file);
      }
      formData.append(`quizzes[${index}][text]`, quiz.text);
    });

    fetch("/api/courses/new", {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  function addLecture() {
    setLectures([...lectures, { title: '', video: null, url: '', file: null }]);
  }

  function addQuiz() {
    setQuizzes([...quizzes, { title: '', file: null, text: '' }]);
  }

  function handleLectureChange(index: number, field: keyof Lecture, value: any) {
    const newLectures = [...lectures];
    newLectures[index][field] = value;
    setLectures(newLectures);
  }

  function handleQuizChange(index: number, field: keyof Quiz, value: any) {
    const newQuizzes = [...quizzes];
    newQuizzes[index][field] = value;
    setQuizzes(newQuizzes);
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 overflow-y-scroll">
      <div className="flex content-center justify-between">
        <h1 className="mb-6 text-3xl font-bold">Create New Course</h1>
        <Link className="hover:text-gray-400  w-fit h-fit" href="/courses">
          <XIcon className="w-6 h-6" />
          <span className="sr-only">Close</span>
        </Link>
      </div>
      <form className="space-y-8" onSubmit={handleSubmit}>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block font-medium" htmlFor="title">
              Course Title
            </label>
            <input
              className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              id="title"
              name="title"
              placeholder="Enter course title"
              type="text"
            />
          </div>
          <div>
            <label className="mb-2 block font-medium" htmlFor="description">
              Course Description
            </label>
            <textarea
              className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              id="description"
              name="description"
              placeholder="Enter course description"
              rows={4}
            />
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-xl font-bold">Lectures</h2>
            <div className="space-y-6">
              {lectures.map((lecture, index) => (
                <div className="grid grid-cols-3 gap-4" key={index}>
                  <div>
                    <label className="mb-2 block font-medium" htmlFor={`lecture-title-${index}`}>
                      Title
                    </label>
                    <input
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                      id={`lecture-title-${index}`}
                      name={`lecture-title-${index}`}
                      placeholder="Enter lecture title"
                      type="text"
                      value={lecture.title}
                      onChange={(e) => handleLectureChange(index, 'title', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium" htmlFor={`lecture-video-${index}`}>
                      Video
                    </label>
                    <input
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                      id={`lecture-video-${index}`}
                      name={`lecture-video-${index}`}
                      type="file"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleLectureChange(index, 'video', e.target.files?.[0] || null)}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium" htmlFor={`lecture-url-${index}`}>
                      URL
                    </label>
                    <input
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                      id={`lecture-url-${index}`}
                      name={`lecture-url-${index}`}
                      placeholder="Enter lecture URL"
                      type="text"
                      value={lecture.url}
                      onChange={(e) => handleLectureChange(index, 'url', e.target.value)}
                    />
                  </div>
                </div>
              ))}
              <Button size="sm" type="button" onClick={addLecture}>Add Lecture</Button>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold">Quizzes</h2>
            <div className="space-y-6">
              {quizzes.map((quiz, index) => (
                <div className="grid grid-cols-3 gap-4" key={index}>
                  <div>
                    <label className="mb-2 block font-medium" htmlFor={`quiz-title-${index}`}>
                      Title
                    </label>
                    <input
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                      id={`quiz-title-${index}`}
                      name={`quiz-title-${index}`}
                      placeholder="Enter quiz title"
                      type="text"
                      value={quiz.title}
                      onChange={(e) => handleQuizChange(index, 'title', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium" htmlFor={`quiz-file-${index}`}>
                      File
                    </label>
                    <input
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                      id={`quiz-file-${index}`}
                      name={`quiz-file-${index}`}
                      type="file"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleQuizChange(index, 'file', e.target.files?.[0] || null)}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium" htmlFor={`quiz-text-${index}`}>
                      Text
                    </label>
                    <textarea
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                      id={`quiz-text-${index}`}
                      name={`quiz-text-${index}`}
                      placeholder="Enter quiz text"
                      rows={2}
                      value={quiz.text}
                      onChange={(e) => handleQuizChange(index, 'text', e.target.value)}
                    />
                  </div>
                </div>
              ))}
              <Button size="sm" type="button" onClick={addQuiz}>Add Quiz</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Create Course</Button>
        </div>
      </form>
    </div>
  );
}

