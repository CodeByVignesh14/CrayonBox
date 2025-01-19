import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

type AlertWithButtonProps = {
  titleContent: string;
  boldContent: string;
  buttonText?: string;
  buttonColor?: string;
  textColor?: string;
  onPress?: () => void;
};

const AlertWithButton: React.FC<AlertWithButtonProps> = ({
  titleContent,
  boldContent,
  buttonText = 'Pay now',
  buttonColor = '#FC8385',
  textColor = '#FC8385',
  onPress,
}) => {
  return (
    <View style={[styles.container, { borderColor: buttonColor, backgroundColor: `${buttonColor}1A` }]}>
      <Text style={[styles.titleText, { color: textColor }]}>{titleContent} <Text style={styles.boldText}>{boldContent}</Text></Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor }]}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`${buttonText} button`}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: screenWidth * 0.92,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginHorizontal: screenWidth * 0.04,
  },
  titleText: {
    fontSize: 14,
    fontFamily:'Poppins',
  },
  boldText:{
    fontFamily:'Poppins-Bold',
  },
  button: {
    height: 32,
    borderRadius: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily:'Poppins',
  },
});

export default AlertWithButton;
