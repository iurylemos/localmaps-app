import { ImageSourcePropType } from "react-native";

export type Category = {
  key: string;
  label: string;
  image: ImageSourcePropType;
};

export const categories: Category[] = [
  {
    key: "basket",
    label: "Vestuário",
    image: require("../../assets/basket.png"),
  },
  {
    key: "gas",
    label: "Combustível",
    image: require("../../assets/gas.png"),
  },
  {
    key: "hospital",
    label: "Farmácia/Hospital",
    image: require("../../assets/hospital.png"),
  },
  { key: "pet", label: "Pet Shop", image: require("../../assets/pet.png") },
  {
    key: "restaurant",
    label: "Restaurante",
    image: require("../../assets/restaurant.png"),
  },
  {
    key: "shopping",
    label: "Mercado",
    image: require("../../assets/shopping.png"),
  },
];
