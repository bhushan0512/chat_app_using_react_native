import React, { useState } from "react";
import { SafeAreaView, View, TextInput, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, ImageBackground, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ChatScreen() {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    const sendMessage = () => {
        if (message.trim() !== "") {
            setChat([{ id: chat.length.toString(), text: message }, ...chat]);
            setMessage("");
        }
    };

    const goBack = () => {
        console.log("Back button pressed");
    };

    return (
        <View>
         <View  style={styles.title}>
         <Image
         style={{ height:50, width:50, padding:10, margin:15 }}
            // source={require("./assets/favicon.png")}
            source={require("../../assets/male.png")}
          />
         <Text style={styles.titileText}>(Unknown...)</Text>
         </View>

        <ImageBackground
        
        style={{ height:"95%", width:"100%"}}
        source={require("../../assets/bg.png")}>
            <FlatList
                inverted
                data={chat}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.messageContainer}>
                        <Text style={[styles.message, styles.senderMessage]}>{item.text}</Text>
                    </View>
                )}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholderTextColor={"#555555"}
                    placeholder="Type your message here..."
                />
                <TouchableOpacity title="Send" style={styles.sendButton} onPress={sendMessage}>
                    <Ionicons name="paper-plane-outline" size={24} color="white" />
                </TouchableOpacity>
            </View></ImageBackground>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
    },
    sendButton: {
        padding: 12,
        backgroundColor: "hsl(255, 70%, 50%)",
        borderRadius: "20%",
        justifyContent: "center",
        alignItems: "center",
        height:65,
        width:65
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 100,
        marginTop:10,
        paddingHorizontal: 10,
        
    },
    input: {
        flex: 1,
        borderWidth: 1,
        fontSize:16,
        borderColor: "#724cf9",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginHorizontal: 12,
        height:65,
        backgroundColor:"#ffffff55"
    },
    messageContainer: {
        alignSelf: "flex-end",
        marginVertical: 2,
        paddingRight:15,
        padding: 12,
        backgroundColor: "#724cf9",
        borderRadius: "20%",
        justifyContent: "center",
        alignItems: "center",
        marginRight:15,
    },
    message: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 20,
        maxWidth: Dimensions.get("window").width * 0.7,
        fontSize:15.6
    },
    senderMessage: {
        alignSelf: "flex-end",
        backgroundColor: "#724cf9",
        color: "#fff",
    },
    title:{
        width:"100%",
        backgroundColor:"hsl(255, 70%, 50%)",
        height:"8.5%",
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center"
    },
    titileText:{
        color:"#fff",
        fontSize:20,
        fontWeight:"700"
    }
});
