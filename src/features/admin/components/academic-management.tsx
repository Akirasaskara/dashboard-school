import { BookOpen, CalendarRange, Plus, School, UsersRound } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { StatusPill } from "@/components/shared/status-pill";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const classes = [
  { name: "Grade 10A", adviser: "Rina Wijaya", students: 32 },
  { name: "Grade 9B", adviser: "Dimas Hartono", students: 30 },
  { name: "Grade 11A", adviser: "Maya Sari", students: 28 },
];

const subjects = ["Mathematics", "Biology", "Indonesian Literature", "English", "Civics", "Computer Science"];

export function AcademicManagement() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Administration" title="Academic structure" description="Organize the active school year, subjects, classes, and student membership before building courses." actions={<Button><Plus className="h-4 w-4" />Add academic item</Button>} />
      <section className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex-row items-start justify-between"><div><CardTitle>Academic years</CardTitle><CardDescription className="mt-1">Only one year can be active at a time.</CardDescription></div><CalendarRange className="h-5 w-5 text-primary" /></CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border-2 border-primary bg-blue-50/60 p-5"><div className="flex items-center justify-between"><p className="font-semibold">2025/2026</p><StatusPill status="Active" /></div><p className="mt-3 text-sm text-muted-foreground">14 July 2025 — 19 June 2026</p></div>
              <div className="rounded-2xl border p-5"><div className="flex items-center justify-between"><p className="font-semibold">2024/2025</p><StatusPill status="Archived" /></div><p className="mt-3 text-sm text-muted-foreground">15 July 2024 — 20 June 2025</p></div>
            </div>
          </CardContent>
        </Card>
        <Card><CardHeader><CardTitle>Structure overview</CardTitle></CardHeader><CardContent className="space-y-4">{[{ label: "School classes", value: 18, icon: School }, { label: "Subjects", value: 12, icon: BookOpen }, { label: "Memberships", value: 1248, icon: UsersRound }].map(({ label, value, icon: Icon }) => <div key={label} className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-muted text-primary"><Icon className="h-5 w-5" /></span><div><p className="font-bold">{value}</p><p className="text-xs text-muted-foreground">{label}</p></div></div>)}</CardContent></Card>
      </section>
      <section className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <Card><CardHeader><CardTitle>School classes</CardTitle><CardDescription>Current class groups and advisers.</CardDescription></CardHeader><CardContent className="space-y-3">{classes.map((item) => <div key={item.name} className="flex items-center gap-4 rounded-2xl border p-4"><span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 font-bold text-violet-700">{item.name.replace("Grade ", "")}</span><div className="min-w-0 flex-1"><p className="font-semibold">{item.name}</p><p className="text-sm text-muted-foreground">Adviser · {item.adviser}</p></div><p className="text-sm font-semibold">{item.students} students</p></div>)}</CardContent></Card>
        <Card><CardHeader><CardTitle>Subjects</CardTitle><CardDescription>Subjects available for course creation.</CardDescription></CardHeader><CardContent className="flex flex-wrap gap-2">{subjects.map((subject) => <span key={subject} className="rounded-full border bg-muted/50 px-3 py-2 text-sm font-medium">{subject}</span>)}</CardContent></Card>
      </section>
    </div>
  );
}
