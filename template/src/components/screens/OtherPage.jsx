import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import { Center, Button } from 'native-base';
import { useNavigation } from "@react-navigation/native";

const OtherPageScreen = ({navigation: {navigate}}) => {
  const navigation = useNavigation();

  return (
    <Center h="100%">
      <Text> Other page Screen</Text>
      <Button variant="outline" colorScheme="orange" mr={2} onPress={() => navigate("Home")}>
        Back to Home
      </Button>
    </Center>
  );
};

export default OtherPageScreen;
