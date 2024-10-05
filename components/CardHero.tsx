import { Image, Text, View, StyleSheet } from "react-native";

type Props = {
  image: string;
  category: string;
  description: string;
};

export default function CardHero({
  image,
  category,
  description,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.card__header}>
        <Text style={styles.card__title}>Top Stories</Text>
      </View>
      <View style={styles.card__image}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.card__caption}>
        <Text style={styles.card__category}>{category}</Text>
        <Text style={styles.card__description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 22,
  },
  card__header: {
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 2,
    borderTopRightRadius: 16,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: "#e10500",
  },
  card__title: {
    fontFamily: "F1-Bold",
    fontSize: 18,
  },
  card__image: {
    height: 210,
    marginTop: 30,
    overflow: "hidden",
    borderTopRightRadius: 16,
    backgroundColor: "#eee",
  },
  card__caption: {
    flexDirection: "column",
    gap: 14,
    marginTop: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomRightRadius: 16,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: "#e5e7eb",
  },
  card__category: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#e10500",
    textTransform: "uppercase",
  },
  card__description: {
    fontFamily: "F1-Regular",
    fontSize: 13,
    color: "#000",
    lineHeight: 14,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
