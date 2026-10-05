import { GraduationCap, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { LoginForm } from "@/features/auth/components/login-form";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-white lg:grid-cols-2">
      <section className="relative hidden overflow-hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,_rgba(37,99,235,0.4),_transparent_34%),radial-gradient(circle_at_85%_75%,_rgba(14,165,233,0.22),_transparent_34%)]" />
        <Link href="/" className="relative flex items-center gap-3 text-lg font-bold"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-500"><GraduationCap className="h-6 w-6" /></span>NusaLearn</Link>
        <div className="relative max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Your school day, connected</p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.08] tracking-[-0.04em]">A calm workspace for meaningful learning.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">Plan lessons, submit work, assess progress, and keep every learner informed from one secure place.</p>
        </div>
        <p className="relative text-sm text-slate-400">Nusantara School · Asia/Jakarta</p>
      </section>

      <section className="flex items-center justify-center px-5 py-12 sm:px-8">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-12 flex items-center gap-3 font-bold lg:hidden"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground"><GraduationCap className="h-6 w-6" /></span>NusaLearn</Link>
          <div className="mb-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"><ShieldCheck className="h-3.5 w-3.5" />Secure school access</div>
            <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Sign in with the account provided by your school administrator.</p>
          </div>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
