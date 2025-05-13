import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen/ForgetPasswordScreen';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import DiaryScreen from '../screens/DiaryScreen/DiaryScreen';
import PaymentListScreen from '../screens/PaymentsScreen/PaymentList/PaymentListScreen';
import PaymentScreen from '../screens/PaymentsScreen/Payment/PaymentScreen';
import AssignmentDetailsScreen from '../screens/AssignmentDetails/AssignmentDetailsScreen';
import PaymentDetails from '../screens/PaymentsScreen/PaymentDetails/PaymentDetails';
import PaymentStatus from '../screens/PaymentsScreen/PaymentStatus/PaymentStatus';
import ResultScreen from '../screens/Results/ResultScreen';
import AttendanceScreen from '../screens/AttendanceScreen/AttendanceScreen';
import TimeTableScreen from '../screens/TimeTableScreen/TimeTableScreen';
import LeaveApplicationScreen from '../screens/LeaveApplicationScreen/LeaveApplicationScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

// Define the types for navigation
export type RootStackParamList = {
  Login: undefined;
  ForgetPassword: undefined;
  Dashboard: undefined;
  Profile: undefined;
  Diary:undefined;
  PaymentList:undefined;
  Payment:undefined;
  AssignmentDetails:undefined;
  PaymentDetails:undefined;
  PaymentStatus:undefined;
  Results:undefined;
  Attendance:undefined;
  TimeTable:undefined;
  LeaveApplication:undefined;
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
                headerShown: false,
                gestureEnabled: true,
                animation:'slide_from_right'
              }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Diary" component={DiaryScreen} />
        <Stack.Screen name="AssignmentDetails" component={AssignmentDetailsScreen} />
        <Stack.Screen name="PaymentList" component={PaymentListScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
        <Stack.Screen name="PaymentStatus" component={PaymentStatus} />
        <Stack.Screen name="Results" component={ResultScreen} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} />
        <Stack.Screen name="TimeTable" component={TimeTableScreen} />
        <Stack.Screen name="LeaveApplication" component={LeaveApplicationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default RootNavigator;
