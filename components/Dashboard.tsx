/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/uPrTgDkFRJm
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export function Dashboard() {
  return (
    <div className="flex h-full w-full">
      
      <div className="flex flex-1 flex-col">
        
        <main className="flex-1 bg-gray-100 dark:bg-gray-900 p-4 md:p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Current Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Link className="flex items-center gap-4" href="/courses/1">
                    <img
                      alt="Course Thumbnail"
                      className="rounded-md"
                      height="64"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                    <div>
                      <h3 className="text-lg font-medium">Introduction to AI</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Beginner</p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                          <div className="h-full w-2/3 rounded-full bg-blue-500" />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">67%</span>
                      </div>
                    </div>
                  </Link>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Course Thumbnail"
                      className="rounded-md"
                      height="64"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                    <div>
                      <h3 className="text-lg font-medium">Machine Learning</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Intermediate</p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                          <div className="h-full w-1/2 rounded-full bg-blue-500" />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">50%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-lg font-medium">Total Courses Completed</h3>
                    <p className="text-4xl font-bold">12</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Total Hours Studied</h3>
                    <p className="text-4xl font-bold">84</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Certificates Earned</h3>
                    <p className="text-4xl font-bold">6</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Course Thumbnail"
                      className="rounded-md"
                      height="64"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                    <div>
                      <h3 className="text-lg font-medium">Deep Learning</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Intermediate</p>
                      <Button className="mt-2" size="sm">
                        Enroll
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Course Thumbnail"
                      className="rounded-md"
                      height="64"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                    <div>
                      <h3 className="text-lg font-medium">Natural Language Processing</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Advanced</p>
                      <Button className="mt-2" size="sm">
                        Enroll
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Kartenstapel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Link className="flex items-center gap-4" href="/courses/1">
                    <img
                      alt="Course Thumbnail"
                      className="rounded-md"
                      height="64"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                    <div>
                      <h3 className="text-lg font-medium">Introduction to AI</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Beginner</p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                          <div className="h-full w-2/3 rounded-full bg-blue-500" />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">67%</span>
                      </div>
                    </div>
                  </Link>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Course Thumbnail"
                      className="rounded-md"
                      height="64"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                    <div>
                      <h3 className="text-lg font-medium">Machine Learning</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Intermediate</p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                          <div className="h-full w-1/2 rounded-full bg-blue-500" />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">50%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quizze</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Link className="flex items-center gap-4" href="/courses/1">
                    <img
                      alt="Course Thumbnail"
                      className="rounded-md"
                      height="64"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                    <div>
                      <h3 className="text-lg font-medium">Introduction to AI</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Beginner</p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                          <div className="h-full w-2/3 rounded-full bg-blue-500" />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">67%</span>
                      </div>
                    </div>
                  </Link>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Course Thumbnail"
                      className="rounded-md"
                      height="64"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                    <div>
                      <h3 className="text-lg font-medium">Machine Learning</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Intermediate</p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                          <div className="h-full w-1/2 rounded-full bg-blue-500" />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">50%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function ActivityIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function BookIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function BookOpenIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function ChatIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
