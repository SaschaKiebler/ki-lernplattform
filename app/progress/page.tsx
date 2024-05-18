import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function Progress() {
  return (
    <main className="py-8 px-6">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Introduction to Computer Science</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <span className="text-gray-500 mr-2">Grade:</span>
                <span className="text-green-500 font-bold">A</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-green-500 rounded-full w-[90%]" />
              </div>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Data Structures and Algorithms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <span className="text-gray-500 mr-2">Grade:</span>
                <span className="text-yellow-500 font-bold">B</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-yellow-500 rounded-full w-[80%]" />
              </div>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Database Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <span className="text-gray-500 mr-2">Grade:</span>
                <span className="text-red-500 font-bold">C</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-red-500 rounded-full w-[70%]" />
              </div>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Software Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <span className="text-gray-500 mr-2">Grade:</span>
                <span className="text-green-500 font-bold">A</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-green-500 rounded-full w-[95%]" />
              </div>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <span className="text-gray-500 mr-2">Grade:</span>
                <span className="text-yellow-500 font-bold">B</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-yellow-500 rounded-full w-[85%]" />
              </div>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Mobile Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <span className="text-gray-500 mr-2">Grade:</span>
                <span className="text-green-500 font-bold">A</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-green-500 rounded-full w-[92%]" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}