import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';


export type ForgetPasswordScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgetPassword'>;
// Define types for the forget password form fields
export interface ForgetPasswordForm {
    email: string;
  }

  // Define state or data structures used in the screen
  export interface ForgetPasswordScreenState {
    isLoading: boolean;
    errorMessage?: string;
  }
