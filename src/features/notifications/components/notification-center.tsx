"use client";

import { Bell, BookOpen, Check, ClipboardCheck, Megaphone } from "lucide-react";
import { useState } from "react";

import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const initialNotifications = [
  { id: 1, title: "New assignment published", detail: "Algebra practice set · Mathematics Grade 10A", time: "10 minutes ago", read: false, icon: BookOpen },
  { id: 2, title: "Grade released", detail: "Narrative elements quiz · 88/100", time: "1 hour ago", read: false, icon: ClipboardCheck },
  { id: 3, title: "Course announcement", detail: "Bring graph paper on Wednesday", time: "Yesterday", read: true, icon: Megaphone },
];

export function NotificationCenter() {
  const [items, setItems] = useState(initialNotifications);
  return <div className="space-y-6"><PageHeader eyebrow="Inbox" title="Notifications" description="Keep track of course announcements, deadlines, and released results." actions={<Button variant="outline" onClick={() => setItems((current) => current.map((item) => ({ ...item, read: true })))}><Check className="h-4 w-4" />Mark all read</Button>} /><Card><CardContent className="divide-y p-0">{items.map(({ id, title, detail, time, read, icon: Icon }) => <button key={id} onClick={() => setItems((current) => current.map((item) => item.id === id ? { ...item, read: true } : item))} className={`flex w-full gap-4 p-5 text-left transition hover:bg-muted/40 ${read ? "bg-white" : "bg-blue-50/60"}`}><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-primary shadow-sm"><Icon className="h-5 w-5" /></span><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><p className="font-semibold">{title}</p>{!read ? <span className="h-2 w-2 rounded-full bg-primary" aria-label="Unread" /> : null}</div><p className="mt-1 text-sm text-muted-foreground">{detail}</p></div><time className="text-xs text-muted-foreground">{time}</time></button>)}</CardContent></Card><div className="flex justify-center"><Button variant="outline"><Bell className="h-4 w-4" />Load older notifications</Button></div></div>;
}
