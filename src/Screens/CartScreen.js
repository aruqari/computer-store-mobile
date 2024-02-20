import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import Colors from "../Colors";
import products from "../data/Products";
import {
  Box,
  Image,
  ScrollView,
  Heading,
  HStack,
  spacer,
  Text,
  Button,
  VStack,
  Pressable,
  ZStack,
  IconButton,
} from "native-base";
import { FontAwesome, Ionicons } from "react-native-vector-icons";

const CartScreen = ({ route, navigation }) => {
  return (
    <Box flex={1}>
      <ScrollView>
        {products.slice(0, 3).map((product) => (
          <HStack
            flexWrap="wrap"
            direction="row"
            justifyContent="space-between"
            px={6}
            key={product._id}
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
              onPress={() =>
                navigation.navigate("Product", { pid: product._id })
              }
            >
              <HStack w="full" space="5">
                <Image
                  source={{ uri: product.image }}
                  alt={product.name}
                  w="20%"
                  h={24}
                  resizeMode="contain"
                />
                <VStack justifyContent="center" w="70%">
                  <Heading size="sm" bold numberOfLines={1}>
                    {product.name}
                  </Heading>
                  <Text fontSize={12} mt={1}>
                    {new Intl.NumberFormat("id", {
                      style: "currency",
                      currency: "IDR",
                    }).format(product.price)}
                  </Text>
                </VStack>
              </HStack>
            </Pressable>
          </HStack>
        ))}
      </ScrollView>
      <Box bg={Colors.white}>
        <HStack
          borderTopWidth={3}
          borderColor="coolGray.100"
          w="full"
          space={3}
          py={2}
          px="15%"
          direction="row-reverse"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            onPress={() => navigation.navigate("Keranjang")}
            rounded="10"
            size="md"
            w="100"
            bg={Colors.main}
            _text={{ color: Colors.white, fontWeight: "bold" }}
            borderColor={Colors.main}
            _pressed={{
              bg: Colors.btnpressed,
              borderColor: Colors.white,
              _text: { color: Colors.white },
            }}
          >
            Beli
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default CartScreen;
