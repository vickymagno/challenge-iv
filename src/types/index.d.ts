export interface FoodType {
    id: number;
    name: string;
    description: string;
    price: string;
    available: boolean;
    image: string;
  }
  
  type FoodForm = Omit<FoodType, "id" | "available">;