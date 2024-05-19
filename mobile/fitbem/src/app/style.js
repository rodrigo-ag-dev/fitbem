import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backBlur: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    zIndex: '1',
    backgroundColor: '#00000099',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  screenMessage: {
    width: '80vw',
    maxWidth: '350px',
    height: '90vh',
    maxHeight: '250px',
    border: '1px solid #ffffff',
    borderRadius: '10px',
    backgroundColor: '#ffffff22',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  textMessage: {
    fontSize: '23px',
    color: '#ffffff',
    padding: '5px',
    textAlign: 'center'
  },
  containerLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4f808d',
  },
  formLogin: {
    flex: 1,
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '30px',
  },
  centerAlign: {
    display: 'flex',
    width: '90%',
    maxWidth: '400px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowDirection: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 'unset',
    gap: '10px',
    marginHorizontal: '0px'
  },
  colDirection: {
    display: 'flex',
    flexDirection: 'column'
  },
  imageLogin: {
    width: '110px',
    height: '100px',
  },
  appName: {
    color: '#ffffff',
    fontSize: '35px',
    marginBottom: '20px'
  },
  fontLower: {
    color: '#ffffff',
    fontSize: '18px',
    marginVertical: '2px'
  },
  fontNormal: {
    color: '#ffffff',
    fontSize: '20px',
    marginVertical: '2px'
  },
  containerBetween: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: 'green',
    backgroundColor: '#e9e4e4',
  },
  containerScrollView: {
    display: 'flex',
    width: '100%',
    maxWidth: '390px',
  },
  containerForm: {
    flex: 1,
    gap: '5px',
    display: 'flex',
    width: '100%',
    maxWidth: '385px',
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: '5px',
    justifyContent: 'space-between',
  },
  buttonOk: {
    padding: 8,
    color: '',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '120px',
    maxWidth: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#121A2C',
    color: '#FFBA26',
    padding: 8,
    paddingHorizontal: 48,
    borderRadius: 4,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFBA26',
  },
  comandaImage: {
    width: 327,
    height: 145,
  },
});