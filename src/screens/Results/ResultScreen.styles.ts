import { StyleSheet } from 'react-native';
import Colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  tilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 20,
  },
  button: {
    height: 45,
    marginTop: 10,
    backgroundColor:'green',
    borderRadius:30
  },
  transparentButton: {
    height: 45,
    marginTop: 10,
    backgroundColor:'transparent',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  transparentButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color:'green',
    textDecorationLine:'underline'
  },
  paymentContainer: {
    //backgroundColor: '#FFF8E5',
    padding: 16,
    borderRadius: 8,
  },
  summarySection: {
    paddingHorizontal: 16,
    backgroundColor: '#FFF5E5',
    paddingBottom:64,
    paddingTop:16,
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#FFAC00',
    fontFamily:'Poppins',
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  feeTitle: {
    fontSize: 16,
    color: '#000',
    fontFamily:'Poppins',
  },
  feeAmount: {
    fontSize: 16,
    color: '#000',
    fontFamily:'Poppins',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
    paddingTop: 8,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginHorizontal:20,
    fontFamily:'Poppins',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
    fontFamily:'Poppins',
  },
  optionsSection: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFAC00',
    top:-40,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    fontFamily:'Poppins',
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  radioButtonSelected: {
    borderColor: '#FFAC00',
    backgroundColor: '#FFAC00',
  },
  addOptionButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  addOptionText: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: '600',
    fontFamily:'Poppins',
  },
  footer: {
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    justifyContent:'center',
    alignItems:'center',
    height: 50,
    width:'100%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    borderColor:'#D3D3D3',
    borderWidth: 1.2,
    marginVertical:10,
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
  assignmentTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    marginVertical: 4,
    textAlign:'center'
  },
  resultContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    overflow: "hidden",
    backgroundColor: "#FFF",
    margin:7
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    //paddingVertical: 10,
  },
  cell: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  subject: {
    textAlign: "left",
    paddingLeft: 10,
  },
  fullMarks: {
    backgroundColor: "#E0E7FF",
    fontWeight: "bold",
    paddingVertical: 8,
  },
  obtained: {
    backgroundColor: "#F0FAE0",
    fontWeight: "bold",
    paddingVertical: 8,
  },
});

export default styles;
