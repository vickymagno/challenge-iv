export interface FoodTip{
    id: number;
    name: string;
    description: string;
    price: number;
    available: boolean;
    image: string;
}

type FoodFormu = Omit<FoodTip, "id" | "available">;