"use client"

import { View } from 'react-native'
import Drawer from '../components/Drawer'
import Header from '../components/Header/index.jsx'
import { styles } from './style.js'

export default function Fitness({ ...props }) {
  return (
    <View style={styles.containerBetween}>
      <Header />
      <View>
      </View>
      <Drawer title='Preparadores fisicos' tab={3} {...props} />
    </View>
  )
}