"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-white">Login</h1>

        <p className="text-sm text-slate-300">Welcome back</p>
      </div>

      <Input placeholder="Email" className="h-12" />

      <Input type="password" placeholder="Password" className="h-12" />

      <Button className="h-12 w-full">Sign in</Button>
    </div>
  );
}
