"use client"

import { View } from 'react-native'
import Drawer from '../components/Drawer'
import Header from '../components/Header/index.jsx'
import { styles } from './style.js'

export default function Notification({ ...props }) {
  return (
    <View style={styles.containerBetween}>
      <Header />
      <View>
      </View>
      <Drawer title='Notificações' tab={5} {...props} />
    </View>
  )
}