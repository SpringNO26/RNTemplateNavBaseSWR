import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import { Center, Container, Flex, Button, Heading, VStack } from 'native-base';

const HomeScreen = ({navigation}) => {
  return (
    <VStack display="flex" space={4} alignItems="center">

      <Heading>Home Screen</Heading>
      <Center alignSelf='stretch'>
        <Button variant="solid" colorScheme="green" mr={0} onPress={() => navigation.navigate("OtherPage")}>
          Go to the Other Page
        </Button>
      </Center>
    </VStack>
  );
};

export default HomeScreen;
