import 'react-native-gesture-handler';
import * as React from 'react';
import {useColorScheme} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ARNavigator from '../screens/ARNavigator';
import {NativeBaseProvider, StatusBar} from 'native-base';

enableScreens();
const Stack = createNativeStackNavigator();

const LightThemeUi = {
  dark: false,
  colors: {
    primary: 'rgb(28, 28, 30)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const DarkThemeUi = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    text: 'rgb(199, 199, 199)',
    primary: 'rgb(199, 199, 199)',
  },
};

export const Router: React.FC = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme !== 'dark' ? DarkThemeUi : LightThemeUi}>
      <NativeBaseProvider>
        <StatusBar
          animated={true}
          translucent
          barStyle={scheme !== 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={
            scheme !== 'dark' ? 'rgba(28, 28, 30, 0)' : 'rgba(199, 199, 199, 0)'
          }
        />
        <Stack.Navigator>
          <Stack.Screen name="quimicAR" component={HomeScreen} />
          <Stack.Screen
            name="Atom"
            component={ARNavigator}
            options={{
              gestureEnabled: true,
            }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
