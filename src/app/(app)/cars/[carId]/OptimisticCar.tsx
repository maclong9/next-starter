"use client";

import { useOptimistic, useState } from "react";
import { TAddOptimistic } from "@/app/(app)/cars/useOptimisticCars";
import { type Car } from "@/lib/db/schema/cars";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Modal from "@/components/shared/Modal";
import CarForm from "@/components/cars/CarForm";


export default function OptimisticCar({ 
  car,
   
}: { 
  car: Car; 
  
  
}) {
  const [open, setOpen] = useState(false);
  const openModal = (_?: Car) => {
    setOpen(true);
  };
  const closeModal = () => setOpen(false);
  const [optimisticCar, setOptimisticCar] = useOptimistic(car);
  const updateCar: TAddOptimistic = (input) =>
    setOptimisticCar({ ...input.data });

  return (
    <div className="m-4">
      <Modal open={open} setOpen={setOpen}>
        <CarForm
          car={optimisticCar}
          
          closeModal={closeModal}
          openModal={openModal}
          addOptimistic={updateCar}
        />
      </Modal>
      <div className="flex justify-between items-end mb-4">
        <h1 className="font-semibold text-2xl">{optimisticCar.name}</h1>
        <Button className="" onClick={() => setOpen(true)}>
          Edit
        </Button>
      </div>
      <pre
        className={cn(
          "bg-secondary p-4 rounded-lg break-all text-wrap",
          optimisticCar.id === "optimistic" ? "animate-pulse" : "",
        )}
      >
        {JSON.stringify(optimisticCar, null, 2)}
      </pre>
    </div>
  );
}
