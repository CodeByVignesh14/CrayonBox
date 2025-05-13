import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootNavigator';


export type PaymentDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'PaymentDetails'>;

export type PaymentDetailsProps = {
    fees: { title: string; amount: number }[];
    total: number;
    onOptionSelect?: (option: string) => void;
  };