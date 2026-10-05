import { ArrowRight, BookOpenCheck, GraduationCap, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const highlights = [
  { icon: BookOpenCheck, title: "Focused learning", description: "Courses, assignments, quizzes, and progress in one calm workspace." },
  { icon: ShieldCheck, title: "Role-aware access", description: "Purpose-built experiences for administrators, teachers, and students." },
  { icon: GraduationCap, title: "School-wide insight", description: "Attendance, grades, and reports stay connected to real learning activity." },
];

export default function Homepage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.35),_transparent_38%),radial-gradient(circle_at_85%_25%,_rgba(14,165,233,0.2),_transparent_30%)]" />
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <Link href="/" className="flex items-center gap-3 font-bold tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-500"><GraduationCap className="h-6 w-6" /></span>
            NusaLearn
          </Link>
          <Button asChild variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </nav>

        <section className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-32 lg:pt-24">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-sm font-medium text-blue-200">One school. One learning workspace.</p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-6xl lg:text-7xl">Learning that stays clear from classroom to report card.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">NusaLearn connects daily teaching, student work, attendance, assessment, and communication without burying your school in complicated tools.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-400">
                <Link href="/sign-in">Open your workspace <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-slate-200 hover:bg-white/10 hover:text-white">
                <Link href="/admin">Preview the dashboard</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-blue-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-5 sm:p-7">
              <div className="mb-7 flex items-center justify-between">
                <div><p className="text-sm text-slate-400">Today at Nusantara School</p><p className="mt-1 text-xl font-semibold">A focused day of learning</p></div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">94% present</span>
              </div>
              <div className="space-y-3">
                {["Mathematics · Grade 10A", "Biology · Grade 9B", "Indonesian Literature · Grade 11A"].map((course, index) => (
                  <div key={course} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/15 font-bold text-blue-300">0{index + 1}</span>
                    <div className="min-w-0"><p className="truncate font-semibold">{course}</p><p className="text-sm text-slate-400">{8 + index * 2}:00 · Room {201 + index}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="border-t border-white/10 bg-white text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border bg-slate-50 p-6">
              <Icon className="h-7 w-7 text-blue-600" />
              <h2 className="mt-5 text-lg font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
