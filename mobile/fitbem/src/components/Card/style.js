import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: 370,
    height: 261,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    marginBottom: 10
  },
  back: {
    width: 370,
    height: 243,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    border: '1px solid "#cccccc"',
    marginRight: 5,
    boxShadow: '2px 2px 1px .5px rgba(0, 0, 0	, .2);'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    marginTop: 43
  },
  category: {
    position: 'absolute',
    top: 0,
    left: 80,
    width: 174,
    height: 37,
    backgroundColor: '#4F808D',
    borderRadius: 10,
    display: 'flex',
    textAlign: 'auto',
    alignContent: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: 16,
    padding: 7,
    boxShadow: '2px 2px 1px .5px rgba(0, 0, 0	, .2);'
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  especialidade: {
    margin: 15
  },
  textespecialidade: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  titleespecialidade: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textespecialidade: {
    fontSize: 12,
    textAlign: 'justify'
  }
})