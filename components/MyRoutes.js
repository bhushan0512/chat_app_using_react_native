import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ChatScreen from './screens/ChatScreen';
import DevelopersScreen from './screens/DevelopersScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();

const MyRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" options={{ headerShown: false }}  component={WelcomeScreen} />
        <Stack.Screen name="ChatScreen" options={({ navigation }) => ({
            
            headerBackTitleVisible: false, // Hide the back button's title
            headerShown: true, // Show the back button only
            headerTitle:"Chatter 💬"
          })} component={ChatScreen} />
        <Stack.Screen name="DevelopersScreen" options={({ navigation }) => ({
            
            headerBackTitleVisible: false, // Hide the back button's title
            headerShown: true, // Show the back button only
            headerTitle:"",
            headerTitleStyle:true
          })}  component={DevelopersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyRoutes;
