import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bmi: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '385px',
    height: '300px',
    borderRadius: '10px',
    backgroundColor: '#4F808D',
    boxShadow: '2px 2px 1px .5px rgba(0, 0, 0	, .2);'
  },
  title: {
    width: '100%',
    fontSize: '18px',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15px'
  },
  body: {
    gap: '15px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
  },
  footerText: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#0D2C34',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '10px',
    marginHorizontal: '20px',
    marginBottom: '20px'
  },
  weightHeight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    borderColor: '#000000',
    backgroundColor: '#ffffff',
  },
  textWeightHeight: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#236678',
  },
  index: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    border: '1px solid',
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    gap: '5px'
  },
  textIndex: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#236678',
  }
})