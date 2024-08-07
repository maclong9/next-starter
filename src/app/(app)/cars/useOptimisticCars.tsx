
import { type Car, type CompleteCar } from "@/lib/db/schema/cars";
import { OptimisticAction } from "@/lib/utils";
import { useOptimistic } from "react";

export type TAddOptimistic = (action: OptimisticAction<Car>) => void;

export const useOptimisticCars = (
  cars: CompleteCar[],
  
) => {
  const [optimisticCars, addOptimisticCar] = useOptimistic(
    cars,
    (
      currentState: CompleteCar[],
      action: OptimisticAction<Car>,
    ): CompleteCar[] => {
      const { data } = action;

      

      const optimisticCar = {
        ...data,
        
        id: "optimistic",
      };

      switch (action.action) {
        case "create":
          return currentState.length === 0
            ? [optimisticCar]
            : [...currentState, optimisticCar];
        case "update":
          return currentState.map((item) =>
            item.id === data.id ? { ...item, ...optimisticCar } : item,
          );
        case "delete":
          return currentState.map((item) =>
            item.id === data.id ? { ...item, id: "delete" } : item,
          );
        default:
          return currentState;
      }
    },
  );

  return { addOptimisticCar, optimisticCars };
};
