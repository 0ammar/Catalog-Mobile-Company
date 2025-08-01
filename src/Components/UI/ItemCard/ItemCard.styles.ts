import { StyleSheet, Dimensions, Platform } from "react-native";
import { colors } from "@/Theme/colors";

const { width } = Dimensions.get("window");
const cardWidth = (width - 48) / 2;

export const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 12,
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    width: "100%",
    height: cardWidth / 1.2,
    borderRadius: 14,
    backgroundColor: "#f4f4f4",
    marginBottom: 5,
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 14,
  },
  statusIcon: {
    position: "absolute",
    bottom: 5,
    left: 7,
    width: Platform.OS === "ios" ? 22 : 18,
    height: Platform.OS === "ios" ? 22 : 18,
    zIndex: 1000,
  },
  name: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.text,
    textAlign: "center",
  },
  code: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    marginTop: 2,
  },
});
