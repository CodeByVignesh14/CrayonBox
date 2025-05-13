
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { AttendanceScreenProps } from './AttendanceScreen.types';
import ScreenHeader from '../../components/HeaderComponent/ScreenHeader';
import LabelChip from '../../components/Widgets/LabelChip';
import styles from './AttendanceScreen.styles';
import CrayonButton from '../../components/Buttons/CrayonButton';
import { Dropdown } from 'react-native-element-dropdown';
import MediaUpload from '../../components/Widgets/MediaUpload';
import ProgressBar from '../../components/Widgets/ProgressBar';
import { Calendar } from 'react-native-calendars';
const AttendanceScreen: React.FC<AttendanceScreenProps> = ({}) => {
  const HomeWorkPoints = [
    'Complete pages 25-28. Solve questions from Exercise 5.1 (Problems 1 to 10). Show all your steps clearly, including simplification and final answers.',
    'Solve questions from Exercise 5.1 (Problems 1 to 10).',
    'Show all your steps clearly, including simplification and final answers.',
  ];
  const Instructions = [
    'Use a pencil to write your answers neatly.',
    'Highlight or underline the final answers.',
    'Attach your completed work as a PDF/image before submission.',
  ];
  const SalData = [
    { label: 'Completed', value: '1' },
    { label: 'Inprogress', value: '2' },
    { label: 'Not Done', value: '3' },
  ];
  const renderItem = (item: { label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <ScreenHeader title="Attendance" headerColor="#ffffff" />
      <Calendar
  // Collection of dates that have to be marked. Default = {}
  markedDates={{
    '2025-01-16': {selected: true, marked: true, selectedColor: 'blue'},
    '2025-01-17': {marked: true},
    '2025-01-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2025-01-19': {disabled: true, disableTouchEvent: true}
  }}
/>
      <ProgressBar label='Total School Days' total={20} value={20} color='#2A9D8F'/>
      <ProgressBar label='Total Present' total={20} value={17} color='#42CF7A'/>
      <ProgressBar label='Total Absent' total={20} value={3} color='#FE0201'/>
    </SafeAreaView>
  );
};



export default AttendanceScreen;
