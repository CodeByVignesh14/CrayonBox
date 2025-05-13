
import React from 'react';
import { ImageBackground, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ProfileScreenProps } from './ProfileScreen.types';
import ScreenHeader from '../../components/HeaderComponent/ScreenHeader';
import Options from '../../assets/icons/Menu.svg';
import Pencil from '../../assets/icons/Pencil.svg';
import styles from './ProfileScreen.styles';
import Avatar from '../../components/Avatar/Avatar';
import DataCard from '../../components/Widgets/DataCard';
const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <ScreenHeader title="John doe" headerColor="#ffffff" rightContent={<Options/>}/>
      <View style={styles.headerContainer}>
        <ImageBackground style={{height:182,width:'100%',alignItems:'center',justifyContent:'center'}} source={require('../../assets/images/DefaultCover.png')}>
          <Avatar imageUrl={"https://avatar.iran.liara.run/public"} width={100} height={100} />
          <View>
            
          </View>
        </ImageBackground>
        <View style ={{width:190,height:76,backgroundColor:'skyblue',alignItems:'center',justifyContent:'center',borderRadius:20,borderWidth:3,borderColor:'white',top:-30}}>
          <Text>John Doe</Text>
          <Text>CYNB123456</Text>
        </View>
      </View>
      <View>
        <View style = {{flexDirection:'row',justifyContent:'space-between',marginHorizontal:16}}>
        <Text style={{fontFamily:'Poppins',fontSize:18,fontWeight:700}}>Student Details</Text>
        <TouchableOpacity style = {{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Pencil/>
          <Text style={{marginLeft:9,fontFamily:'Poppins',fontSize:16}}>Edit</Text>
        </TouchableOpacity>
        </View>
        <DataCard label1='Class' label2='Grade 6, Section A' color='#F0F4FF'/>
        <DataCard label1='Phone Number' label2='+91 785 255 8986' color='#F0F4FF'/>
        <DataCard label1='Email' label2='test123@gmail.com' color='#F0F4FF'/>
        <DataCard label1='Address' label2='123,Bharathiyar Street, Trichy-620017' color='#F0F4FF'/>
        <DataCard label1='Emergency Phone Number' label2='+91 858 565 5656' color='#F0F4FF'/>
      </View>
    </SafeAreaView>
  );
};



export default ProfileScreen;
