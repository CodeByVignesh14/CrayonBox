import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import moment from 'moment'; // Import moment.js for date manipulation
import LeftChevron from '../../../assets/icons/LeftChevron.svg';
import RightChevron from '../../../assets/icons/RightChevron.svg';
import NoHomeWork from '../../../assets/images/NoHomework.svg';
import DiaryCard from '../../Cards/DiaryCard/DiaryCard';
import Colors from '../../../themes/colors';

const WeekCalendar = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState<string>(getCurrentWeekStart());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentWeekEnd, setCurrentWeekEnd] = useState<string>(getCurrentWeekEnd());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Function to get the start date (Monday) of the current week
  function getCurrentWeekStart() {
    return moment().startOf('isoWeek').format('YYYY-MM-DD');
  }

  // Function to get the end date (Sunday) of the current week
  function getCurrentWeekEnd() {
    return moment().endOf('isoWeek').format('YYYY-MM-DD');
  }

  // Function to change the week (previous or next)
  const changeWeek = (direction: 'previous' | 'next') => {
    const newStart = direction === 'previous'
      ? moment(currentWeekStart).subtract(1, 'week').startOf('isoWeek')
      : moment(currentWeekStart).add(1, 'week').startOf('isoWeek');

    setCurrentWeekStart(newStart.format('YYYY-MM-DD'));
    setCurrentWeekEnd(moment(newStart).add(6, 'days').endOf('isoWeek').format('YYYY-MM-DD'));
  };

  // Function to render week dates dynamically
  const renderWeekDates = () => {
    const weekDates = [];
    let currentDate = moment(currentWeekStart);
    for (let i = 0; i < 7; i++) {
      weekDates.push({
        day: currentDate.format('ddd'),
        date: currentDate.format('YYYY-MM-DD'),
      });
      currentDate = currentDate.add(1, 'day');
    }

    return (
      <View style={styles.weekContainer}>
        {weekDates.map((item) => {
          const isSelected = selectedDate === item.date;
          const isWeekend = item.day === 'Sat' || item.day === 'Sun';

          return (
            <TouchableOpacity
              key={item.date}
              style={[
                styles.dateButton,
                isSelected && styles.selectedDateButton,
                isWeekend && styles.weekendDateButton,
              ]}
              onPress={() => setSelectedDate(item.date)}
            >
              <Text
                style={[
                  styles.dayText,
                  isSelected && styles.selectedDayText,
                  isWeekend && styles.weekendDayText,
                ]}
              >
                {item.day.toUpperCase()}
              </Text>
              <Text
                style={[
                  styles.dateText,
                  isSelected && styles.selectedDateText,
                  isWeekend && styles.weekendDateText,
                ]}
              >
                {item.date.split('-')[2]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  interface AgendaItem {
    subjectName: string;
    homeworkTitle: string;
    description: string;
    timeLeft: string;
    color: string;
    lightColor: string;
    isCompleted:boolean;
  }
  // Agenda data
  const agendaData: { [date: string]: AgendaItem[] } = {
    '2025-01-06': [
      {
        subjectName: 'Mathematics',
        homeworkTitle: 'Algebra Practice',
        description: 'Complete exercises 1 to 10 from chapter 5.',
        timeLeft: '1 day',
        color: '#038E85',
        lightColor: '#C0DEDC',
        isCompleted:true,
      },
      {
        subjectName: 'Science',
        homeworkTitle: 'Physics Assignment',
        description: 'Write a report on Newton’s Laws of Motion.',
        timeLeft: '1 day',
        color: '#33C4FF',
        lightColor: '#D6F1FF',
        isCompleted:true,
      },
    ],
    '2025-01-02': [
      {
        subjectName: 'English',
        homeworkTitle: 'Essay Writing',
        description: 'Write an essay on the topic "My Favorite Book".',
        timeLeft: '2 days',
        color: '#8E44AD',
        lightColor: '#EED6F5',
        isCompleted:false,
      },
      {
        subjectName: 'History',
        homeworkTitle: 'Historical Figures',
        description: 'Prepare a presentation on Mahatma Gandhi.',
        timeLeft: '2 days',
        color: '#27AE60',
        lightColor: '#DFF7E0',
        isCompleted:false,
      },
    ],
  };

  // Render agenda based on selected date
  const renderAgenda = () => {
    if (!selectedDate || !agendaData[selectedDate] || agendaData[selectedDate].length === 0) {
      return (
        <View style={styles.noHomeworkContainer}>
          <NoHomeWork height={300} width={300} />
          <Text style={styles.noHomeworkText}>
            No <Text style={{ color: Colors.primary }}>Homework</Text> today..!
          </Text>
        </View>
      );
    }

    return agendaData[selectedDate].map((item, index) => (
      <View style={styles.diaryContainer}>
          <DiaryCard key={index} itemData={item} />
      </View>
    ));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.dateHeader}>
            <Text style={styles.todayText}>Today</Text>
            <Text style={styles.currentDateText}>{moment(new Date()).format('ddd, MMM Do YYYY')}</Text>
          </View>
          <View style={styles.navigationButtons}>
            <TouchableOpacity onPress={() => changeWeek('previous')} style={styles.navigationButton}>
              <LeftChevron />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeWeek('next')} style={styles.navigationButton}>
              <RightChevron />
            </TouchableOpacity>
          </View>
        </View>
        {renderWeekDates()}
      </View>

      <View style={styles.agendaContainer}>
        <ScrollView>{renderAgenda()}</ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{ flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateHeader: {
    width: '70%',
  },
  todayText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6A6A6A',
    marginBottom: 4,
  },
  currentDateText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
    textDecorationLine: 'underline',
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dateButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 40,
    backgroundColor: '#B0D4F8',
    borderRadius: 18,
    marginVertical: 4,
  },
  selectedDateButton: {
    backgroundColor: '#5A84FA',
  },
  weekendDateButton: {
    backgroundColor: '#FF8A80',
  },
  dayText: {
    fontSize: 10,
    color: '#4D4D4D',
    fontWeight: '500',
  },
  selectedDayText: {
    color: '#FFF',
  },
  weekendDayText: {
    color: '#FFF',
  },
  dateText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
  },
  selectedDateText: {
    color: '#FFF',
  },
  weekendDateText: {
    color: '#FFF',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    width: '20%',
  },
  navigationButton: {
    backgroundColor: '#D9D9D9',
    height: 40,
    borderWidth: 1,
    borderColor: '#FBDEB3',
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  agendaContainer: {
    flex: 4.5,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 22,
    paddingHorizontal: 16,
  },
  noHomeworkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  noHomeworkText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
  },
  diaryContainer:{
    marginTop:10,
  },
});

export default WeekCalendar;
