import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../Colors";
import MainHeader from "../Components/MainHeader";
import ServiceMain from "../Components/ServiceMain";
import BottomNav from "../Navigations/BottomNav";
import { Text, Box } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

const ServicesScreen = (navigation) => {
  return (
    <Box flex={1} bg="white">
      <MainHeader />
      <ServiceMain navigation={navigation} />
      <BottomNav />
    </Box>
  );
};

export default ServicesScreen;
