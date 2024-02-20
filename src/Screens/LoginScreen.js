import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../Colors";
import {
  Text,
  Button,
  IconButton,
  Pressable,
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

function LoginScreen({ navigation }) {
  const [show, setShow] = React.useState(false);
  return (
    <Box flex={1} bg={Colors["white"]}>
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Stack p="4" space={3}>
            <Heading>Login</Heading>
            <VStack space={5} pt="3">
              <Input
                InputLeftElement={
                  <Icon name="person-circle-outline" size={20} color="#000" />
                }
                variant="underlined"
                placeholder="Username"
                w="100%"
                pl={2}
                color="#000"
                borderBottomColor="#000"
              />
              <Input
                type={show ? "text" : "password"}
                InputRightElement={
                  <Pressable mr="2" onPress={() => setShow(!show)}>
                    <Icon
                      name={show ? "eye-outline" : "eye-off-outline"}
                      size={25}
                      mr="2"
                    />
                  </Pressable>
                }
                InputLeftElement={
                  <Icon name="lock-closed-outline" size={20} color="#000" />
                }
                variant="underlined"
                placeholder="Password"
                w="100%"
                pl={2}
                color="#000"
                borderBottomColor="#000"
              />
            </VStack>
            <HStack direction="row-reverse">
              <Button
                onPress={() => console.log("hello lupa")}
                w="40%"
                variant="link"
                colorScheme={Colors["main"]}
                size="sm"
              >
                Lupa Password
              </Button>
            </HStack>
            <Button
              onPress={() => navigation.navigate("Home")}
              shadow={2}
              _pressed={{ bg: Colors.btnpressed }}
              bg={Colors["main"]}
              w="100%"
              size="sm"
            >
              Login
            </Button>
            <HStack alignItems="center" justifyContent="center">
              <Text fontWeight="light" fontSize="xs">
                Belum Punya Akun?
              </Text>
              <Button
                onPress={() => navigation.navigate("HaveOrdered")}
                variant="link"
                colorScheme={Colors["main"]}
                size="sm"
              >
                Register
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginScreen;
