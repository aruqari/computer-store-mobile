import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "./src/Colors";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import OrderedRegisterScreen from "./src/Screens/OrderedRegisterScreen";
import ProductScreen from "./src/Screens/ProductScreen";
import CartScreen from "./src/Screens/CartScreen";
import HaveOrderedScreen from "./src/Screens/HaveOrderedScreen";
import ServicesScreen from "./src/Screens/ServicesScreen";
import { NativeBaseProvider, Text, Box } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="HaveOrdered" component={HaveOrderedScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            options={{
              headerShown: true,
            }}
            name="Product"
            component={ProductScreen}
          />
          <Stack.Screen
            options={{
              headerShown: true,
            }}
            name="Keranjang"
            component={CartScreen}
          />
          <Stack.Screen name="Services" component={ServicesScreen} />
          <Stack.Screen
            name="OrderedRegister"
            component={OrderedRegisterScreen}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
