import { Badge } from "@/components/ui/badge";

type StatusTone = "default" | "secondary" | "success" | "warning" | "destructive" | "outline";

const statusTone: Record<string, StatusTone> = {
  Active: "success",
  Published: "success",
  Submitted: "success",
  Graded: "success",
  Draft: "secondary",
  Pending: "warning",
  Late: "warning",
  Inactive: "destructive",
  Archived: "outline",
};

export function StatusPill({ status }: { status: string }) {
  return <Badge variant={statusTone[status] ?? "default"}>{status}</Badge>;
}
