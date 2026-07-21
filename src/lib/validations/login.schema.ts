import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "L'adresse email est obligatoire")
    .email("Adresse email invalide"),

  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères"),

  rememberMe: z.boolean().default(false),
});

export type LoginSchema = z.infer<typeof loginSchema>;
