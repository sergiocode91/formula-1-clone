import CardHero from "@/components/CardHero";
import CardLite from "@/components/CardLite";
import { ScrollView, View } from "react-native";

const data = [
  {
    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/fom-website/2024/Features/steiner-ricciardo-3jpg",
    category: "Feature",
    description:
      "THE GUENTHER STEINER COLUMN: RB decision is tough on Ricciardo – but he knows in F1 you have to perform to survive",
    isHero: true,
  },
  {
    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_630,q_auto/f_auto/q_auto/fom-website/2024/Features/emotional-f1-retirements-header-image",
    category: "Feature",
    description:
      "From Massa’s Sao Paulo tearjerker to Alonso’s Abu Dhabi donuts – 6 emotional F1 driver departures",
  },
  {
    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_630,q_auto/t_16by9North/f_auto/q_auto/fom-website/2024/Miscellaneous/GettyImages-2170478236",
    category: "News",
    description:
      "Newey explains why he opted for 'old school' Aston Martin, rather than joining Hamilton in 2025 move to Ferrari",
  },
  {
    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_630,q_auto/f_auto/q_auto/fom-website/2024/Miscellaneous/liuzzi-antonelli-comp-header",
    category: "News",
    description:
      "‘We missed an Italian on the F1 grid’ – Ex-F1 driver Liuzzi tips ‘amazing’ Antonelli to shine at Mercedes",
  },
  {
    image:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_630,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2024/F1%20Explains/F1Ex%20Stoffel%20Quickfire%2016x9",
    category: "Podcast",
    description:
      "F1 EXPLAINS: Overtaking, braking and qualifying – Aston Martin's Stoffel Vandoorne answers your questions",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ paddingRight: 16 }}>
        {data
          .filter((item) => item.isHero)
          .map((item, index) => (
            <CardHero
              key={index}
              image={item.image}
              category={item.category}
              description={item.description}
            />
          ))}
        {data
          .filter((item) => !item.isHero)
          .map((item, index) => (
            <CardLite
              key={index}
              image={item.image}
              category={item.category}
              description={item.description}
            />
          ))}
      </View>
    </ScrollView>
  );
}
