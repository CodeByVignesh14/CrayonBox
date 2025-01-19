import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 20,
  },
  button: {
    width: '90%',
    height: 45,
    marginTop: 10,
    backgroundColor:'#FFAC00',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  paymentContainer: {
    //backgroundColor: '#FFF8E5',
    padding: 16,
    borderRadius: 8,
  },
  summarySection: {
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    paddingBottom:64,
    paddingTop:16,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FFAC00',
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#000',
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
    justifyContent: 'space-between',
    marginTop: 16,
    paddingTop: 8,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    fontFamily:'Poppins',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: '700',
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
});

export default styles;
