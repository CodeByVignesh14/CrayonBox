import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type LabelChipProps = {
  label?: string;
  color?: string;
};

const LabelChip: React.FC<LabelChipProps> = ({ label = 'Default Label', color = '#000' }) => {
  return (
    <View style={[styles.titleChip, { backgroundColor: color }]}>
      <Text style={styles.chipText}>{label}</Text>
    </View>
  );
};

export default LabelChip;

const styles = StyleSheet.create({
  titleChip: {
    borderRadius: 16,
    paddingHorizontal: 9,
    maxWidth: 190,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  chipText: {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 13,
  },
});
