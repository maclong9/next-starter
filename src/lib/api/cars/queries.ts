import { db } from "@/lib/db/index";
import { eq } from "drizzle-orm";
import { type CarId, carIdSchema, cars } from "@/lib/db/schema/cars";

export const getCars = async () => {
  const rows = await db.select().from(cars);
  const c = rows
  return { cars: c };
};

export const getCarById = async (id: CarId) => {
  const { id: carId } = carIdSchema.parse({ id });
  const [row] = await db.select().from(cars).where(eq(cars.id, carId));
  if (row === undefined) return {};
  const c = row;
  return { car: c };
};


