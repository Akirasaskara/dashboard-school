"use client";

import { useState } from "react";

import { AppSidebar } from "@/components/shared/app-sidebar";
import { Topbar } from "@/components/shared/topbar";
import type { SessionUser } from "@/types/auth";

const slicedUser: SessionUser = {
  id: "usr_admin_001",
  name: "Alya Pratama",
  email: "alya.pratama@nusantara.sch.id",
  role: "ADMIN",
};

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar role={slicedUser.role} mobileOpen={mobileOpen} onMobileOpenChange={setMobileOpen} />
      <div className="min-w-0 flex-1">
        <Topbar user={slicedUser} onMenuClick={() => setMobileOpen(true)} />
        <main className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
