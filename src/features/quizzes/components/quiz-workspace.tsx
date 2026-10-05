"use client";

import { CheckCircle2, ChevronLeft, ChevronRight, Clock3, FileQuestion, Plus, Save } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { PageHeader } from "@/components/shared/page-header";
import { StatusPill } from "@/components/shared/status-pill";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const quizzes = [
  { title: "Linear equations checkpoint", course: "Mathematics · Grade 10A", questions: 10, attempts: "24 / 32", status: "Published" },
  { title: "Cell biology essentials", course: "Biology · Grade 9B", questions: 12, attempts: "0 / 30", status: "Draft" },
  { title: "Narrative elements", course: "Indonesian Literature · Grade 11A", questions: 8, attempts: "28 / 28", status: "Published" },
];

export function QuizWorkspace() {
  return <div className="space-y-6"><PageHeader eyebrow="Assessment" title="Quizzes" description="Build objective assessments, control availability, and review automatically graded attempts." actions={<Button><Plus className="h-4 w-4" />Create quiz</Button>} /><section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{quizzes.map((quiz) => <Card key={quiz.title}><CardHeader><div className="flex items-start justify-between gap-4"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-50 text-violet-700"><FileQuestion className="h-5 w-5" /></span><StatusPill status={quiz.status} /></div><CardTitle className="pt-4">{quiz.title}</CardTitle><CardDescription>{quiz.course}</CardDescription></CardHeader><CardContent><div className="flex justify-between text-sm"><span><span className="block text-xs text-muted-foreground">Questions</span>{quiz.questions}</span><span><span className="block text-xs text-muted-foreground">Attempts</span>{quiz.attempts}</span></div><Button asChild variant="outline" className="mt-5 w-full"><Link href="/quizzes/linear-equations">Open quiz</Link></Button></CardContent></Card>)}</section></div>;
}

const questions = [
  { id: 1, text: "Which equation has x = 4 as its solution?", options: ["x + 2 = 5", "2x = 8", "x - 4 = 2", "3x = 9"] },
  { id: 2, text: "A linear equation has a variable raised only to the first power.", options: ["True", "False"] },
  { id: 3, text: "What is the first step when solving 3x + 6 = 18?", options: ["Multiply by 3", "Subtract 6 from both sides", "Add 6 to both sides", "Divide both sides by 18"] },
];

export function QuizAttempt() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const question = questions[current];

  if (submitted) return <div className="mx-auto max-w-2xl py-12"><Card><CardContent className="flex flex-col items-center p-10 text-center"><span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700"><CheckCircle2 className="h-8 w-8" /></span><h1 className="mt-6 text-2xl font-bold">Quiz submitted</h1><p className="mt-2 text-muted-foreground">Your attempt has been received. Results will appear when your teacher releases them.</p><Button asChild className="mt-7"><Link href="/quizzes">Return to quizzes</Link></Button></CardContent></Card></div>;

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><Badge>Attempt 1 of 2</Badge><h1 className="mt-3 text-2xl font-bold">Linear equations checkpoint</h1><p className="mt-1 text-sm text-muted-foreground">Mathematics · Grade 10A</p></div><div className="flex items-center gap-2 rounded-2xl border bg-white px-4 py-3"><Clock3 className="h-5 w-5 text-primary" /><div><p className="text-xs text-muted-foreground">Time remaining</p><p className="font-bold tabular-nums">18:42</p></div></div></div>
      <Progress value={((current + 1) / questions.length) * 100} />
      <div className="grid gap-6 lg:grid-cols-[1fr_240px]">
        <Card><CardHeader><CardDescription>Question {current + 1} of {questions.length}</CardDescription><CardTitle className="pt-2 text-xl leading-7">{question.text}</CardTitle></CardHeader><CardContent className="space-y-3">{question.options.map((option) => <label key={option} className={`flex cursor-pointer gap-3 rounded-2xl border p-4 transition ${answers[question.id] === option ? "border-primary bg-blue-50" : "hover:bg-muted/40"}`}><input type="radio" name={`question-${question.id}`} checked={answers[question.id] === option} onChange={() => setAnswers((value) => ({ ...value, [question.id]: option }))} /><span className="text-sm font-medium">{option}</span></label>)}<div className="flex items-center justify-between pt-5"><Button variant="outline" disabled={current === 0} onClick={() => setCurrent((value) => value - 1)}><ChevronLeft className="h-4 w-4" />Previous</Button>{current < questions.length - 1 ? <Button onClick={() => setCurrent((value) => value + 1)}>Next<ChevronRight className="h-4 w-4" /></Button> : <Button onClick={() => setSubmitted(true)}>Submit quiz</Button>}</div></CardContent></Card>
        <Card><CardHeader><CardTitle>Question map</CardTitle><CardDescription><span className="inline-flex items-center gap-1"><Save className="h-3.5 w-3.5" />Answers autosaved</span></CardDescription></CardHeader><CardContent><div className="grid grid-cols-5 gap-2">{Array.from({ length: 10 }, (_, index) => <button key={index} onClick={() => index < questions.length && setCurrent(index)} className={`grid h-9 w-9 place-items-center rounded-lg border text-sm font-semibold ${index === current ? "border-primary bg-primary text-primary-foreground" : answers[index + 1] ? "border-blue-200 bg-blue-50 text-blue-700" : "bg-white"}`}>{index + 1}</button>)}</div><p className="mt-5 text-xs leading-5 text-muted-foreground">Correct answers remain hidden until your teacher&apos;s configured release time.</p></CardContent></Card>
      </div>
    </div>
  );
}
