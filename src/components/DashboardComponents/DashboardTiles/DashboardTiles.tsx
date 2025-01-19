import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../navigation/RootNavigator';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

type DashboardTileProps = {
  title: string;
  subtitle: string;
  smallText: string;
  imageComp: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  navData: keyof RootStackParamList;
};

const DashboardTiles: React.FC<DashboardTileProps> = ({
  title,
  subtitle,
  smallText,
  imageComp,
  backgroundColor = '#ffffff',
  borderColor,
  navData,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      onPress={() => {if (navData) {
        navigation.navigate(navData);
      } else {
        console.warn('Navigation data is missing.');
      }}}
      style={[
        styles.tile,
        {
          backgroundColor,
          borderColor,
        },
      ]}
    >
      <View style={styles.imageContainer}>{imageComp}</View>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.smallText}> - {smallText}</Text>
        </View>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: 10,
  },
  row: {
    justifyContent: 'flex-start',
  },
  tile: {
    width: screenWidth * 0.43,
    height: 154,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 16,
  },
  titleContainer:{flexDirection:'row',alignItems:'center'},
  imageContainer: {
    marginBottom: 8,
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily:'Poppins-Bold',
    color: '#4D4D4D',
  },
  subtitle: {
    fontSize: 14,
    fontFamily:'Poppins-Bold',
    color: '#5A84FA',
    marginBottom: 2,
  },
  smallText: {
    fontSize: 11,
    fontWeight: '500',
    fontFamily:'Poppins',
    color: '#000000',
  },
});

export default DashboardTiles;
