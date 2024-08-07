import { db } from "@/lib/db/index";
import { eq } from "drizzle-orm";
import { 
  CarId, 
  NewCarParams,
  UpdateCarParams, 
  updateCarSchema,
  insertCarSchema, 
  cars,
  carIdSchema 
} from "@/lib/db/schema/cars";

export const createCar = async (car: NewCarParams) => {
  const newCar = insertCarSchema.parse(car);
  try {
    const [c] =  await db.insert(cars).values(newCar).returning();
    return { car: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const updateCar = async (id: CarId, car: UpdateCarParams) => {
  const { id: carId } = carIdSchema.parse({ id });
  const newCar = updateCarSchema.parse(car);
  try {
    const [c] =  await db
     .update(cars)
     .set({...newCar, updatedAt: new Date() })
     .where(eq(cars.id, carId!))
     .returning();
    return { car: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const deleteCar = async (id: CarId) => {
  const { id: carId } = carIdSchema.parse({ id });
  try {
    const [c] =  await db.delete(cars).where(eq(cars.id, carId!))
    .returning();
    return { car: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

