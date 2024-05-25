import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';


export async function POST(request: NextRequest) {
/*  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }
*/

  const data = await request.formData();
  const title = data.get('title') as string;
  const description = data.get('description') as string;
  const lectures = JSON.parse(data.get('lectures') as string);
  const quizzes = JSON.parse(data.get('quizzes') as string);

  try {
    const course = await prisma.course.create({
      data: {
        name: title,
        description: description,
        author: { connect: { id: "1" } },
        Lecture: {
          create: lectures?.map((lecture: any) => ({
            name: lecture.title,
            videoUrl: lecture.url,
            description: '',
            texts: lecture.texts.map((text: string) => ({
              text: text,
            })),
          })),
        },
        Quiz: {
          create: quizzes?.map((quiz: any) => ({
            name: quiz.title,
            description: quiz.text,
            questions: [],
          })),
        },
      },
    });

    return new NextResponse(JSON.stringify({ message: "Course created", course }), { status: 200 });
  } catch (error) {
    console.error("Error creating course:", error);
    return new NextResponse(JSON.stringify({ message: "Error creating course" }), { status: 500 });
  }
}
