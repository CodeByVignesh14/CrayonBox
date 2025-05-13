import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './Payment.styles';
import ScreenHeader from '../../../components/HeaderComponent/ScreenHeader';
import CrayonButton from '../../../components/Buttons/CrayonButton';
import { useNavigation } from '@react-navigation/native';
import { PaymentScreenProps } from './Payment.types';

type Fee = {
  title: string;
  amount: number;
};

type PaymentSummaryProps = {
  fees: Fee[];
  total: number;
  onOptionSelect?: (option: string) => void;
};

const PaymentScreen: React.FC<PaymentSummaryProps> = ({ fees, total, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>('Pay with UPI');

  const paymentOptions = ['Debit / Credit Card', 'Internet Banking', 'Pay with UPI'];
  const navigation = useNavigation<PaymentScreenProps['navigation']>();
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onOptionSelect?.(option);
  };

  const onPressPayment = () => {
    // Add payment logic here
    console.log('Payment initiated with option:', selectedOption);
    navigation.navigate('PaymentDetails');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScreenHeader title="Payment" headerColor="#ffffff" />
      <View style={{ flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 16 }}>

        {/* Payment Summary Section */}
        <View style={styles.paymentContainer}>
          <View style={styles.summarySection}>
            <Text style={styles.header}>Payment Summary</Text>
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
          </View>

          {/* Payment Options Section */}
          <View style={styles.optionsSection}>
            <Text style={styles.header}>Choose Payment Options</Text>
            {paymentOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionRow}
                onPress={() => handleOptionSelect(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
                <View
                  style={[
                    styles.radioButton,
                    selectedOption === option && styles.radioButtonSelected,
                  ]}
                />
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.addOptionButton}>
              <Text style={styles.addOptionText}>+ Add Another Option</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Footer with Pay Now Button */}
      <View style={styles.footer}>
        <CrayonButton
          style={styles.button}
          textStyle={styles.buttonText}
          title="Pay Now"
          onPress={onPressPayment}
        />
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
export default () => <PaymentScreen fees={mockFees} total={mockTotal} />;
