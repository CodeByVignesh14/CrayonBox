import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen/ForgetPasswordScreen';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import DiaryScreen from '../screens/DiaryScreen/DiaryScreen';
import PaymentListScreen from '../screens/PaymentsScreen/PaymentList/PaymentListScreen';

// Define the types for navigation
export type RootStackParamList = {
  Login: undefined;
  ForgetPassword: undefined;
  Dashboard: undefined;
  Profile: undefined;
  Diary:undefined;
  PaymentList:undefined;
};

// Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();



// RootNavigator Component
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false, // Optional: Remove header if not needed
                gestureEnabled: true, // Enable swipe gestures
              }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ animation: 'slide_from_right' }}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="Diary" component={DiaryScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="PaymentList" component={PaymentListScreen} options={{ animation: 'slide_from_right' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default RootNavigator;
