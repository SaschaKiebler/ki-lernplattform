import { auth } from "@/auth";


export default async function UserMenu() {
    const session = await auth();

  return (
    <>
    {session?.user && (
        
    <div className="flex items-center gap-2">
      <span>{session?.user?.name}</span>
    </div>
    )
    }
    {!session?.user && (
    <div className="flex items-center gap-2">
      <span>Not logged in</span>
    </div>
    )
    }
    </>
  );
}