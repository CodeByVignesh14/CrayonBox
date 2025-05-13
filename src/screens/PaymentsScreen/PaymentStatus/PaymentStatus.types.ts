import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootNavigator';


export type PaymentStatusScreenProps = NativeStackScreenProps<RootStackParamList, 'PaymentStatus'>;

export type PaymentStatusProps = {
    fees: { title: string; amount: number }[];
    total: number;
    onOptionSelect?: (option: string) => void;
  };