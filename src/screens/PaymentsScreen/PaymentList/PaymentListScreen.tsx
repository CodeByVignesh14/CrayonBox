
import React from 'react';
import { FlatList, SafeAreaView, StatusBar,Text,TouchableOpacity,View } from 'react-native';
import styles from './PaymentList.styles';
import ScreenHeader from '../../../components/HeaderComponent/ScreenHeader';
import ActivePaymentCard from '../../../components/PaymentComponents/ActivePaymentCard/ActivePaymentCard';
import { PaymentListScreenProps } from './PaymentList.types';

type Bill = {
  id: string;
  date: string;
  amount: string;
  description: string;
  paidOn?: string;
  paymentMethod?: string;
  lateFees?: string;
};

const PaymentListScreen: React.FC<PaymentListScreenProps> = ({navigation}) => {
  const bills: Bill[] = [
    {
      id: '1',
      date: '31 Mar 2024',
      amount: '₹ 8,000',
      description: 'Annual',
      paidOn: '22/03/2024',
      paymentMethod: 'Cash',
    },
    {
      id: '2',
      date: '15 Jan 2024',
      amount: '₹ 5,000',
      description: 'Eighth',
      paidOn: '22/01/2024',
      paymentMethod: 'Online',
    },
    {
      id: '3',
      date: '17 Sep 2023',
      amount: '₹ 3,000',
      description: 'Sixth',
      lateFees: '₹ 100',
      paymentMethod: 'Cash',
    },
    {
      id: '4',
      date: '15 Sep 2023',
      amount: '₹ 9,000',
      description: 'Fifth',
      lateFees: '₹ 100',
      paymentMethod: 'Cash',
    },
  ];
  const renderBillItem = ({ item }: { item: Bill }) => (
    <View style={styles.billCard}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{item.date.split(' ')[0]}</Text>
        <Text style={styles.monthText}>{item.date.split(' ')[1]}</Text>
        <Text style={styles.yearText}>{item.date.split(' ')[2]}</Text>
      </View>
      <View style={styles.billDetails}>
        <Text style={styles.amountText}>{item.amount}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
        {item.paidOn && (
          <Text style={styles.extraText}>
            Paid On: {item.paidOn}
          </Text>
        )}
        {item.paymentMethod && (
          <Text style={styles.extraText}>
            Payment Method: {item.paymentMethod}
          </Text>
        )}
        {item.lateFees && (
          <Text style={styles.extraText}>
            Late Fees: {item.lateFees}
          </Text>
        )}
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={()=>{navigation.navigate('PaymentStatus')}} style={styles.receiptButton}>
          <Text style={styles.buttonText}>Receipt</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('PaymentDetails')}}>
          <Text style={styles.detailsText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const handlePaymentNav = ()=>{
    navigation.navigate('Payment');
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <ScreenHeader title="Fees" headerColor="#ffffff"/>
        <View style={{flex:1,backgroundColor:'#ffffff', paddingHorizontal:16}}>
          <ActivePaymentCard title="Due Fees" subTitle="Details" amount="₹ 25,000" cardColor="#FFCE7B" onPayPress={handlePaymentNav}/>
          <View>
            <Text style={{marginHorizontal:16,marginVertical:8,fontFamily:'Poppins-Bold',fontSize:18}}>Due Bills</Text>
          </View>
          <FlatList
        data={bills}
        renderItem={renderBillItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.billsList}
        showsVerticalScrollIndicator={false}
      />
        </View>
    </SafeAreaView>
  );
};

export default PaymentListScreen;
