import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {NativeBaseProvider} from 'native-base';
import HelloWorldSceneAR from '../components/quimicar/HelloWorld';

const Stack = createStackNavigator();

export const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name="quimicAR" component={HomeScreen} />
          <Stack.Screen 
            name="Atom" 
            component={HelloWorldSceneAR} 
            options={{gestureEnabled: true }} 
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};