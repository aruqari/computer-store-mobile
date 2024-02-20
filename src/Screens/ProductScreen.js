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
  Divider,
} from "native-base";
import { FontAwesome, Ionicons } from "react-native-vector-icons";

const ProductScreen = ({ route, navigation }) => {
  const [value, setValue] = React.useState(0);
  const { pid } = route.params;
  const prod = products.filter((product) => product._id == pid)[0];
  const selectedProduct = prod;
  console.log(value);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          alt="image"
          w="full"
          h={300}
          resizeMode="contain"
          source={{ uri: selectedProduct.image }}
        />
        <Heading bold fontSize={15} mt={3} lineHeight={22}>
          {new Intl.NumberFormat("id", {
            style: "currency",
            currency: "IDR",
          }).format(selectedProduct.price)}
        </Heading>
        <HStack
          space={2}
          alignItems="center"
          justifyContent="space-between"
          my={4}
        >
          <Heading>{selectedProduct.name}</Heading>
        </HStack>
        <Divider my={2} />
        <Text textAlign="justify" lineHeight="24" fontSize="12">
          {selectedProduct.desc}
        </Text>
        <Box />
      </ScrollView>
      <Box>
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
            variant="outline"
            _text={{ color: Colors.main, fontWeight: "bold" }}
            borderColor={Colors.main}
            _pressed={{
              bg: Colors.btnpressed,
              borderColor: Colors.white,
              _text: { color: Colors.white },
            }}
          >
            + Keranjang
          </Button>
          <NumericInput
            onChange={(value) => {
              setValue(value);
            }}
            value={value}
            borderColor={Colors.main}
            totalWidth={120}
            totalHeight={35}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            rounded
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductScreen;
