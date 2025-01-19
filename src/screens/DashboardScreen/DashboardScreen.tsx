/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, StatusBar, ScrollView, View } from 'react-native';
import { DashboardScreenProps } from './Dashboard.types';
import DashboardHeader from '../../components/DashboardComponents/DashboardHeader/DashboardHeader';
import DashboardBanner from '../../components/DashboardComponents/DashboardBanner/DashboardBanner';
import AlertWithButton from '../../components/AlertComponents/AlertWithButton/AlertWithButton';
import DashboardTiles from '../../components/DashboardComponents/DashboardTiles/DashboardTiles';
import Rank from '../../assets/icons/Rank.svg';
import TimeTable from '../../assets/icons/TimeTable.svg';
import Diary from '../../assets/icons/Diary.svg';
import Payment from '../../assets/icons/Payment.svg';
import Attendence from '../../assets/icons/Attendence.svg';
import styles from './Dashboard.styles';
import { RootStackParamList } from '../../navigation/RootNavigator';

const DashboardScreen: React.FC<DashboardScreenProps> = ({navigation}) => {
  const banners = [
    require('../../assets/images/DashboardBanner.png'),
    require('../../assets/images/DashboardBanner.png'),
    require('../../assets/images/DashboardBanner.png'),
  ];

  const dashboardData: {
    title: string;
    subtitle: string;
    smallText: string;
    imageComp: React.ReactNode;
    backgroundColor?: string;
    borderColor?: string;
    navData: keyof RootStackParamList; // Ensure this matches the navigation keys
  }[] = [
    {
      title: 'Math',
      subtitle: 'Time Table',
      smallText: 'Mr.Robinson',
      imageComp: <TimeTable width={48} height={48} />,
      backgroundColor: 'rgba(90, 132, 250, 0.1)',
      borderColor: '#5A84FA80',
      navData:'Diary',
    },
    {
      title: '92%',
      subtitle: 'Attendance',
      smallText: '',
      imageComp: <Attendence width={48} height={48} />,
      backgroundColor: 'rgba(66, 81, 225, 0.1)',
      borderColor: '#4251E180',
      navData:'Diary',
    },
    {
      title: '04',
      subtitle: 'Diary',
      smallText: '',
      imageComp: <Diary width={48} height={48} />,
      backgroundColor: 'rgba(178, 88, 27, 0.1)',
      borderColor: '#B2581B80',
      navData:'Diary',
    },
    {
      title: 'Paid',
      subtitle: 'Fees',
      smallText: '',
      imageComp: <Payment width={48} height={48} />,
      backgroundColor: 'rgba(255, 160, 0, 0.1)',
      borderColor: '#FFA00080',
      navData:'PaymentList',
    },
    {
      title: '95%',
      subtitle: 'Rank',
      smallText: '',
      imageComp: <Rank width={48} height={48} />,
      backgroundColor: 'rgba(12, 175, 50, 0.1)',
      borderColor: '#0CAF3280',
      navData:'Diary',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <DashboardHeader
        imageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ScrollView
        style={{ flex: 1, backgroundColor: '#FFFFFF' }}
        showsVerticalScrollIndicator={false}
      >
        <DashboardBanner banners={banners} />
        <AlertWithButton
          titleContent="Fees payment"
          boldContent="Due Soon !"
          buttonText="Make Payment"
          buttonColor="#FC8385"
          textColor="#FC8385"
          onPress={() => navigation.navigate('Payment')}
        />
        <View style={styles.tilesContainer}>
          {dashboardData.map((item, index) => (
            <DashboardTiles
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              smallText={item.smallText}
              imageComp={item.imageComp}
              backgroundColor={item.backgroundColor}
              borderColor={item.borderColor}
              navData={item?.navData}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
