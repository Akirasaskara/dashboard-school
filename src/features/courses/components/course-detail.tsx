import { Bell, BookOpenCheck, CalendarClock, CheckCircle2, FileText, MoreHorizontal, PlayCircle, Plus, UsersRound } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { StatusPill } from "@/components/shared/status-pill";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const sections = [
  { title: "1. Algebra foundations", items: [{ title: "Introduction to algebraic expressions", kind: "Text lesson", published: true, icon: FileText }, { title: "Variables and coefficients", kind: "Video · 12 min", published: true, icon: PlayCircle }, { title: "Practice worksheet", kind: "PDF · 1.8 MB", published: true, icon: FileText }] },
  { title: "2. Linear equations", items: [{ title: "Solving one-step equations", kind: "Text lesson", published: true, icon: FileText }, { title: "Graphing linear equations", kind: "Video · 18 min", published: false, icon: PlayCircle }] },
];

export function CourseDetail() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Mathematics · Grade 10A" title="Algebra and mathematical reasoning" description="Build a confident understanding of algebra, equations, and problem-solving through guided practice." actions={<><Button variant="outline"><Bell className="h-4 w-4" />Announcement</Button><Button><Plus className="h-4 w-4" />Add content</Button></>} />
      <section className="grid gap-4 sm:grid-cols-3">
        {[{ label: "Enrolled students", value: "32", icon: UsersRound }, { label: "Published materials", value: "18", icon: BookOpenCheck }, { label: "Upcoming deadline", value: "03 Apr", icon: CalendarClock }].map(({ label, value, icon: Icon }) => <Card key={label}><CardContent className="flex items-center gap-4 p-5"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700"><Icon className="h-5 w-5" /></span><div><p className="text-xl font-bold">{value}</p><p className="text-xs text-muted-foreground">{label}</p></div></CardContent></Card>)}
      </section>
      <section className="grid gap-6 xl:grid-cols-[1fr_320px]">
        <div className="space-y-5">
          {sections.map((section) => <Card key={section.title}><CardHeader className="flex-row items-center justify-between"><CardTitle>{section.title}</CardTitle><Button variant="ghost" size="icon" aria-label={`Options for ${section.title}`}><MoreHorizontal className="h-5 w-5" /></Button></CardHeader><CardContent className="space-y-2">{section.items.map(({ title, kind, published, icon: Icon }) => <div key={title} className="flex items-center gap-4 rounded-2xl border p-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-muted text-primary"><Icon className="h-5 w-5" /></span><div className="min-w-0 flex-1"><p className="font-semibold">{title}</p><p className="text-sm text-muted-foreground">{kind}</p></div><StatusPill status={published ? "Published" : "Draft"} /></div>)}</CardContent></Card>)}
        </div>
        <div className="space-y-5">
          <Card><CardHeader><CardTitle>Course progress</CardTitle><CardDescription>Average completion of published materials.</CardDescription></CardHeader><CardContent><p className="text-3xl font-bold">78%</p><Progress value={78} className="mt-3" /><div className="mt-5 space-y-3 text-sm"><p className="flex items-center justify-between"><span className="text-muted-foreground">Completed all</span><span className="font-semibold">18 students</span></p><p className="flex items-center justify-between"><span className="text-muted-foreground">In progress</span><span className="font-semibold">12 students</span></p><p className="flex items-center justify-between"><span className="text-muted-foreground">Not started</span><span className="font-semibold">2 students</span></p></div></CardContent></Card>
          <Card><CardHeader><CardTitle>Latest announcement</CardTitle></CardHeader><CardContent><Badge variant="secondary">Today</Badge><h3 className="mt-4 font-semibold">Bring graph paper on Wednesday</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">We will practice plotting linear equations during the second half of class.</p></CardContent></Card>
          <Card className="bg-emerald-50"><CardContent className="flex gap-3 p-5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" /><div><p className="font-semibold text-emerald-950">Course is student-ready</p><p className="mt-1 text-sm text-emerald-800">All published content has a valid order and visibility rule.</p></div></CardContent></Card>
        </div>
      </section>
    </div>
  );
}
