import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../Colors";
import products from "../data/Products";
import ServicesScreen from "../Screens/ServicesScreen";
import {
  Text,
  Box,
  HStack,
  VStack,
  Heading,
  Pressable,
  Image,
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

function HomeService({ navigation }) {
  const [cartIcon, setCartIcon] = React.useState(false);
  const [chatIcon, setChatIcon] = React.useState(false);
  const product = products[0];

  return (
    <VStack>
      <Heading px={6} size="md" fontWeight="normal">
        Perbaikan
      </Heading>
      <HStack
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        <Pressable
          key={product._id}
          w="100%"
          bg={Colors.white}
          rounded="md"
          shadow={2}
          pt={0.3}
          my={3}
          pb={2}
          onPress={() => navigation.navigate("Services")}
        >
          <HStack w="full" space="5">
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="20%"
              h={24}
              resizeMode="contain"
            />
            <VStack justifyContent="center">
              <Heading size="sm" bold>
                {product.name}
              </Heading>
              <Text fontSize={12} mt={1}>
                Status : Dalam Proses
              </Text>
            </VStack>
          </HStack>
        </Pressable>
      </HStack>
    </VStack>
  );
}

export default HomeService;
