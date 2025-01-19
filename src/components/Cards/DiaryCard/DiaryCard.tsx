import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../../themes/colors';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/RootNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LabelChip from '../../Widgets/LabelChip';

type DiaryCardProps = {
  itemData: {
    isCompleted: any;
    subjectName: string;
    homeworkTitle: string;
    description: string;
    timeLeft: string;
    color: string;
    lightColor: string;
  };
  headerColor?: string;
};

const DiaryCard: React.FC<DiaryCardProps> = ({ itemData }) => {
  const navigation = useNavigation<NativeStackScreenProps<RootStackParamList, 'AssignmentDetails'>['navigation']>();

  return (
    <View style={[styles.headerContainer, { backgroundColor: itemData?.lightColor }]}>
      <View style={styles.rowSpaceBetween}>
        <LabelChip label={itemData?.subjectName} color={itemData?.color}/>
        {/* <View style={[styles.titleChip, { backgroundColor: itemData?.color }]}>
          <Text style={styles.chipText}>{itemData?.subjectName}</Text>
        </View> */}
        {itemData?.isCompleted ?
          <View style={[styles.completeChip]}>
          <Text style={styles.completeChipText}>Completed</Text>
        </View> : <Text style={styles.timeLeftText}>{itemData?.timeLeft} left</Text>}
      </View>

      {/* Homework Title */}
      <Text style={styles.title}>{itemData?.homeworkTitle}</Text>

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{itemData?.description}</Text>
      </View>

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
      {itemData?.isCompleted ? <Text style={styles.attachmentText}>Attachments</Text> : null}
        <TouchableOpacity style={[styles.continueBtn, { backgroundColor: itemData?.color }]} onPress={()=>{navigation.navigate('AssignmentDetails');}}>
          <Text style={styles.buttonText}>{itemData?.isCompleted ? 'View' : 'Continue'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 176,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 14,
    marginHorizontal: 2,
    marginVertical: 8,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
  completeChip:{
    borderRadius: 16,
    borderWidth:1,
    borderColor:'#00801E',
    backgroundColor: 'rgba(29, 136, 54, 0.2)',
    paddingHorizontal: 9,
    maxWidth: 190,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  completeChipText:{
    color:'#00801E',
    fontFamily: 'Poppins',
    fontSize: 13,
  },
  attachmentText:{
    color:Colors.textPrimary,
    fontFamily: 'Poppins',
    fontSize: 13,
  },
  timeLeftText: {
    fontFamily: 'Poppins',
    fontSize: 13,
    color: '#333',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: 'black',
    marginVertical: 4,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  descriptionText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#555',
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  continueBtn: {
    borderRadius: 4,
    height: 36,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 13,
  },
});

export default DiaryCard;
