
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"

import { PlusIcon, SearchIcon, FilterIcon, UserIcon, CalendarIcon } from '@/components/Icons'

export async function CourseOverview() {

  const data  = await getData();

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 overflow-y-scroll">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-3">
        <h1 className="text-2xl font-bold">Available Courses</h1>
        <Link href={'/courses/new'}><PlusIcon/></Link>
        </div>
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
      
        {data.map((course:any) => (
          <Card key={course.id} href={`/courses/${course.id}`} className="h-full">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{course.description}</p>
              <div className="flex items-center space-x-2 mb-4">
                <UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">{course.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">{formatDate(course.createdAt)}</span>
              </div>
            </CardContent>
          </Card>
        ))}


        
      </div>
      
    </div>
  )
}


async function getData() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/courses/all`,{ cache: 'no-store' })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error("Error:", error);
    });
  return res;
}

function formatDate(dateString:string) {
  const date = new Date(dateString);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
    timeZoneName: 'short'
  };
  // @ts-ignore
  return new Intl.DateTimeFormat('de-DE', options).format(date);
}