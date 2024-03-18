import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DevelopersPage from "./components/screens/DevelopersScreen";
import WelcomeScreen from "./components/screens/WelcomeScreen";
import MyRoutes from "./components/MyRoutes";

export default function App() {
  // return(
  //   <DevelopersPage/>
  // )

  return(
    <MyRoutes/>
  );
  


  // return (
  //   <View style={styles.container}>
  //     <View style={styles.header}>
  //       <Text style={styles.headerText}>Chatter</Text>
  //       <Ionicons
  //         style={styles.headerText}
  //         name="chatbubble-outline"
  //       />
  //     </View>
  //     <Text style={styles.text}>Chat Anyone Anonymously</Text>
  //     <Image
  //       style={{
  //         width: "80%",
  //         height: "40%",
  //         resizeMode: "",
  //         marginTop:"3%",
  //         marginBottom:"4%"
  //       }}
  //       // source={require("./assets/favicon.png")}
  //       source={require("./assets/welcome.png")}
  //     />
  //     <TouchableHighlight
  //       onPress={() => {}}
  //       underlayColor="#3f37c9"
  //       style={styles.button}
  //     >
  //       <Text style={styles.buttonText}>Get Started</Text>
  //     </TouchableHighlight>

  //     <TouchableHighlight
  //       onPress={() => {}}
  //       underlayColor="#afb1ff"
  //       style={styles.developers}
  //     >
  //       <Text style={styles.buttonText1}>Meet the developers</Text>
  //     </TouchableHighlight>
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   button: {
//     borderWidth: 1,
//     borderColor: "#724cf9",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//     width: "70%",
//     height: "7%",
//     marginBottom:"2.5%",
//     // elevation:5,
//     backgroundColor: "#724cf9",
//     borderRadius: 20,
//   },
//   developers: {
//     borderWidth: 1,
//     borderColor: "#724cf9",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//     width: "70%",
//     height: "7%",
//     // elevation:5,
//     backgroundColor: "#fff",
//     borderRadius: 20,
//   },
//   buttonText: {
//     fontSize: 22,
//     lineHeight: 21,
//     fontWeight: "bold",
//     letterSpacing: 5,
//     color: "white",
//   },
//   buttonText1: {
//     fontSize: 18,
//     lineHeight: 21,
//     fontWeight: "bold",
//     letterSpacing: 3,
//     color: "#4361ee",
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 28,
//     fontWeight: "bold",
//     letterSpacing: 3,
//     color: "#4361ee",
//   },
//   header: {
//     flexDirection: "row",
//   },

//   headerText: {
//     color: "#724cf9",
//     fontSize: "60%",
//     fontWeight: "800",
//     marginLeft: "1%",
//     // textDecorationLine: "underline",
//     letterSpacing: 5,
//   },
// });
