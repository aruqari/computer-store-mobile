import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../Colors";
import { Text, Box, HStack, Heading, Pressable } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

function MainHeader({ navigation }) {
  const [cartIcon, setCartIcon] = React.useState(false);
  const [chatIcon, setChatIcon] = React.useState(false);

  return (
    <HStack space={3} w="full" px={6} pt={6} safeAreaTop>
      <Heading size="md" fontFamily="sans-serif" fontWeight="bold">
        Cahaya Komputer
      </Heading>
      <HStack w="45%" direction="row-reverse">
        <Pressable ml="4" onPress={() => navigation.navigate("Keranjang")}>
          <Icon name={cartIcon ? "cart" : "cart-outline"} size={24} />
          <Box
            pr={0}
            pl={2}
            rounded="full"
            top="-32"
            left="2"
            bg={Colors.main}
            _text={{
              color: Colors.white,
              fontSize: "11px",
            }}
          >
            5
          </Box>
        </Pressable>
        <Pressable onPress={() => setChatIcon(!chatIcon)}>
          <Icon
            name={
              chatIcon ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"
            }
            size={24}
          />
          <Box
            pr={0}
            pl={2}
            rounded="full"
            top="-32"
            left="2"
            bg={Colors.main}
            _text={{
              color: Colors.white,
              fontSize: "11px",
            }}
          >
            2
          </Box>
        </Pressable>
      </HStack>
    </HStack>
  );
}

export default MainHeader;
