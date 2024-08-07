import { Suspense } from "react";
import { notFound } from "next/navigation";

import { getCarById } from "@/lib/api/cars/queries";
import OptimisticCar from "./OptimisticCar";


import { BackButton } from "@/components/shared/BackButton";
import Loading from "@/app/loading";


export const revalidate = 0;

export default async function CarPage({
  params,
}: {
  params: { carId: string };
}) {

  return (
    <main className="overflow-auto">
      <Car id={params.carId} />
    </main>
  );
}

const Car = async ({ id }: { id: string }) => {
  
  const { car } = await getCarById(id);
  

  if (!car) notFound();
  return (
    <Suspense fallback={<Loading />}>
      <div className="relative">
        <BackButton currentResource="cars" />
        <OptimisticCar car={car}  />
      </div>
    </Suspense>
  );
};
