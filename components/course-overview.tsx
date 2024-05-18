/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ywtxc2Hbaj4
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { CardContent, Card } from "@/components/ui/card"

export function CourseOverview() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Available Courses</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Search courses..."
              type="text"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                <FilterIcon className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>
                <Checkbox />
                <span>Computer Science</span>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                <Checkbox />
                <span>Mathematics</span>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                <Checkbox />
                <span>Business</span>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                <Checkbox />
                <span>Art</span>
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Introduction to Computer Science</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Explore the fundamental concepts of computer science, including algorithms, data structures, and
              programming.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">John Doe</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Mon, Wed 9:00 AM - 10:30 AM</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Calculus I</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Learn the fundamental concepts of calculus, including limits, derivatives, and integrals.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Jane Smith</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Tue, Thu 11:00 AM - 12:30 PM</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Introduction to Marketing</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Explore the principles and strategies of modern marketing, including consumer behavior and digital
              marketing.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Michael Johnson</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Mon, Wed 2:00 PM - 3:30 PM</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Drawing Fundamentals</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Learn the basic techniques and principles of drawing, including sketching, shading, and perspective.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Emily Davis</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Tue, Thu 4:00 PM - 5:30 PM</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Introduction to Psychology</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Explore the fundamental concepts of psychology, including human behavior, cognition, and personality.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Sarah Lee</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Mon, Wed 6:00 PM - 7:30 PM</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Principles of Accounting</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Learn the fundamental concepts and principles of financial and managerial accounting.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">David Kim</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Tue, Thu 9:00 AM - 10:30 AM</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Introduction to Biology</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Explore the fundamental concepts of biology, including cell biology, genetics, and ecology.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Lisa Chen</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Mon, Wed 11:00 AM - 12:30 PM</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Introduction to Philosophy</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Explore the fundamental questions and concepts of philosophy, including ethics, metaphysics, and
              epistemology.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Alex Nguyen</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Tue, Thu 2:00 PM - 3:30 PM</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Introduction to Music Theory</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Explore the fundamental concepts of music theory, including notation, harmony, and rhythm.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Olivia Hernandez</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Mon, Wed 4:00 PM - 5:30 PM</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
    </div>
  )
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function SearchIcon(props) {
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


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
