import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../Colors";
import { Text, Box, HStack, Heading, Pressable } from "native-base";
import { FontAwesome, Ionicons } from "react-native-vector-icons";

function BottomNav() {
  const [cartIcon, setCartIcon] = React.useState(false);
  const [chatIcon, setChatIcon] = React.useState(false);
  const [homeIcon, setHomeIcon] = React.useState(false);

  return (
    <HStack
      w="full"
      px={70}
      py={4}
      justifyContent="space-between"
      borderWidth="0.5"
      borderColor="coolGray.100"
    >
      <Pressable onPress={() => setHomeIcon(!homeIcon)}>
        <Ionicons name={homeIcon ? "home" : "home-outline"} size={24} />
      </Pressable>
      <Pressable onPress={() => setCartIcon(!cartIcon)}>
        <Ionicons name={cartIcon ? "person" : "person-outline"} size={24} />
      </Pressable>
      <Pressable onPress={() => setChatIcon(!chatIcon)}>
        <Ionicons name={chatIcon ? "settings" : "settings-outline"} size={24} />
      </Pressable>
    </HStack>
  );
}

export default BottomNav;
