import { StyleSheet } from 'react-native';
import Colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
  },
  timeLeftText: {
    fontSize: 14,
    color: '#333',
  },
  assignmentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  assignmentTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    marginVertical: 4,
  },
  bulletPointsContainer: {
    marginVertical: 10,
  },
  bulletText: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#333',
    marginVertical: 4,
  },
  mediaText: {
    fontSize: 12,
    fontFamily: 'Poppins',
    color: '#808080',
    marginVertical: 1,
  },
  instructionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderColor:'#FC8385',
    borderWidth:1,
    borderStyle:'dashed',
    borderRadius:20,
    backgroundColor:'rgba(252, 131, 133, 0.1)',
    marginHorizontal:20,
  },
  dropdown: {
    justifyContent:'center',
    height: 50,
    width:'90%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    borderColor:'#D3D3D3',
    borderWidth: 1.2,
    margin:16,
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#808080',
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 35,
    fontSize: 16,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: Colors.textPrimary,
  },
});

export default styles;
