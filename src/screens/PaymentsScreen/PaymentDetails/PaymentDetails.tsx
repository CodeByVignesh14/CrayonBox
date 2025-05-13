import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './PaymentDetails.styles';
import ScreenHeader from '../../../components/HeaderComponent/ScreenHeader';
import CrayonButton from '../../../components/Buttons/CrayonButton';
import LabelChip from '../../../components/Widgets/LabelChip';
import Avatar from '../../../components/Avatar/Avatar';
import LabelWithIcon from '../../../components/Widgets/LabelIcon';
import Rupee from '../../../assets/icons/indianRupee.svg'
import CalendarIcon from '../../../assets/icons/calendarIcon.svg'
import Wallet from '../../../assets/icons/wallet.svg'
import { useNavigation } from '@react-navigation/native';
import { PaymentDetailScreenProps } from './PaymentDetails.types';

type Fee = {
  title: string;
  amount: number;
};

type PaymentDetailProps = {
  fees: Fee[];
  total: number;
  onOptionSelect?: (option: string) => void;
};

const PaymentDetails: React.FC<PaymentDetailProps> = ({ fees, total, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>('Pay with UPI');
const navigation = useNavigation<PaymentDetailScreenProps['navigation']>();
  const paymentOptions = ['Debit / Credit Card', 'Internet Banking', 'Pay with UPI'];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onOptionSelect?.(option);
  };

  const onPressPayment = () => {
    // Add payment logic here
    navigation.navigate('PaymentStatus')
    console.log('Payment initiated with option:', selectedOption);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF5E5" />
      <ScreenHeader title="Payment Details" headerColor="#FFF5E5" rightContent={<LabelChip color='green' label='Paid'/>} />
      <View style={{ flex: 1, backgroundColor: '#FFF5E5', paddingHorizontal: 16 }}>
        <View style={{flexDirection:'row',marginVertical:10,alignItems:'center'}}>
        <Avatar imageUrl={"https://avatar.iran.liara.run/public"} width={40} height={40} />
        <View style={{marginHorizontal:12}}>
          <Text>John Doe</Text>
          <Text>0221839</Text>
        </View>
        </View>
        <View style={{marginVertical:5}}>
          <LabelWithIcon label='Amount' leftIcon={<Rupee/>} />
          <Text style={{marginLeft:32,fontWeight:700}}>200000</Text>
        </View>
        <View style={{marginVertical:5}}>
          <LabelWithIcon label='Date of Payment' leftIcon={<CalendarIcon/>} />
          <Text style={{marginLeft:32,fontWeight:700}}>Paid on 22/03/2024.</Text>
        </View>
        <View style={{marginVertical:5}}>
          <LabelWithIcon label='Payment Method' leftIcon={<Wallet/>} />
          <Text style={{marginLeft:32,fontWeight:700}}>Credit Card</Text>
        </View>
      <View style={styles.summarySection}>
            <Text style={styles.header}>Fees Breakdown</Text>
            {fees.map((fee, index) => (
              <View key={index} style={styles.feeRow}>
                <Text style={styles.feeTitle}>{fee.title}</Text>
                <Text style={styles.feeAmount}>₹{fee.amount.toLocaleString()}</Text>
              </View>
            ))}
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalAmount}>₹{total.toLocaleString()}</Text>
              
            </View>
            <View style={{alignItems:'flex-end',marginTop:10}}>
            <CrayonButton
          style={styles.button}
          textStyle={styles.buttonText}
          title="Download Recipt"
          onPress={onPressPayment}
        />
        <CrayonButton
          style={styles.transparentButton}
          textStyle={styles.transparentButtonText}
          title="View Recipt"
          onPress={onPressPayment}
        />
            </View>
           
          </View>
        
        
      </View>
    </SafeAreaView>
  );
};

// Mock data for fees and total
const mockFees: Fee[] = [
  { title: 'Tuition Fee', amount: 5000 },
  { title: 'Sports Fee', amount: 2000 },
  { title: 'Library Fee', amount: 1000 },
];

const mockTotal = mockFees.reduce((sum, fee) => sum + fee.amount, 0);

// Wrapping the component with mock data
export default () => <PaymentDetails fees={mockFees} total={mockTotal} />;
