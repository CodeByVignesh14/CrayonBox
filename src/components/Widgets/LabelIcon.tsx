import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define the props for the component
type LabelWithIconProps = {
  label: string;
  iconSize?: number;
  iconColor?: string;
  labelColor?: string;
  leftIcon?:React.ReactNode;
  style?: object;
};

const LabelWithIcon: React.FC<LabelWithIconProps> = ({
  label,
  labelColor = '#000',
  leftIcon,
  style = {},
}) => {
  return (
    <View style={[styles.container, style]}>
      <View>{leftIcon}</View>
      <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:8,
    marginVertical:4
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    fontFamily:'Poppins',
    fontWeight:500,
    marginLeft:10
  },
});

export default LabelWithIcon;
