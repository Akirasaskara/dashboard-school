"use client";

import {
  BarChart3,
  Bell,
  BookOpen,
  CalendarCheck,
  ClipboardList,
  FileQuestion,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  School,
  Settings,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { UserRole } from "@/types/auth";

type NavigationItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  roles: UserRole[];
};

const navigation: NavigationItem[] = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard, roles: ["ADMIN"] },
  { label: "Overview", href: "/teacher", icon: LayoutDashboard, roles: ["TEACHER"] },
  { label: "Overview", href: "/student", icon: LayoutDashboard, roles: ["STUDENT"] },
  { label: "People", href: "/admin/users", icon: UsersRound, roles: ["ADMIN"] },
  { label: "Academics", href: "/admin/academics", icon: School, roles: ["ADMIN"] },
  { label: "Courses", href: "/courses", icon: BookOpen, roles: ["ADMIN", "TEACHER", "STUDENT"] },
  { label: "Assignments", href: "/assignments", icon: ClipboardList, roles: ["TEACHER", "STUDENT"] },
  { label: "Quizzes", href: "/quizzes", icon: FileQuestion, roles: ["TEACHER", "STUDENT"] },
  { label: "Attendance", href: "/attendance", icon: CalendarCheck, roles: ["TEACHER", "STUDENT"] },
  { label: "Gradebook", href: "/grades", icon: GraduationCap, roles: ["TEACHER", "STUDENT"] },
  { label: "Reports", href: "/reports", icon: BarChart3, roles: ["ADMIN", "TEACHER", "STUDENT"] },
  { label: "Notifications", href: "/notifications", icon: Bell, roles: ["ADMIN", "TEACHER", "STUDENT"] },
];

const accountNavigation: NavigationItem[] = [
  { label: "Profile", href: "/profile", icon: UserRound, roles: ["ADMIN", "TEACHER", "STUDENT"] },
  { label: "Settings", href: "/settings", icon: Settings, roles: ["ADMIN", "TEACHER", "STUDENT"] },
];

export function AppSidebar({
  role,
  mobileOpen,
  onMobileOpenChange,
}: {
  role: UserRole;
  mobileOpen: boolean;
  onMobileOpenChange: (open: boolean) => void;
}) {
  const pathname = usePathname();

  const renderItem = (item: NavigationItem) => {
    if (!item.roles.includes(role)) return null;
    const active = pathname === item.href || (item.href !== `/${role.toLowerCase()}` && pathname.startsWith(`${item.href}/`));
    const Icon = item.icon;

    return (
      <Link
        key={`${item.href}-${item.label}`}
        href={item.href}
        onClick={() => onMobileOpenChange(false)}
        className={cn(
          "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          active ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-slate-100 hover:text-slate-950",
        )}
      >
        <Icon className="h-5 w-5 shrink-0" />
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    <>
      {mobileOpen ? (
        <button
          aria-label="Close navigation backdrop"
          className="fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-sm lg:hidden"
          onClick={() => onMobileOpenChange(false)}
        />
      ) : null}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r bg-white px-4 py-5 transition-transform lg:static lg:w-64 lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-2">
          <Link href={`/${role.toLowerCase()}`} className="flex items-center gap-3" onClick={() => onMobileOpenChange(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
              <GraduationCap className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-base font-bold tracking-tight">NusaLearn</span>
              <span className="block text-xs text-muted-foreground">School LMS</span>
            </span>
          </Link>
          <Button className="lg:hidden" variant="ghost" size="icon" onClick={() => onMobileOpenChange(false)} aria-label="Close menu">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav aria-label="Primary navigation" className="mt-8 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto">
          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Workspace</p>
          {navigation.map(renderItem)}
          <p className="mt-6 px-3 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Account</p>
          {accountNavigation.map(renderItem)}
        </nav>

        <button className="mt-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <LogOut className="h-5 w-5" />
          Sign out
        </button>
      </aside>
    </>
  );
}
