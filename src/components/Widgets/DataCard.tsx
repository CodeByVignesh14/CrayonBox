import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type DataCardProps = {
  label1?: string;
  label2?: string;
  color?: string;
};

const DataCard: React.FC<DataCardProps> = ({ label1 = 'Default Label', label2,color = '#000' }) => {
  return (
    <View style={[styles.dataContainer, { backgroundColor: color }]}>
      <Text style={styles.cardTitle}>{label1}</Text>
      <Text style={styles.cardContent}>{label2}</Text>
    </View>
  );
};

export default DataCard;

const styles = StyleSheet.create({
  dataContainer: {
    borderRadius: 16,
    maxWidth: '100%',
    height: 70,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal:16,
    paddingHorizontal:16,
    borderWidth:1,
    borderColor:'#C7D6FF'
  },
  cardTitle: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight:600
  },
  cardContent: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight:400
  },
});
