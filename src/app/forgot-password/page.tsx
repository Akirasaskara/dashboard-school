import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-12">
      <div className="w-full max-w-md rounded-3xl border bg-white p-7 shadow-soft sm:p-9">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700"><Mail className="h-6 w-6" /></div>
        <h1 className="mt-6 text-2xl font-bold">Reset your password</h1>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Enter your school email. If an account exists, we will send a time-limited reset link.</p>
        <form className="mt-7 space-y-5">
          <div className="space-y-2"><label htmlFor="email" className="text-sm font-semibold">School email</label><Input id="email" type="email" autoComplete="email" placeholder="name@nusantara.sch.id" /></div>
          <Button className="w-full">Send reset link</Button>
        </form>
        <Button asChild variant="ghost" className="mt-4 w-full"><Link href="/sign-in"><ArrowLeft className="h-4 w-4" />Back to sign in</Link></Button>
      </div>
    </main>
  );
}
