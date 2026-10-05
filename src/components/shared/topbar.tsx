"use client";

import { Bell, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { SessionUser } from "@/types/auth";

export function Topbar({ user, onMenuClick }: { user: SessionUser; onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur-xl">
      <div className="flex h-18 items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Button variant="outline" size="icon" className="lg:hidden" onClick={onMenuClick} aria-label="Open navigation">
          <Menu className="h-5 w-5" />
        </Button>

        <label className="relative hidden max-w-md flex-1 md:block">
          <span className="sr-only">Search the LMS</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="bg-white pl-9" placeholder="Search courses, people, or work..." />
        </label>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Button variant="outline" size="icon" className="relative bg-white" aria-label="Open notifications">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </Button>
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold">{user.name}</p>
            <p className="text-xs capitalize text-muted-foreground">{user.role.toLowerCase()}</p>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-sm font-bold text-white" aria-label={`${user.name} profile`}>
            {user.name
              .split(" ")
              .slice(0, 2)
              .map((part) => part[0])
              .join("")}
          </div>
        </div>
      </div>
    </header>
  );
}
