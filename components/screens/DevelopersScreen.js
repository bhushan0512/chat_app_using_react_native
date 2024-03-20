import { Image, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
export default function DevelopersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chatter</Text>
        <Ionicons style={styles.headerText} name="chatbubble-outline" />
      </View>
      <Image
        style={styles.image}
        // source={require("./assets/favicon.png")}
        source={require("../../assets/developer.png")}
      />
      <Text style={styles.text}>Meet Our Team</Text>

      <View style={styles.column}>
        <View style={styles.card}>
          <Image
            style={styles.avatar}
            // source={require("./assets/favicon.png")}
            source={require("../../assets/male.png")}
          />
          <View style={styles.info}>
            <Text style={styles.name}>Bhushan A Bangera</Text>
            <Text style={styles.usn}>NNM23MC021</Text>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                style={{
                  color: "#24292E",
                  padding: "2%",
                }}
                size={25}
                name="logo-github"
              />

              <Ionicons
                style={{
                  color: "#0a66c2",
                  padding: "2%",
                }}
                size={25}
                name="logo-linkedin"
              />

              <Ionicons
                style={{
                  color: "#C13584",
                  padding: "2%",
                }}
                size={25}
                name="logo-instagram"
              />
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.avatar}
            // source={require("./assets/favicon.png")}
            source={require("../../assets/male.png")}
          />
          <View style={styles.info}>
            <Text style={styles.name}>Delbin George</Text>
            <Text style={styles.usn}>NNM23MC036</Text>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                style={{
                  color: "#24292E",
                  padding: "2%",
                }}
                size={"25%"}
                name="logo-github"
              />

              <Ionicons
                style={{
                  color: "#0a66c2",
                  padding: "2%",
                }}
                size={"25%"}
                name="logo-linkedin"
              />
              <Ionicons
                style={{
                  color: "#C13584",
                  padding: 2,
                }}
                size={25}
                name="logo-instagram"
              />
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.avatar}
            // source={require("./assets/favicon.png")}
            source={require("../../assets/female.png")}
          />
          <View style={styles.info}>
            <Text style={styles.name}>Rakshitha M</Text>
            <Text style={styles.usn}>NNM23MC111</Text>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                style={{
                  color: "#24292E",
                  padding: "2%",
                }}
                size={25}
                name="logo-github"
              />

              <Ionicons
                style={{
                  color: "#0a66c2",
                  padding: "2%",
                }}
                size={25}
                name="logo-linkedin"
              />

              <Ionicons
                style={{
                  color: "#C13584",
                  padding: "2%",
                }}
                size={25}
                name="logo-instagram"
              />
            </View>
          </View>
        </View>
        <Text style={styles.usn}>Made with ❤️</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flexDirection: "row",
  },

  headerText: {
    color: "#724cf9",
    fontSize: 60,
    fontWeight: "800",
    marginLeft: "1%",
    // textDecorationLine: "underline",
    letterSpacing: 5,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  avatar: {
    width: 85,
    height: 85,
    resizeMode: "contain",
    marginTop: 15,
    marginBottom: 15,
  },
  column: {
    width: "90%",
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  card: {
    backgroundColor: "#EBE9FF",
    width: "90%",
    marginBottom: 18,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical:3
  },
  name: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#4361ee",
    letterSpacing: 1.1,
    marginBottom: 5,
  },
  usn: {
    fontSize: 15,
    fontWeight: "500",
    color: "#4361ee",
    letterSpacing: 1,
    marginBottom: 5,
  },
  info: {
    marginLeft: 20,
  },
  socialIcons: {
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 2,
    textDecorationLine: "underline",
    color: "#5F57DA",
    marginBottom: 20,
  },
});
