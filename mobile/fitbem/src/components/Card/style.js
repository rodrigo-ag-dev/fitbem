import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: '343px',
    height: '261px',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    marginBottom: '10px'
  },
  back: {
    width: '343px',
    height: '243px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    border: '1px solid "#cccccc"',
    marginRight: '5px',
    boxShadow: '2px 2px 1px .5px rgba(0, 0, 0	, .2);'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '15px',
    marginTop: '43px'
  },
  category: {
    position: 'absolute',
    top: '0px',
    left: '80px',
    width: '174px',
    height: '37px',
    backgroundColor: '#4F808D',
    borderRadius: '10px',
    display: 'flex',
    textAlign: 'auto',
    alignContent: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: '16px',
    padding: '7px',
    boxShadow: '2px 2px 1px .5px rgba(0, 0, 0	, .2);'
  },
  description: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  especialidade: {
    margin: '15px'
  },
  textespecialidade: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  titleespecialidade: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  textespecialidade: {
    fontSize: '12px',
    textAlign: 'justify'
  }
})