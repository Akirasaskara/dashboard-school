import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MoreHorizontal,
  TrendingUp,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const metrics = [
  { label: "Active students", value: "1,248", change: "+3.2%", icon: UsersRound, tone: "bg-blue-50 text-blue-700" },
  { label: "Teaching staff", value: "86", change: "+2 this term", icon: UserRoundCheck, tone: "bg-violet-50 text-violet-700" },
  { label: "Active courses", value: "54", change: "48 published", icon: BookOpen, tone: "bg-amber-50 text-amber-700" },
  { label: "Attendance today", value: "94.6%", change: "+1.1%", icon: CheckCircle2, tone: "bg-emerald-50 text-emerald-700" },
];

const courses = [
  { name: "Mathematics · Grade 10A", teacher: "Rina Wijaya", students: 32, progress: 78, status: "On track" },
  { name: "Biology · Grade 9B", teacher: "Dimas Hartono", students: 30, progress: 64, status: "Needs review" },
  { name: "Indonesian Literature · Grade 11A", teacher: "Maya Sari", students: 28, progress: 83, status: "On track" },
];

const activity = [
  { title: "Quiz results released", detail: "Biology · Grade 9B", time: "12 minutes ago", icon: TrendingUp },
  { title: "Attendance corrected", detail: "Mathematics · Grade 10A", time: "38 minutes ago", icon: CheckCircle2 },
  { title: "New assignment published", detail: "Indonesian Literature · Grade 11A", time: "1 hour ago", icon: BookOpen },
];

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-primary">Monday, 30 March</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">Good morning, Alya</h1>
          <p className="mt-2 text-sm text-muted-foreground">Here is what is happening across Nusantara School today.</p>
        </div>
        <Button asChild><Link href="/reports">View school report <ArrowRight className="h-4 w-4" /></Link></Button>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="School overview metrics">
        {metrics.map(({ label, value, change, icon: Icon, tone }) => (
          <Card key={label}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between"><span className={`grid h-11 w-11 place-items-center rounded-2xl ${tone}`}><Icon className="h-5 w-5" /></span><Badge variant="outline">{change}</Badge></div>
              <p className="mt-5 text-3xl font-bold tracking-tight">{value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.45fr_0.75fr]">
        <Card>
          <CardHeader className="flex-row items-start justify-between">
            <div><CardTitle>Course health</CardTitle><CardDescription className="mt-1">Published course progress in the active academic year.</CardDescription></div>
            <Button variant="ghost" size="icon" aria-label="Course health options"><MoreHorizontal className="h-5 w-5" /></Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {courses.map((course) => (
                <div key={course.name} className="grid gap-3 rounded-2xl border p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><p className="font-semibold">{course.name}</p><Badge variant={course.status === "On track" ? "success" : "warning"}>{course.status}</Badge></div><p className="mt-1 text-sm text-muted-foreground">{course.teacher} · {course.students} students</p></div>
                  <div className="min-w-40"><div className="mb-2 flex justify-between text-xs"><span className="text-muted-foreground">Completion</span><span className="font-semibold">{course.progress}%</span></div><Progress value={course.progress} /></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Today</CardTitle><CardDescription>Important school operations.</CardDescription></CardHeader>
          <CardContent className="space-y-3">
            {[{ label: "Classes scheduled", value: 42, icon: CalendarDays }, { label: "Pending grading", value: 18, icon: Clock3 }, { label: "Students absent", value: 67, icon: UsersRound }].map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl bg-muted/70 p-4"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-sm"><Icon className="h-5 w-5" /></span><div><p className="text-xl font-bold">{value}</p><p className="text-xs text-muted-foreground">{label}</p></div></div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Recent activity</CardTitle><CardDescription>Latest learning and academic record updates.</CardDescription></CardHeader>
          <CardContent className="space-y-1">
            {activity.map(({ title, detail, time, icon: Icon }) => (
              <div key={`${title}-${detail}`} className="flex gap-3 border-b py-4 last:border-0"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"><Icon className="h-5 w-5" /></span><div className="min-w-0 flex-1"><p className="font-semibold">{title}</p><p className="truncate text-sm text-muted-foreground">{detail}</p></div><time className="text-xs text-muted-foreground">{time}</time></div>
            ))}
          </CardContent>
        </Card>
        <Card className="overflow-hidden bg-slate-950 text-white">
          <CardContent className="relative p-7">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/30 blur-3xl" />
            <Badge className="bg-white/10 text-blue-100">Academic year 2025/2026</Badge>
            <h2 className="relative mt-7 max-w-md text-2xl font-bold">Prepare the school for the next assessment cycle.</h2>
            <p className="relative mt-3 max-w-lg text-sm leading-6 text-slate-300">Review grade weights, incomplete attendance sessions, and upcoming deadlines before reports are released.</p>
            <Button asChild className="relative mt-7 bg-white text-slate-950 hover:bg-slate-100"><Link href="/reports">Review readiness</Link></Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
