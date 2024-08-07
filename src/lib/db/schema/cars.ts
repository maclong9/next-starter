import { sql } from "drizzle-orm";
import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { type getCars } from "@/lib/api/cars/queries";

import { timestamps } from "@/lib/utils";
import { nanoid } from "nanoid";

export const cars = pgTable('cars', {
  id: varchar("id", { length: 191 }).primaryKey().$defaultFn(() => nanoid()),
  name: varchar("name", { length: 256 }).notNull(),
  make: varchar("make", { length: 256 }).notNull(),

  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
  updatedAt: timestamp("updated_at")
    .notNull()
    .default(sql`now()`),

});


// Schema for cars - used to validate API requests
const baseSchema = createSelectSchema(cars).omit(timestamps)

export const insertCarSchema = createInsertSchema(cars).omit(timestamps);
export const insertCarParams = baseSchema.extend({}).omit({
  id: true
});

export const updateCarSchema = baseSchema;
export const updateCarParams = baseSchema.extend({})
export const carIdSchema = baseSchema.pick({ id: true });

// Types for cars - used to type API request params and within Components
export type Car = typeof cars.$inferSelect;
export type NewCar = z.infer<typeof insertCarSchema>;
export type NewCarParams = z.infer<typeof insertCarParams>;
export type UpdateCarParams = z.infer<typeof updateCarParams>;
export type CarId = z.infer<typeof carIdSchema>["id"];

// this type infers the return from getCars() - meaning it will include any joins
export type CompleteCar = Awaited<ReturnType<typeof getCars>>["cars"][number];

