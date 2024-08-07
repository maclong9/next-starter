import { Suspense } from "react";

import Loading from "@/app/loading";
import CarList from "@/components/cars/CarList";
import { getCars } from "@/lib/api/cars/queries";


export const revalidate = 0;

export default async function CarsPage() {
  return (
    <main>
      <div className="relative">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl my-2">Cars</h1>
        </div>
        <Cars />
      </div>
    </main>
  );
}

const Cars = async () => {
  
  const { cars } = await getCars();
  
  return (
    <Suspense fallback={<Loading />}>
      <CarList cars={cars}  />
    </Suspense>
  );
};
