"use client";

import { CalendarClock, CheckCircle2, Clock3, FileText, Plus, Search, UploadCloud } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { PageHeader } from "@/components/shared/page-header";
import { StatusPill } from "@/components/shared/status-pill";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const assignments = [
  { title: "Algebra practice set", course: "Mathematics · Grade 10A", deadline: "03 Apr · 23:59", submissions: "26 / 32", status: "Published" },
  { title: "Cell structure lab notes", course: "Biology · Grade 9B", deadline: "05 Apr · 20:00", submissions: "18 / 30", status: "Published" },
  { title: "Short story reflection", course: "Indonesian Literature · Grade 11A", deadline: "08 Apr · 23:59", submissions: "0 / 28", status: "Draft" },
];

export function AssignmentWorkspace() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Assessment" title="Assignments" description="Create focused work, follow submission progress, and return actionable feedback." actions={<Button asChild><Link href="/assignments/new"><Plus className="h-4 w-4" />Create assignment</Link></Button>} />
      <div className="flex flex-col gap-3 rounded-2xl border bg-white p-4 sm:flex-row"><label className="relative flex-1"><span className="sr-only">Search assignments</span><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input className="pl-9" placeholder="Search assignments" /></label><Button variant="outline">All courses</Button><Button variant="outline">All statuses</Button></div>
      <div className="grid gap-4 sm:grid-cols-3">{[{ label: "Published", value: 12, icon: FileText }, { label: "Pending grading", value: 18, icon: Clock3 }, { label: "Due this week", value: 4, icon: CalendarClock }].map(({ label, value, icon: Icon }) => <Card key={label}><CardContent className="flex items-center gap-4 p-5"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700"><Icon className="h-5 w-5" /></span><div><p className="text-2xl font-bold">{value}</p><p className="text-xs text-muted-foreground">{label}</p></div></CardContent></Card>)}</div>
      <Card><CardContent className="divide-y p-0">{assignments.map((item) => <Link href="/assignments/algebra-practice" key={item.title} className="grid gap-4 p-5 transition hover:bg-muted/30 md:grid-cols-[1fr_auto_auto_auto] md:items-center"><div><p className="font-semibold">{item.title}</p><p className="mt-1 text-sm text-muted-foreground">{item.course}</p></div><p className="text-sm"><span className="block text-xs text-muted-foreground">Deadline</span>{item.deadline}</p><p className="text-sm"><span className="block text-xs text-muted-foreground">Submissions</span>{item.submissions}</p><StatusPill status={item.status} /></Link>)}</CardContent></Card>
    </div>
  );
}

export function AssignmentEditor() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Mathematics · Grade 10A" title="Create assignment" description="Define clear instructions, fair timing, and the submission policy before publishing." actions={<><Button variant="outline">Save draft</Button><Button>Publish assignment</Button></>} />
      <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
        <Card><CardHeader><CardTitle>Assignment details</CardTitle><CardDescription>Students see this information on the assignment page.</CardDescription></CardHeader><CardContent className="space-y-5"><div className="space-y-2"><label htmlFor="title" className="text-sm font-semibold">Title</label><Input id="title" defaultValue="Algebra practice set" /></div><div className="space-y-2"><label htmlFor="instructions" className="text-sm font-semibold">Instructions</label><Textarea id="instructions" defaultValue="Complete questions 1–15. Show your working for each equation and upload a clear PDF or photo of your work." /></div><button className="flex w-full flex-col items-center rounded-2xl border-2 border-dashed p-8 text-center hover:bg-muted/30"><UploadCloud className="h-7 w-7 text-primary" /><span className="mt-3 font-semibold">Add assignment resources</span><span className="mt-1 text-xs text-muted-foreground">PDF, DOCX, or image up to the configured limit</span></button></CardContent></Card>
        <Card><CardHeader><CardTitle>Rules and timing</CardTitle></CardHeader><CardContent className="space-y-5"><div className="space-y-2"><label className="text-sm font-semibold" htmlFor="deadline">Deadline</label><Input id="deadline" type="datetime-local" defaultValue="2026-04-03T23:59" /></div><div className="space-y-2"><label className="text-sm font-semibold" htmlFor="score">Maximum score</label><Input id="score" type="number" defaultValue="100" /></div>{["Allow late submissions", "Allow resubmission", "Notify enrolled students"].map((label, index) => <label key={label} className="flex items-start gap-3 rounded-xl border p-3"><input type="checkbox" defaultChecked={index !== 0} className="mt-1 h-4 w-4" /><span><span className="block text-sm font-semibold">{label}</span><span className="block text-xs text-muted-foreground">This policy is enforced by the server.</span></span></label>)}</CardContent></Card>
      </div>
    </div>
  );
}

export function AssignmentSubmission() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Mathematics · Grade 10A" title="Algebra practice set" description="Complete questions 1–15 and show your working for each equation." />
      <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
        <Card><CardHeader><CardTitle>Your submission</CardTitle><CardDescription>You can submit text, approved attachments, or both.</CardDescription></CardHeader><CardContent className="space-y-5">{submitted ? <div className="rounded-2xl bg-emerald-50 p-5 text-emerald-900"><CheckCircle2 className="h-7 w-7" /><p className="mt-3 font-semibold">Submission received</p><p className="mt-1 text-sm">Version 1 was submitted on 30 March at 14:32 WIB.</p></div> : <><Textarea placeholder="Add a note for your teacher..." /><button className="flex w-full flex-col items-center rounded-2xl border-2 border-dashed p-8 text-center hover:bg-muted/30"><UploadCloud className="h-7 w-7 text-primary" /><span className="mt-3 font-semibold">Upload your work</span><span className="mt-1 text-xs text-muted-foreground">PDF or image · private to you and your course teachers</span></button><Button className="w-full" onClick={() => setSubmitted(true)}>Submit assignment</Button></>}</CardContent></Card>
        <div className="space-y-5"><Card><CardHeader><CardTitle>Assignment details</CardTitle></CardHeader><CardContent className="space-y-4 text-sm"><p><span className="block text-xs text-muted-foreground">Deadline</span><span className="font-semibold">03 April 2026 · 23:59 WIB</span></p><p><span className="block text-xs text-muted-foreground">Maximum score</span><span className="font-semibold">100 points</span></p><p><span className="block text-xs text-muted-foreground">Resubmission</span><span className="font-semibold">Allowed until deadline</span></p></CardContent></Card><Card><CardHeader><CardTitle>Submission history</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">No previous versions yet.</p></CardContent></Card></div>
      </div>
    </div>
  );
}
