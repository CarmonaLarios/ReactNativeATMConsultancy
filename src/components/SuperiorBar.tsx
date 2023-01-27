import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

type HeaderProps = {
  children: React.ReactNode;
};

const SuperiorBar = ({children}: HeaderProps) => {
  const image = require('../imgs/btn_voltar.png');
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.statusBar,
        headerTitleAlign: 'center',
        headerTitle: 'ATM Consultancy',
        headerBackImageSource: image,
      }}>
      {children}
    </Stack.Navigator>
  );
};

export default SuperiorBar;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60,
  },
});
