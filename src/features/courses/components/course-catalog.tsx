import { ArrowRight, BookOpen, Clock3, Plus, Search, UsersRound } from "lucide-react";
import Link from "next/link";

import { PageHeader } from "@/components/shared/page-header";
import { StatusPill } from "@/components/shared/status-pill";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const courses = [
  { slug: "mathematics-10a", title: "Mathematics", className: "Grade 10A", teacher: "Rina Wijaya", students: 32, progress: 78, lessons: 18, status: "Published", tone: "from-blue-600 to-cyan-500" },
  { slug: "biology-9b", title: "Biology", className: "Grade 9B", teacher: "Dimas Hartono", students: 30, progress: 64, lessons: 14, status: "Published", tone: "from-emerald-600 to-teal-500" },
  { slug: "literature-11a", title: "Indonesian Literature", className: "Grade 11A", teacher: "Maya Sari", students: 28, progress: 83, lessons: 20, status: "Published", tone: "from-violet-600 to-fuchsia-500" },
  { slug: "computer-science-10b", title: "Computer Science", className: "Grade 10B", teacher: "Arif Setiawan", students: 31, progress: 18, lessons: 4, status: "Draft", tone: "from-slate-700 to-slate-500" },
];

export function CourseCatalog() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Academic year 2025/2026" title="Courses" description="Open active learning spaces, review progress, and manage course publication." actions={<Button><Plus className="h-4 w-4" />Create course</Button>} />
      <div className="flex flex-col gap-3 rounded-2xl border bg-white p-4 sm:flex-row sm:items-center"><label className="relative flex-1"><span className="sr-only">Search courses</span><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input className="pl-9" placeholder="Search courses or classes" /></label><Button variant="outline">All statuses</Button><Button variant="outline">All classes</Button></div>
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.slug} className="overflow-hidden transition hover:-translate-y-0.5 hover:shadow-soft">
            <div className={`relative h-32 bg-gradient-to-br ${course.tone} p-5 text-white`}><div className="absolute right-4 top-4"><StatusPill status={course.status} /></div><BookOpen className="h-8 w-8 text-white/80" /><p className="mt-5 text-sm text-white/75">{course.className}</p><h2 className="text-xl font-bold">{course.title}</h2></div>
            <CardContent className="p-5"><p className="text-sm text-muted-foreground">Teacher</p><p className="mt-1 font-semibold">{course.teacher}</p><div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground"><span className="flex items-center gap-1.5"><UsersRound className="h-4 w-4" />{course.students} students</span><span className="flex items-center gap-1.5"><Clock3 className="h-4 w-4" />{course.lessons} materials</span></div><div className="mt-5"><div className="mb-2 flex justify-between text-xs"><span className="text-muted-foreground">Published progress</span><span className="font-semibold">{course.progress}%</span></div><Progress value={course.progress} /></div><Button asChild variant="ghost" className="mt-5 w-full justify-between"><Link href={`/courses/${course.slug}`}>Open course <ArrowRight className="h-4 w-4" /></Link></Button></CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
