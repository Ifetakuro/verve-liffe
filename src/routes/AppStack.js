import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import QuestionImage from '../components/QuestionImage';
import InterestsScreen from '../screens/InterestsScreen';
import LogoImage from '../components/LogoImage';
import AppDetailsScreen from '../screens/AppDetailsScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        initialRouteName="WelcomeScreen"
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerTitle: 'Create an account',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: props => <QuestionImage />,
          headerTitleAlign: 'center',
          headerTintColor: '#4B4B4B',
        }}
      />
      <Stack.Screen
        name="Interests"
        component={InterestsScreen}
        options={{
          headerTitle: props => <LogoImage />,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="AppDetails"
        component={AppDetailsScreen}
        options={{
          headerTitle: props => <LogoImage />,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
