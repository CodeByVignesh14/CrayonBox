/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, StatusBar,View } from 'react-native';
import { DiaryScreenProps } from './Diary.types';
import styles from './Diary.styles';
import ScreenHeader from '../../components/HeaderComponent/ScreenHeader';
import WeekCalendar from '../../components/CalendarComponents/WeekCalendar/WeekCalendar';

const DiaryScreen: React.FC<DiaryScreenProps> = ({}) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FBDEB3'} />
      <ScreenHeader title="Diary" headerColor='#FBDEB3'/>
        <View style={{flex:1,backgroundColor: '#FBDEB3',height:100}}>
          <WeekCalendar/>
        </View>
    </SafeAreaView>
  );
};

export default DiaryScreen;
