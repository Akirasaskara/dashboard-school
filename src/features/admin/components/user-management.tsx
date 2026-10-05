"use client";

import { Filter, MoreHorizontal, Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { PageHeader } from "@/components/shared/page-header";
import { StatusPill } from "@/components/shared/status-pill";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const users = [
  { id: "USR-001", name: "Rina Wijaya", email: "rina.wijaya@nusantara.sch.id", role: "Teacher", status: "Active", joined: "12 Jul 2023" },
  { id: "USR-002", name: "Dimas Hartono", email: "dimas.hartono@nusantara.sch.id", role: "Teacher", status: "Active", joined: "08 Jan 2024" },
  { id: "USR-003", name: "Nadia Putri", email: "nadia.putri@student.nusantara.sch.id", role: "Student", status: "Active", joined: "15 Jul 2025" },
  { id: "USR-004", name: "Rafi Nugraha", email: "rafi.n@student.nusantara.sch.id", role: "Student", status: "Inactive", joined: "15 Jul 2025" },
  { id: "USR-005", name: "Maya Sari", email: "maya.sari@nusantara.sch.id", role: "Teacher", status: "Active", joined: "03 Aug 2022" },
];

export function UserManagement() {
  const [query, setQuery] = useState("");
  const filteredUsers = useMemo(() => users.filter((user) => `${user.name} ${user.email} ${user.role}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Administration" title="People" description="Create school-managed accounts, review access, and keep account status current." actions={<Button><Plus className="h-4 w-4" />Add user</Button>} />
      <Card>
        <CardContent className="p-0">
          <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="relative w-full sm:max-w-sm"><span className="sr-only">Search users</span><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} className="pl-9" placeholder="Search name, email, or role" /></label>
            <Button variant="outline"><Filter className="h-4 w-4" />Filters</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-muted/50 text-left text-xs uppercase tracking-wide text-muted-foreground"><tr><th className="px-5 py-3">User</th><th className="px-5 py-3">Role</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Joined</th><th className="px-5 py-3"><span className="sr-only">Actions</span></th></tr></thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-t hover:bg-muted/30"><td className="px-5 py-4"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-xs font-bold text-white">{user.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span><div><p className="font-semibold">{user.name}</p><p className="text-xs text-muted-foreground">{user.email}</p></div></div></td><td className="px-5 py-4">{user.role}</td><td className="px-5 py-4"><StatusPill status={user.status} /></td><td className="px-5 py-4 text-muted-foreground">{user.joined}</td><td className="px-5 py-4 text-right"><Button variant="ghost" size="icon" aria-label={`Actions for ${user.name}`}><MoreHorizontal className="h-5 w-5" /></Button></td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t px-5 py-4 text-sm"><p className="text-muted-foreground">Showing {filteredUsers.length} of {users.length} users</p><div className="flex gap-2"><Button size="sm" variant="outline" disabled>Previous</Button><Button size="sm" variant="outline">Next</Button></div></div>
        </CardContent>
      </Card>
    </div>
  );
}
