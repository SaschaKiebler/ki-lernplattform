/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/bf1z8cvSgWG
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function Settings() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 md:py-16">
      <div className="px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <div className="space-y-6">
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              <div className="flex items-center space-x-4">
                <UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="font-medium text-gray-900 dark:text-gray-100">Profile</span>
              </div>
              <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 [data-state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pt-4 pb-6">
              <div className="space-y-4">
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-gray-500 dark:text-gray-400" htmlFor="name">
                    Name
                  </label>
                  <Input defaultValue="John Doe" id="name" />
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-gray-500 dark:text-gray-400" htmlFor="email">
                    Email
                  </label>
                  <Input defaultValue="john@example.com" id="email" type="email" />
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-gray-500 dark:text-gray-400" htmlFor="avatar">
                    Avatar
                  </label>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button variant="outline">Change</Button>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              <div className="flex items-center space-x-4">
                <LockIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="font-medium text-gray-900 dark:text-gray-100">Account</span>
              </div>
              <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 [data-state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pt-4 pb-6">
              <div className="space-y-4">
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-gray-500 dark:text-gray-400" htmlFor="password">
                    Password
                  </label>
                  <Input defaultValue="********" id="password" type="password" />
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-gray-500 dark:text-gray-400" htmlFor="two-factor">
                    Two-Factor Auth
                  </label>
                  <div className="flex items-center space-x-2">
                    <Switch id="two-factor" />
                    <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                  </div>
                </div>
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-gray-500 dark:text-gray-400" htmlFor="delete-account">
                    Delete Account
                  </label>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              <div className="flex items-center space-x-4">
                <BellIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="font-medium text-gray-900 dark:text-gray-100">Notifications</span>
              </div>
              <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 [data-state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pt-4 pb-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox defaultChecked id="new-course" />
                  <Label htmlFor="new-course">Notify me about new courses</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox defaultChecked id="course-updates" />
                  <Label htmlFor="course-updates">Notify me about course updates</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="new-assignments" />
                  <Label htmlFor="new-assignments">Notify me about new assignments</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="grade-updates" />
                  <Label htmlFor="grade-updates">Notify me about grade updates</Label>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              <div className="flex items-center space-x-4">
                <LockIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="font-medium text-gray-900 dark:text-gray-100">Privacy</span>
              </div>
              <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 [data-state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pt-4 pb-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="public-profile" />
                  <Label htmlFor="public-profile">Make my profile public</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="share-data" />
                  <Label htmlFor="share-data">Share my data with third-party providers</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox defaultChecked id="receive-emails" />
                  <Label htmlFor="receive-emails">Receive email updates</Label>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  )
}

function BellIcon(props:any) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function ChevronDownIcon(props:any) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function LockIcon(props:any) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function UserIcon(props:any) {
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