import React from "react";
import { StatusBar } from 'expo-status-bar';
import Colors from "../Colors";
import { 
  Text, 
  Button, 
  ScrollView,
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
  TextArea
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';


function OrderedRegisterScreen({navigation}) {
  const [show, setShow] = React.useState(false);
  return (
    <Box flex={1} bg={Colors["main"]}>
      <Box w="full" h="full" position="absolute" top="0" px="6" justifyContent="center">
        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" 
    _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
    <ScrollView>
          <Stack p="4" space={3}>
            <Heading>Cari No Telepon Anda</Heading>
            <VStack space={5} pt="3">
            <HStack>
            <Input InputLeftElement={
                <Icon name="call-outline" size={20} color="#000"/>
              }
              keyboardType="numeric"
              variant="underlined"
              type="number"
              placeholder="No. Telepon"
              w="80%"
              pl={2}
              color="#000"
              borderBottomColor="#000"
              />
            <IconButton 
                mt="1"
                ml="3"
                icon={<Icon name="search-outline" size={15}/>}
                onPress={()=>console.log('hello cari')} 
                _pressed={{
                  bg : Colors.btnpressed,
                  _icon : {
                    name : "search-outline",
                  },
                }}
                w="15%"
                h="80%"
                bg={Colors.main}
                _icon={{
                  color : "#ffffff"
                }}
              />
            </HStack>
              <Input InputLeftElement={
                <Icon name="pencil-outline" size={20} color="#000"/>
              }
              variant="underlined"
              isDisabled
              placeholder="Nama Lengkap"
              w="100%"
              pl={2}
              color="#000"
              borderBottomColor="#000"
              value="Ibnu Abdul"
              />
              <TextArea 
              isDisabled
              variant="underlined"
              placeholder="Alamat Lengkap"
              w="100%"
              pl={2}
              color="#000"
              borderBottomColor="#000"
              >Sleman Yogyakarta</TextArea>
              <Input InputLeftElement={
                <Icon name="mail-outline" size={20} color="#000"/>
              }
              variant="underlined"
              placeholder="Email"
              w="100%"
              pl={2}
              color="#000"
              borderBottomColor="#000"
              />
              <Input InputLeftElement={
                <Icon name="person-circle-outline" size={20} color="#000"/>
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
                  <Icon name={show ? "eye-outline" : "eye-off-outline"} size={25} mr="2" />
                </Pressable>
              }
              InputLeftElement={
                <Icon name="lock-closed-outline" size={20} color="#000"/>
              }
              variant="underlined"
              placeholder="Password"
              w="100%"
              pl={2}
              color="#000"
              borderBottomColor="#000"
              />
            </VStack>
            <Button onPress={()=>navigation.navigate("Home")} shadow={2} _pressed={{bg : Colors.btnpressed, }} bg={Colors['main']} w="100%" size="sm">
              Register
            </Button>
            <HStack mt={6} justifyContent="center">
              <IconButton 
                icon={<Icon name="arrow-back-circle" size={60}/>}
                onPress={()=>navigation.navigate("HaveOrdered")} 
                _pressed={{
                  bg : "gray.50",
                  _icon : {
                    name : "arrow-back-circle-outline",
                  },
                }}
                borderRadius="full"
                _icon={{
                  color : Colors.main
                }}
              />
            </HStack>
          </Stack>
    </ScrollView>
        </Box>
      </Box>  
    </Box>
  );
}

export default OrderedRegisterScreen;
