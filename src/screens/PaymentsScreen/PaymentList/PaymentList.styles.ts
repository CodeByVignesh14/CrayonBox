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
  detailsText: {
    color: '#4251E1',
    fontSize:12,
    fontFamily:'Poppins',
    textDecorationLine: 'underline',
  },
  billsList: {
    paddingBottom: 16,
  },
  billCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(12, 175, 50, 0.1)',
    borderRadius: 8,
    paddingRight: 12,
    height:121,
    marginBottom: 12,
    marginHorizontal:10,
    alignItems: 'center',
  },
  dateContainer: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingHorizontal: 16,
    height:121,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  dateText: {
    color: '#FFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    lineHeight:40,
  },
  monthText: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight:18,
  },
  yearText: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  billDetails: {
    flex: 1,
  },
  amountText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginBottom: 4,
    lineHeight:30,
  },
  descriptionText: {
    fontSize: 14,
    color: '#000000',
    fontFamily:'Poppins',
    marginBottom: 4,
  },
  extraText: {
    fontSize: 14,
    color: '#000000',
    fontFamily:'Poppins',
  },
  actionContainer: {
    alignItems: 'center',
  },
  receiptButton: {
    backgroundColor: '#4251E1',
    borderRadius: 8,
    height:35,width:73,
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 12,
    fontFamily:'Poppins',
  },
});

export default styles;
