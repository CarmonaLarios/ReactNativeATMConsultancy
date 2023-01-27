import React from 'react';
import MainPage from './MainPage';
import ClientPage from './ClientPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SuperiorBar from './SuperiorBar';
import ContactPage from './ContactPage';
import CompanyPage from './CompanyPage';
import ServicesPage from './ServicesPage';

const Stack = createNativeStackNavigator();

const setStatusBarColor = (name: string): string => {
  let color: string = '';

  switch (name.toLowerCase()) {
    case 'clients':
      color = '#b9c941';
      break;
    case 'contact':
      color = '#61BD8C';
      break;
    case 'company':
      color = '#EC7148';
      break;
    case 'services':
      color = '#19d1c8';
      break;
    default:
      color = '#CCC';
      break;
  }

  return color;
};

const NavigationBar = () => {
  return (
    <NavigationContainer>
      <SuperiorBar>
        <Stack.Screen name="Home" component={MainPage} />
        <Stack.Screen
          name="Clients"
          component={ClientPage}
          options={{
            headerStyle: {
              backgroundColor: setStatusBarColor('Clients'),
            },
          }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactPage}
          options={{
            headerStyle: {
              backgroundColor: setStatusBarColor('Contact'),
            },
          }}
        />
        <Stack.Screen
          name="Company"
          component={CompanyPage}
          options={{
            headerStyle: {
              backgroundColor: setStatusBarColor('Company'),
            },
          }}
        />
        <Stack.Screen
          name="Services"
          component={ServicesPage}
          options={{
            headerStyle: {
              backgroundColor: setStatusBarColor('Services'),
            },
          }}
        />
      </SuperiorBar>
    </NavigationContainer>
  );
};

const Routes = () => {
  return <NavigationBar />;
};

export default Routes;
