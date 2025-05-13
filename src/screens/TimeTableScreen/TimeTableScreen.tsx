
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { TimeTableScreenProps } from './TimeTableScreen.types';
import ScreenHeader from '../../components/HeaderComponent/ScreenHeader';
import LabelChip from '../../components/Widgets/LabelChip';
import styles from './TimeTableScreen.styles';
import CrayonButton from '../../components/Buttons/CrayonButton';
import { Dropdown } from 'react-native-element-dropdown';
import MediaUpload from '../../components/Widgets/MediaUpload';
import WeekCalendar from '../../components/CalendarComponents/WeekCalendar/WeekCalendar';
import TimeTable from '../../components/CalendarComponents/TimeTable';
const TimeTableScreen: React.FC<TimeTableScreenProps> = ({}) => {
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#EFF3FF'} />
      <ScreenHeader title="TimeTable" headerColor='#EFF3FF'/>
        <View style={{flex:1,backgroundColor: '#EFF3FF',height:100}}>
         <TimeTable/>
        </View>
    </SafeAreaView>
  );
};



export default TimeTableScreen;
