'use client'
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/lib/actions";


export default function LoginForm() {

    const [errorMessage, dispach] = useFormState(authenticate, undefined);
    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-full max-w-md p-4 space-y-4 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-center text-black">Login</h1>
                <form action={dispach} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-black">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium text-black">Password</label>
                        <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <LoginButton />
                    <div className="w-full flex justify-center">
                        <a href="/auth/register" className="text-blue-500">Register</a>
                    </div>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();
    return (
        <button aria-disabled={pending} type="submit" className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Login</button>
    );
}