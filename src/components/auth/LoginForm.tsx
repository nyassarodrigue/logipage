"use client";

import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginSchema } from "@/lib/validations/login.schema";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import PasswordInput from "./PasswordInput";

export default function LoginForm() {
  const t = useTranslations("Login");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-white">{t("title")}</h1>

        <p className="text-sm text-slate-300">{t("subtitle")}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">{t("email")}</Label>

          <Input
            id="email"
            type="email"
            placeholder={t("emailPlaceholder")}
            {...register("email")}
          />

          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">{t("password")}</Label>

          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <PasswordInput
                value={field.value}
                onChange={field.onChange}
                placeholder={t("passwordPlaceholder")}
              />
            )}
          />

          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Remember me */}
        <div className="flex items-center justify-between">
          <Controller
            control={control}
            name="rememberMe"
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={field.value}
                  onCheckedChange={(checked) =>
                    field.onChange(Boolean(checked))
                  }
                />

                <Label htmlFor="rememberMe">{t("rememberMe")}</Label>
              </div>
            )}
          />

          <button
            type="button"
            className="text-sm text-blue-400 hover:underline"
          >
            {t("forgotPassword")}
          </button>
        </div>

        {/* Submit */}
        <Button type="submit" disabled={isSubmitting} className="h-12 w-full">
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

          {isSubmitting ? t("loading") : t("submit")}
        </Button>
      </form>
    </div>
  );
}
