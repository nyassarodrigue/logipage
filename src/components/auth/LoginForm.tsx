"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useTranslations } from "next-intl";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginSchema } from "@/lib/validations/login.schema";

import {ROUTES} from "@/constants/routes";
import LoadingButton from "@/components/common/LoadingButton";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import PasswordInput from "./PasswordInput";

export default function LoginForm() {
  const t = useTranslations("Login");

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const {login}=useAuth();

  const onSubmit = async (data: LoginSchema) => {
    try {
      await login(data);

      console.log("Utilisateur connecté");
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

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
          className="space-y-5"
        >
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email")}</FormLabel>

                <FormControl>
                  <Input
                    type="email"
                    autoComplete="email"
                    placeholder={t("emailPlaceholder")}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("password")}</FormLabel>

                <FormControl>
                  <PasswordInput
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={t("passwordPlaceholder")}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) =>
                        field.onChange(Boolean(checked))
                      }
                    />
                  </FormControl>

                  <FormLabel className="font-normal cursor-pointer">
                    {t("rememberMe")}
                  </FormLabel>
                </FormItem>
              )}
            />

            <Link href={ROUTES.FORGOT_PASSWORD}>{t("forgotPassword")}</Link>
          </div>

          {/* Submit */}
          <LoadingButton
            type="submit"
            loading={form.formState.isSubmitting}
            className="h-12 w-full"
          >
            {t("submit")}
          </LoadingButton>
        </form>
      </Form>
    </div>
  );
}
