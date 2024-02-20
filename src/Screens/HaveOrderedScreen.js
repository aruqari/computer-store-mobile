import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../Colors";
import Perusahaan from "../data/Perusahaan";
import {
  Text,
  Button,
  IconButton,
  Box,
  Heading,
  VStack,
  HStack,
  Input,
  AspectRatio,
  Image,
  Center,
  Stack,
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

function HaveOrderedScreen({ navigation }) {
  return (
    <Box flex={1} bg={Colors["main"]}>
      <Box
        w="full"
        h="full"
        position="absolute"
        top="-60"
        px="6"
        justifyContent="center"
      >
        <Stack p="4" space={3}>
          <Heading size="xl" color="white">
            Register
          </Heading>
          <Text fontSize="20" fontWeight="light" color="white">
            Sudah pernah service di {Perusahaan.nama} sebelumnya?
          </Text>
          <HStack space={4}>
            <Button
              onPress={() => navigation.navigate("OrderedRegister")}
              _pressed={{ bg: "rgb(62, 173, 112)" }}
              _text={{ color: "#ffff" }}
              bg={Colors.btnpressed}
              w="48%"
              size="lg"
            >
              Sudah
            </Button>
            <Button
              onPress={() => navigation.navigate("Register")}
              _pressed={{ bg: Colors.btn2pressed }}
              _text={{ color: Colors.main }}
              bg={Colors.btn2}
              w="48%"
              size="lg"
            >
              Belum
            </Button>
          </HStack>
          <HStack mt={6} justifyContent="center">
            <IconButton
              icon={<Icon name="arrow-back-circle" size={60} />}
              onPress={() => navigation.navigate("Login")}
              _pressed={{
                bg: Colors.main,
                _icon: {
                  name: "arrow-back-circle-outline",
                },
              }}
              borderRadius="full"
              _icon={{
                color: Colors.btn2,
              }}
            />
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}

export default HaveOrderedScreen;
