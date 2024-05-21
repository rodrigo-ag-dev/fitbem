import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    display: 'flex',
    fontSize: 20,
    fontWeight: 500,
    color: '#4F808D'
  },
  backBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: '#00000099',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  screenMessage: {
    width: '80vw',
    maxWidth: 350,
    height: '90vh',
    maxHeight: 250,
    border: '1px solid #ffffff',
    borderRadius: 10,
    backgroundColor: '#ffffff22',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  textMessage: {
    fontSize: 23,
    color: '#ffffff',
    padding: 5,
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
    marginVertical: 30,
  },
  centerAlign: {
    display: 'flex',
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowDirection: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 'unset',
    gap: 10,
    marginHorizontal: 0
  },
  colDirection: {
    display: 'flex',
    flexDirection: 'column'
  },
  imageLogin: {
    width: 110,
    height: 100,
  },
  appName: {
    color: '#ffffff',
    fontSize: 35,
    marginBottom: 20
  },
  fontLower: {
    color: '#ffffff',
    fontSize: 18,
    marginVertical: 2
  },
  fontNormal: {
    color: '#ffffff',
    fontSize: 20,
    marginVertical: 2
  },
  containerBetween: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'green',
    backgroundColor: '#e9e4e4',
    padding: 10
  },
  containerScrollView: {
    display: 'flex',
    width: '100%',
    maxWidth: 390,
  },
  containerForm: {
    flex: 1,
    gap: 5,
    display: 'flex',
    width: '100%',
    maxWidth: 385,
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
  buttonOk: {
    padding: 8,
    color: '',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: 120,
    maxWidth: 120,
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
})