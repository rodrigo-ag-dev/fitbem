import { useContext, useState } from 'react'
import { Image, View } from 'react-native'
import fitness from '../../assets/fitness.png'
import health from '../../assets/health.png'
import index from '../../assets/index.png'
import notify from '../../assets/notify.png'
import person from '../../assets/person.png'
import { NavigateContext } from '../../context/NavigateContext.js'
import TouchablePress from '../TouchablePress/index.jsx'
import { styles } from './style.js'

function MenuItemButton({ children, image, active, action, ...props }) {
  const [hover, setHover] = useState(false)
  const { refresh, setRefresh } = useContext(NavigateContext)
  return (
    <TouchablePress onPress={() => { action(); setRefresh(!refresh) }}>
      <View
        style={[styles.drawerMenuItem, active ? styles.drawerMenuItemActive : null, hover ? styles.drawerMenuItemHover : null]}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image style={styles.drawerMenuItemImage} source={image ? image : null} />
      </View>
    </TouchablePress>
  )
}

export default function Drawer({ navigation, title, action, image, children, tab, ...props }) {
  const handleIndex = () => {
    navigation.navigate('Index')
  }

  const handleHealth = () => {
    navigation.navigate('Health')
  }


  const handleFitness = () => {
    navigation.navigate('Fitness')
  }

  const handleNotify = () => {
    navigation.navigate('Notification')
  }

  const handlePerson = () => {
    navigation.navigate('Person')
  }

  return (
    <View style={styles.drawerMenu}>
      <MenuItemButton key='menu1' active={tab == 1} image={index} action={handleIndex} />
      <MenuItemButton key='menu2' active={tab == 2} image={health} action={handleHealth} />
      <MenuItemButton key='menu3' active={tab == 3} image={fitness} action={handleFitness} />
      <MenuItemButton key='menu4' active={tab == 4} image={person} action={handlePerson} />
      <MenuItemButton key='menu5' active={tab == 5} image={notify} action={handleNotify} />
    </View>
  )
}