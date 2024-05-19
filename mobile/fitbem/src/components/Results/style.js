import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  results: {
    width: '100%',
    maxWidth: '390px',
    height: '124px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '2px 2px 1px .5px rgba(0, 0, 0	, .2);'
  },
  title: {
    width: '100%',
    display: 'flex',
    color: '#236678',
    fontSize: '18px',
    marginTop: '15px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  data: {
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  history: {
    width: '100%',
    height: '60px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyItem: {
    gap: '10px',
    width: '100%',
    height: '60px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BMI: {
    color: '#ffffff',
    width: '60px',
    height: '45px',
    display: 'flex',
    borderRadius: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d2c34',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  caption: {
    color: '#0d2c34',
    fontSize: '14px',
    fontWeight: '400',
  },
})