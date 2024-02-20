import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../Colors";
import products from "../data/Products";
import {
  Text,
  Box,
  ScrollView,
  Flex,
  Image,
  Pressable,
  Heading,
  VStack,
  HStack,
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
const product = products[0];

function ServiceMain({ navigation }) {
  return (
    <ScrollView>
      <VStack>
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
          >
            <VStack>
              <HStack
                w="full"
                space="5"
                borderBottomWidth="1"
                borderColor="coolGray.200"
              >
                <Image
                  source={{ uri: product.image }}
                  alt={product.name}
                  w="30%"
                  h="100px"
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
              <Heading mx="6" my="6" size="md">
                Catatan Teknisi:
              </Heading>
              <Text mx="6" textAlign="justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Illo,
                non. ipsum dolor sit, amet consectetur adipisicing, elit. Illo,
                non.ipsum dolor sit, amet consectetur adipisicing, elit. Illo,
                non.
              </Text>
              <Heading mx="6" mt="6" mb="3" size="md">
                Harga:
              </Heading>
              <Text mx="6" mb="3" textAlign="justify">
                Belum Ditentukan
              </Text>
            </VStack>
          </Pressable>
        </HStack>
      </VStack>
    </ScrollView>
  );
}

export default ServiceMain;
