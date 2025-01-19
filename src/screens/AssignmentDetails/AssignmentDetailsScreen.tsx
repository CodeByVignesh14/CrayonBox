
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { AssignmentDetailsScreenProps } from './AssignmentDetails.types';
import ScreenHeader from '../../components/HeaderComponent/ScreenHeader';
import LabelChip from '../../components/Widgets/LabelChip';
import styles from './AssignmentDetails.styles';
import CrayonButton from '../../components/Buttons/CrayonButton';
import { Dropdown } from 'react-native-element-dropdown';
import MediaUpload from '../../components/Widgets/MediaUpload';
const AssignmentDetailsScreen: React.FC<AssignmentDetailsScreenProps> = ({}) => {
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
      <ScreenHeader title="Assignment Details" headerColor="#ffffff" />
      <View style={styles.headerContainer}>
        <LabelChip color="red" label="Maths" />
        <Text style={styles.timeLeftText}>2 days left</Text>
      </View>
      <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
      <View style={styles.assignmentContainer}>
        <Text style={styles.assignmentTitle}>Fractions</Text>
        <View style={styles.bulletPointsContainer}>
          {HomeWorkPoints.map((point, index) => (
            <Text key={index} style={styles.bulletText}>
              {'\u2022'} {point}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.assignmentTitle}>Instructions</Text>
        <View style={styles.bulletPointsContainer}>
          {Instructions.map((point, index) => (
            <Text key={index} style={styles.bulletText}>
              {'\u2022'} {point}
            </Text>
          ))}
        </View>
      </View>
      <View style={{justifyContent:'center',marginHorizontal:20,marginVertical:20}}>
      <Text style={styles.assignmentTitle}>Media Upload</Text>
      <Text style={styles.mediaText}>Add your documents here, and you can upload up to 5 files max</Text>
      <View style={{justifyContent:'center',alignContent:'center'}}>
      <MediaUpload label='Start uploading'/>
      </View>
        
      </View>
      <View style={{marginHorizontal:12}}>
        <Text style={styles.assignmentTitle}>Completion Status</Text>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={SalData}
            labelField="label"
            valueField="value"
            placeholder="Select Completion Status"
            searchPlaceholder="Search..."
            value={'Mr'}
            onChange={()=>{console.log('H')}}
            renderItem={renderItem}
          />
        </View>
      <View>

        <CrayonButton title='Submit' style={{ height: 50, margin:16}} onPress={function (): void {
          throw new Error('Function not implemented.');
        } }/>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default AssignmentDetailsScreen;
