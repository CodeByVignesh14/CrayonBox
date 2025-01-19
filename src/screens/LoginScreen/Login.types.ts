import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';


export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
// Define types for the login form fields
export interface LoginForm {
    username: string;
    password: string;
  }

  // Define state or data structures used in the screen
  export interface LoginScreenState {
    isLoading: boolean;
    errorMessage?: string;
  }
