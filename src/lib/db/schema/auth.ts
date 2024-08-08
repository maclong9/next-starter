import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";

export const roleEnum = pgEnum('role', ['user', 'editor', 'admin']);

export const users = pgTable("user", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  hashedPassword: text("hashed_password").notNull(),
  name: text("name"),
  role: roleEnum("role").notNull().default("user"),
});

export const sessions = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const authenticationSchema = z.object({
  email: z.string().email().min(5).max(64),
  password: z
    .string()
    .min(8, { message: "must be at least 8 characters long" })
    .regex(/[A-Z]/, { message: "must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, { message: "must contain at least one symbol" }),
  confirmPassword: z.string()

    .min(8, { message: "must be at least 8 characters long" })
}).refine((values) => {
  return values.password === values.confirmPassword;
}, {
  message: "Passwords must match!",
  path: ["confirmPassword"],
});

export const updateUserSchema = z.object({
  name: z.string().min(3).optional(),
  email: z.string().min(4).optional(),
});

export type UsernameAndPassword = z.infer<typeof authenticationSchema>;