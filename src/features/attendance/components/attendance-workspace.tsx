"use client";

import { CalendarCheck, CheckCircle2, Save } from "lucide-react";
import { useState } from "react";

import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const students = ["Nadia Putri", "Rafi Nugraha", "Farhan Akbar", "Siti Maharani", "Kevin Wijaya", "Aulia Rahman"];
const statuses = ["Present", "Absent", "Late", "Excused", "Sick"] as const;
type AttendanceStatus = (typeof statuses)[number];

export function AttendanceWorkspace() {
  const [records, setRecords] = useState<Record<string, AttendanceStatus>>(Object.fromEntries(students.map((student) => [student, "Present"])));
  return <div className="space-y-6"><PageHeader eyebrow="Mathematics · Grade 10A" title="Attendance" description="Record one status for every enrolled student and keep corrections auditable." actions={<Button><CalendarCheck className="h-4 w-4" />New session</Button>} /><section className="grid gap-4 sm:grid-cols-3">{[{ label: "Present", value: 29 }, { label: "Late", value: 2 }, { label: "Absent", value: 1 }].map((item) => <Card key={item.label}><CardContent className="p-5"><p className="text-3xl font-bold">{item.value}</p><p className="mt-1 text-sm text-muted-foreground">{item.label} today</p></CardContent></Card>)}</section><Card><CardHeader className="flex-row items-start justify-between"><div><CardTitle>Monday, 30 March 2026</CardTitle><CardDescription className="mt-1">08:00–09:30 · Room 201 · 32 enrolled</CardDescription></div><Button><Save className="h-4 w-4" />Save attendance</Button></CardHeader><CardContent className="space-y-2">{students.map((student, index) => <div key={student} className="flex flex-col gap-3 rounded-2xl border p-4 md:flex-row md:items-center"><span className="grid h-10 w-10 place-items-center rounded-full bg-muted text-sm font-bold">{index + 1}</span><div className="min-w-0 flex-1"><p className="font-semibold">{student}</p><p className="text-xs text-muted-foreground">Student ID · STD-{String(index + 1).padStart(4, "0")}</p></div><div className="flex flex-wrap gap-2">{statuses.map((status) => <button key={status} onClick={() => setRecords((value) => ({ ...value, [student]: status }))} className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${records[student] === status ? "border-primary bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>{status}</button>)}</div></div>)}</CardContent></Card><Card className="bg-emerald-50"><CardContent className="flex items-center gap-3 p-5 text-emerald-900"><CheckCircle2 className="h-5 w-5" /><p className="text-sm">All enrolled students have an attendance status.</p></CardContent></Card></div>;
}
