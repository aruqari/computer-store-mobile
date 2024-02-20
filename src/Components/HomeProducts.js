import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../Colors";
import products from "../data/Products";
import HomeService from "./HomeService";
import {
  Text,
  Box,
  ScrollView,
  Flex,
  Image,
  Pressable,
  Heading,
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

function HomeProducts({ navigation }) {
  return (
    <ScrollView flex={1}>
      <HomeService navigation={navigation} />
      <Heading px={6} size="md" fontWeight="normal">
        Katalog
      </Heading>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((product) => (
          <Pressable
            key={product._id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
            onPress={() =>
              navigation.navigate("Product", {
                pid: product._id,
              })
            }
          >
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="xs" bold>
                {new Intl.NumberFormat("id", {
                  style: "currency",
                  currency: "IDR",
                }).format(product.price)}
              </Heading>
              <Text fontSize={10} mt={1}>
                {product.name}
              </Text>
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
