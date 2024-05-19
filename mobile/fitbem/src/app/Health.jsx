"use client"

import { View } from 'react-native'
import Drawer from '../components/Drawer'
import Header from '../components/Header/index.jsx'
import { styles } from './style.js'

export default function Health({ ...props }) {
  return (
    <View style={styles.containerBetween}>
      <Header />
      <View>
      </View>
      <Drawer title='Profissionais da saúde' tab={2} {...props} />
    </View>
  )
}