import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../themes/colors';
import UploadIcon from '../../assets/icons/Upload.svg';
type MediaUploadProps = {
  label?: string;
};

const MediaUpload: React.FC<MediaUploadProps> = ({ label = 'Default Label'}) => {
  return (
    <View style={[styles.titleChip]}>
        <UploadIcon/>
      <Text style={styles.chipText}>{label}</Text>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View style={{width:50, height:1,backgroundColor:Colors.textSecondary}}/>
      <Text style={{marginVertical:0,marginHorizontal:17}}>OR</Text>
      <View style={{width:50, height:1,backgroundColor:Colors.textSecondary}}/>
      </View>
      
     <TouchableOpacity style={{borderColor:Colors.primary,justifyContent:'center',alignItems:'center',borderRadius:6,borderWidth:1,height:30,width:100,marginVertical:10}}>
        <Text style={{textAlign:'center'}}>Browse files</Text>
     </TouchableOpacity>
    </View>
  );
};

export default MediaUpload;

const styles = StyleSheet.create({
  titleChip: {
    borderRadius: 16,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    borderColor:Colors.primary,
    borderWidth:1.2,
    borderStyle:'dashed',
    width:'100%',
  },
  chipText: {
    color: Colors.primary,
    fontFamily: 'Poppins',
    fontSize: 13,
    marginVertical:10
  },
});
