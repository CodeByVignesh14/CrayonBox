import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootNavigator';


export type PaymentScreenProps = NativeStackScreenProps<RootStackParamList, 'Payment'>;

export type PaymentSummaryProps = {
    fees: { title: string; amount: number }[];
    total: number;
    onOptionSelect?: (option: string) => void;
  };