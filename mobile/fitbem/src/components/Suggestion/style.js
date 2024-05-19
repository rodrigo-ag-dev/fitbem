import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  suggestionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '390px',
    height: '60px',
    borderRadius: '10px',
    backgroundColor: 'transparent'
  },
  suggestionRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
    paddingHorizontal: '15px',
    width: '50%',
    maxWidth: '170px',
    height: '52px',
    borderRadius: '10px',
    backgroundColor: '#4f808d',
    boxShadow: '2px 2px 1px .5px rgba(0, 0, 0	, .2)'
  },
  suggestionCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: '#ffffff',
    fontSize: '14px'
  },
  caption: {
    color: '#0D2C34',
    fontSize: '18px',
    fontWeight: 'bold'
  }
})