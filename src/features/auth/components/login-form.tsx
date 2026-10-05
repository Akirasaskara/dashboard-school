"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const loginSchema = z.object({
  email: z.email("Enter a valid school email address."),
  password: z.string().min(8, "Password must contain at least 8 characters."),
});

type LoginInput = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push("/admin");
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="space-y-2">
        <label className="text-sm font-semibold" htmlFor="email">School email</label>
        <Input id="email" type="email" autoComplete="email" placeholder="name@nusantara.sch.id" aria-invalid={Boolean(errors.email)} {...register("email")} />
        {errors.email ? <p className="text-sm text-red-600" role="alert">{errors.email.message}</p> : null}
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold" htmlFor="password">Password</label>
          <Link href="/forgot-password" className="text-sm font-semibold text-primary hover:underline">Forgot password?</Link>
        </div>
        <div className="relative">
          <Input id="password" type={showPassword ? "text" : "password"} autoComplete="current-password" className="pr-11" aria-invalid={Boolean(errors.password)} {...register("password")} />
          <button type="button" className="absolute right-1 top-1 grid h-9 w-9 place-items-center rounded-lg text-muted-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onClick={() => setShowPassword((current) => !current)} aria-label={showPassword ? "Hide password" : "Show password"}>
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {errors.password ? <p className="text-sm text-red-600" role="alert">{errors.password.message}</p> : null}
      </div>
      <Button className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? <><LoaderCircle className="h-4 w-4 animate-spin" /> Signing in...</> : "Sign in"}
      </Button>
      <p className="text-center text-xs leading-5 text-muted-foreground">Accounts are created by your school administrator. Contact the school office if you need access.</p>
    </form>
  );
}
