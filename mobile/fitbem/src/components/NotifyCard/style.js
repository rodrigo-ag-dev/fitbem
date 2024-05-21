import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: 370,
    height: 137,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#D9D9D9',
    marginBottom: 10,
    borderRadius: 10
  },
  title: {
    gap: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 320,
    marginTop: 10
  },
  titleText: {
    fontSize: 20,
    color: '#236678'
  },
  info: {
    display: 'flex',
    flexDirection: 'colmun',
    justifyContent: 'space-between',
    width: 320,
    margin: 15,
  },
})