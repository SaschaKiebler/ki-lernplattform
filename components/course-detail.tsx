import { BookIcon, XIcon, MailQuestionIcon, PlayIcon } from "@/components/Icons"
import Link from "next/link"

export function CourseDetail() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between sticky top-0 z-10">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <BookIcon className="w-6 h-6" />
          <span>Web Development Course</span>
        </Link>
        <Link className="text-gray-400 hover:text-white" href="/courses">
          <XIcon className="w-6 h-6" />
          <span className="sr-only">Close</span>
        </Link>
      </header>
      <div className="flex flex-1">
        
        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Introduction to Web Development</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Learn the fundamentals of web development, including HTML, CSS, and JavaScript. This course covers the
                  basics of building responsive and accessible websites.
                </p>
                <div className="grid gap-6">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <BookIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
                      <h3 className="text-lg font-semibold">Lectures</h3>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Introduction to HTML</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                              Learn the basic structure and syntax of HTML.
                            </p>
                          </div>
                          <PlayIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">CSS Fundamentals</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                              Understand the basics of CSS and how to style your web pages.
                            </p>
                          </div>
                          <PlayIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">JavaScript Essentials</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                              Explore the fundamentals of JavaScript and how to add interactivity to your websites.
                            </p>
                          </div>
                          <PlayIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <MailQuestionIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
                      <h3 className="text-lg font-semibold">Quizzes</h3>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/quiz/2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">HTML Quiz</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                              Test your understanding of HTML concepts.
                            </p>
                          </div>
                          <MailQuestionIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
                        </div>
                        </Link>
                      </li>
                      <li>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">CSS Quiz</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                              Assess your knowledge of CSS properties and techniques.
                            </p>
                          </div>
                          <MailQuestionIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">JavaScript Quiz</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                              Evaluate your understanding of JavaScript fundamentals.
                            </p>
                          </div>
                          <MailQuestionIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  alt="Course Thumbnail"
                  className="rounded-lg object-cover w-full h-full"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

