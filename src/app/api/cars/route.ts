import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import {
  createCar,
  deleteCar,
  updateCar,
} from "@/lib/api/cars/mutations";
import { 
  carIdSchema,
  insertCarParams,
  updateCarParams 
} from "@/lib/db/schema/cars";

export async function POST(req: Request) {
  try {
    const validatedData = insertCarParams.parse(await req.json());
    const { car } = await createCar(validatedData);

    revalidatePath("/cars"); // optional - assumes you will have named route same as entity

    return NextResponse.json(car, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    } else {
      return NextResponse.json({ error: err }, { status: 500 });
    }
  }
}


export async function PUT(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const validatedData = updateCarParams.parse(await req.json());
    const validatedParams = carIdSchema.parse({ id });

    const { car } = await updateCar(validatedParams.id, validatedData);

    return NextResponse.json(car, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    } else {
      return NextResponse.json(err, { status: 500 });
    }
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const validatedParams = carIdSchema.parse({ id });
    const { car } = await deleteCar(validatedParams.id);

    return NextResponse.json(car, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    } else {
      return NextResponse.json(err, { status: 500 });
    }
  }
}
