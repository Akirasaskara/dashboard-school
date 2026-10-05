export type UserRole = "ADMIN" | "TEACHER" | "STUDENT";

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
};
