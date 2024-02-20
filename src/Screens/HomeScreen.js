import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../Colors";
import MainHeader from "../Components/MainHeader";
import HomeProducts from "../Components/HomeProducts";
import BottomNav from "../Navigations/BottomNav";
import { Text, Box } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

function HomeScreen({ navigation }) {
  return (
    <Box flex={1} bg="white">
      <MainHeader navigation={navigation} />
      <HomeProducts navigation={navigation} />
      <BottomNav />
    </Box>
  );
}

export default HomeScreen;
