import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '390px',
    marginBottom: '15px'
  },
  user: {
    display: 'flex',
    width: '300px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    flexDirection: 'row',
  },
  siglas: {
    display: 'flex',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    backgroundColor: '#4f808d'
  },
  title: {
    color: '#4f808d',
    fontSize: '24px'
  }
})