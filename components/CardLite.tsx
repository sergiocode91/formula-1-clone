import { Image, Text, View, StyleSheet } from "react-native";

type Props = {
  image: string;
  category: string;
  description: string;
};

export default function CardLite({ image, category, description }: Props) {
  return (
    <View style={styles.card}>
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
    flexDirection: "row",
    marginTop: 12,
    paddingBottom: 16,
    borderBottomRightRadius: 16,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: "#e5e7eb",
  },
  card__image: {
    width: 160,
    height: 90,
    overflow: "hidden",
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#eee",
  },
  card__caption: {
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 1,
    gap: 10,
    paddingHorizontal: 16,
  },
  card__category: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#e10500",
    textTransform: "uppercase",
  },
  card__description: {
    fontFamily: "F1-Regular",
    fontSize: 12,
    color: "#15151e",
    lineHeight: 14,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
