import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CrayonButton from '../../Buttons/CrayonButton';

type ActivePaymentCardProps = {
  title: string;
  subTitle:string
  amount?: string;
  cardColor?:string;
  onPayPress?: () => void;
};

const ActivePaymentCard: React.FC<ActivePaymentCardProps> = ({ title, subTitle = 'white',amount,cardColor,onPayPress }) => {
  //const navigation = useNavigation();

  return (
    <View style={[styles.cardContainer, { backgroundColor: cardColor }]}>
      <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{amount}</Text>
        <CrayonButton title="Pay now" onPress={() => {
          if (onPayPress) {onPayPress();} // Safely invoke the function
        }} textStyle={{fontFamily:'Poppins',fontSize:18}}  style={{width:138,backgroundColor:'#FFAC00',marginBottom:10}} />
      <View style={styles.rightContent}>
      <Text style={styles.subTitle}>{subTitle}</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
    paddingHorizontal: 16,
    paddingVertical:10,
    marginHorizontal:10,
    marginVertical:20,
    borderRadius:16,
  },
  backButton: {
    paddingBottom: 6,
    paddingRight:12,

  },
  title: {
    fontSize: 18,
    fontFamily:'Poppins',
    color: 'black',
  },
  content: {
    fontSize: 28,
    fontFamily:'Poppins-Bold',
    color: 'black',
  },
  subTitle: {
    fontSize: 14,
    fontFamily:'Poppins',
    color: 'blue',
    textDecorationLine:'underline',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ActivePaymentCard;
