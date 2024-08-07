"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { type Car, CompleteCar } from "@/lib/db/schema/cars";
import Modal from "@/components/shared/Modal";

import { useOptimisticCars } from "@/app/(app)/cars/useOptimisticCars";
import { Button } from "@/components/ui/button";
import CarForm from "./CarForm";
import { PlusIcon } from "lucide-react";

type TOpenModal = (car?: Car) => void;

export default function CarList({
  cars,
   
}: {
  cars: CompleteCar[];
   
}) {
  const { optimisticCars, addOptimisticCar } = useOptimisticCars(
    cars,
     
  );
  const [open, setOpen] = useState(false);
  const [activeCar, setActiveCar] = useState<Car | null>(null);
  const openModal = (car?: Car) => {
    setOpen(true);
    car ? setActiveCar(car) : setActiveCar(null);
  };
  const closeModal = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        setOpen={setOpen}
        title={activeCar ? "Edit Car" : "Create Car"}
      >
        <CarForm
          car={activeCar}
          addOptimistic={addOptimisticCar}
          openModal={openModal}
          closeModal={closeModal}
          
        />
      </Modal>
      <div className="absolute right-0 top-0 ">
        <Button onClick={() => openModal()} variant={"outline"}>
          +
        </Button>
      </div>
      {optimisticCars.length === 0 ? (
        <EmptyState openModal={openModal} />
      ) : (
        <ul>
          {optimisticCars.map((car) => (
            <Car
              car={car}
              key={car.id}
              openModal={openModal}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

const Car = ({
  car,
  openModal,
}: {
  car: CompleteCar;
  openModal: TOpenModal;
}) => {
  const optimistic = car.id === "optimistic";
  const deleting = car.id === "delete";
  const mutating = optimistic || deleting;
  const pathname = usePathname();
  const basePath = pathname.includes("cars")
    ? pathname
    : pathname + "/cars/";


  return (
    <li
      className={cn(
        "flex justify-between my-2",
        mutating ? "opacity-30 animate-pulse" : "",
        deleting ? "text-destructive" : "",
      )}
    >
      <div className="w-full">
        <div>{car.name}</div>
      </div>
      <Button variant={"link"} asChild>
        <Link href={ basePath + "/" + car.id }>
          Edit
        </Link>
      </Button>
    </li>
  );
};

const EmptyState = ({ openModal }: { openModal: TOpenModal }) => {
  return (
    <div className="text-center">
      <h3 className="mt-2 text-sm font-semibold text-secondary-foreground">
        No cars
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Get started by creating a new car.
      </p>
      <div className="mt-6">
        <Button onClick={() => openModal()}>
          <PlusIcon className="h-4" /> New Cars </Button>
      </div>
    </div>
  );
};
