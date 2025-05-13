import React, { useState } from 'react';
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './PaymentStatus.styles'
import ScreenHeader from '../../../components/HeaderComponent/ScreenHeader';
import CrayonButton from '../../../components/Buttons/CrayonButton';
import LabelChip from '../../../components/Widgets/LabelChip';
import Avatar from '../../../components/Avatar/Avatar';
import LabelWithIcon from '../../../components/Widgets/LabelIcon';
import Rupee from '../../../assets/icons/indianRupee.svg'
import CalendarIcon from '../../../assets/icons/calendarIcon.svg'
import Transact from '../../../assets/icons/transactionArrow.svg'

type Fee = {
  title: string;
  amount: number;
};

type PaymentStatusScreenProps = {
  fees: Fee[];
  total: number;
  onOptionSelect?: (option: string) => void;
};

const PaymentStatus: React.FC<PaymentStatusScreenProps> = ({ fees, total, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>('Pay with UPI');

  const paymentOptions = ['Debit / Credit Card', 'Internet Banking', 'Pay with UPI'];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onOptionSelect?.(option);
  };

  const onPressPayment = () => {
    // Add payment logic here
    console.log('Payment initiated with option:', selectedOption);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF5E5" />
      <ScreenHeader title="Payment" headerColor="#FFF5E5" />
      <View style={{ flex: 1, backgroundColor: '#FFF5E5', paddingHorizontal: 16 }}>
        <View style={{marginVertical:10,alignItems:'center'}}>
          {/* <View 
          style={styles.gifImage}
          > */}
          <Image
          source={require('../../../assets/icons/done.gif')}
          //resizeMode='contain'
          style={styles.gifImage}
            />
          {/* </View> */}
        
          <Text style={{fontFamily:'Poppins',fontSize:16,fontWeight:700,color:'green',top:-30}}>Transaction Successful</Text>
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
          <LabelWithIcon label='Transaction Id' leftIcon={<Transact/>} />
          <Text style={{marginLeft:32,fontWeight:700}}>31783817387138</Text>
        </View>
        
          <View style={{alignItems:'center',marginTop:10}}>
            <CrayonButton
          style={styles.button}
          textStyle={styles.buttonText}
          title="Download Recipt"
          onPress={onPressPayment}
        />
        <CrayonButton
          style={styles.transparentButton}
          textStyle={styles.transparentButtonText}
          title="03 Sec"
          onPress={onPressPayment}
        />
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
export default () => <PaymentStatus fees={mockFees} total={mockTotal} />;
