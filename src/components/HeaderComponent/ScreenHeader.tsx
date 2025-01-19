import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Back from '../../assets/icons/LeftArrow.svg';

type ScreenHeaderProps = {
  title: string;
  headerColor:string
  rightContent?: React.ReactNode;
};

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, headerColor = 'white',rightContent }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.headerContainer, { backgroundColor: headerColor }]}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Back />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right Content */}
      <View style={styles.rightContent}>{rightContent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: 16,
    paddingVertical:10,
  },
  backButton: {
    paddingVertical: 6,
    paddingRight:12,

  },
  title: {
    fontSize: 24,
    fontFamily:'Poppins-Bold',
    color: 'black',
    flex: 1,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ScreenHeader;
