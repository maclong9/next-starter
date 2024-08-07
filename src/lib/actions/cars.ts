"use server";

import { revalidatePath } from "next/cache";
import {
  createCar,
  deleteCar,
  updateCar,
} from "@/lib/api/cars/mutations";
import {
  CarId,
  NewCarParams,
  UpdateCarParams,
  carIdSchema,
  insertCarParams,
  updateCarParams,
} from "@/lib/db/schema/cars";

const handleErrors = (e: unknown) => {
  const errMsg = "Error, please try again.";
  if (e instanceof Error) return e.message.length > 0 ? e.message : errMsg;
  if (e && typeof e === "object" && "error" in e) {
    const errAsStr = e.error as string;
    return errAsStr.length > 0 ? errAsStr : errMsg;
  }
  return errMsg;
};

const revalidateCars = () => revalidatePath("/cars");

export const createCarAction = async (input: NewCarParams) => {
  try {
    const payload = insertCarParams.parse(input);
    await createCar(payload);
    revalidateCars();
  } catch (e) {
    return handleErrors(e);
  }
};

export const updateCarAction = async (input: UpdateCarParams) => {
  try {
    const payload = updateCarParams.parse(input);
    await updateCar(payload.id, payload);
    revalidateCars();
  } catch (e) {
    return handleErrors(e);
  }
};

export const deleteCarAction = async (input: CarId) => {
  try {
    const payload = carIdSchema.parse({ id: input });
    await deleteCar(payload.id);
    revalidateCars();
  } catch (e) {
    return handleErrors(e);
  }
};