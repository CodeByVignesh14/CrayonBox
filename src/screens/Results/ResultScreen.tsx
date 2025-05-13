/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Image, ImageBackground, SafeAreaView, StatusBar,Text,View } from 'react-native';
import { ResultScreenProps } from './ResultScreen.types'
import styles from './ResultScreen.styles'
import ScreenHeader from '../../components/HeaderComponent/ScreenHeader';
import WeekCalendar from '../../components/CalendarComponents/WeekCalendar/WeekCalendar';
import ShareIcon from '../../assets/icons/indianRupee.svg'
import Grade from '../../assets/images/Grade.svg'
import { Dropdown } from 'react-native-element-dropdown';
const ResultScreen: React.FC<ResultScreenProps> = ({}) => {
  const SalData = [
    { label: 'Quaterly', value: '1' },
    { label: 'Half Yearly', value: '2' },
    { label: 'Annual', value: '3' },
  ];
  const subjects = [
    { name: "English", fullMarks: 100, obtained: 74, grade: "B" },
    { name: "Hindi", fullMarks: 100, obtained: 87, grade: "B" },
    { name: "Science", fullMarks: 100, obtained: 74, grade: "B" },
    { name: "Math", fullMarks: 100, obtained: 87, grade: "B" },
    { name: "Social Study", fullMarks: 100, obtained: 89, grade: "B" },
    { name: "Drawing", fullMarks: 100, obtained: 78, grade: "B" },
    { name: "Computer", fullMarks: 100, obtained: 96, grade: "A" }
  ];
  const ReportCard = () => {
    return (
      <View style={styles.resultContainer}>
        <FlatList
          data={subjects}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={[styles.cell, styles.subject]}>{item.name}</Text>
              <Text style={[styles.cell, styles.fullMarks]}>{item.fullMarks}</Text>
              <Text style={[styles.cell, styles.obtained]}>
                {item.obtained} - {item.grade}
              </Text>
            </View>
          )}
        />
      </View>
    );
  };
  const renderItem = (item: { label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'rgba(12, 175, 50, 1)'} />
      <ScreenHeader title="Results" headerColor='rgba(12, 175, 50, 1)' rightContent={<ShareIcon/>}titleColor='white'/>
      <View style={{flex:1,backgroundColor:'rgba(12, 175, 50, 1)'}}>
      <ImageBackground style={{flex:1,backgroundColor: 'rgba(12, 175, 50, 1)',alignItems:'center'}}>
          <Grade/>
        </ImageBackground>
        <View style={{flex:3,borderTopRightRadius:20,borderTopLeftRadius:20,backgroundColor:'white',padding:16}}>
        <Text style={styles.assignmentTitle}>You're Excellent</Text>
        <Text style={styles.assignmentTitle}>John Doe</Text>
        <View style={{paddingHorizontal:12,backgroundColor:'white'}}>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={SalData}
            labelField="label"
            valueField="value"
            placeholder="Select Exam"
            searchPlaceholder="Search..."
            value={'Mr'}
            onChange={()=>{console.log('H')}}
            renderItem={renderItem}
          />
        </View>
        <View style={{backgroundColor:'white'}}>
          <ReportCard/>
        </View>
        </View>
       
      </View>
      <Image source={require('../../assets/images/vector.png')}/>
    </SafeAreaView>
  );
};

export default ResultScreen;
