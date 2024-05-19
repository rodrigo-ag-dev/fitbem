import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  drawerBack: {
    position: 'fixed',
    display: 'flex',
    flexFlow: 'row wrap',
    flexDirection: 'row',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    backgroundColor: '#000000aa',
  },
  drawerMenu: {
    display: 'flex',
    height: '60px',
    flexDirection: 'row',
    width: '100%',
    maxWidth: '390px',
    backgroundColor: '#4f808d',
    borderRadius: '10px',
    transition: 'background 0.5s, transform 0.5s',
    paddingHorizontal: '10px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drawerUserInfo: {
    display: 'flex',
    width: '100%',
    height: '220px',
    minHeight: '220px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerUserImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '3px solid #00000044',
  },
  drawerMenuItem: {
    display: 'flex',
    with: '42px',
    height: '42px',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  drawerMenuItemHover: {
    backgroundColor: '#00000044',
  },
  drawerMenuItemActive: {
    backgroundColor: '#0d2c34',
  },
  drawerMenuItemFont: {
    color: '#ffffff',
    fontSize: '22px',
  },
  drawerMenuItemImage: {
    width: '24px',
    height: '24px',
    margin: '10px',
  },
  drawerExit: {
    flex: '0.3',
    backgroundColor: 'transparent',
  },
  header: {
    display: 'flex',
    margin: '20px',
    width: '100%',
    flexDirection: 'column',
  },
  navArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataArea: {
    display: 'flex',
    marginVertical: '15px',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '24px',
    fontWeight: 700
  }
})