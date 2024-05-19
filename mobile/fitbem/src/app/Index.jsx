"use client"

import { ScrollView, View } from 'react-native'
import BMI from '../components/BMI/index.jsx'
import Banner from '../components/Banner/index.jsx'
import Drawer from '../components/Drawer'
import Header from '../components/Header/index.jsx'
import Results from '../components/Results/index.jsx'
import Suggestion from '../components/Suggestion/index.jsx'
import { styles } from './style.js'

export default function Index({ data, ...props }) {
  return (
    <View style={styles.containerBetween}>
      <Header />
      <ScrollView style={styles.containerScrollView}>
        <View style={[styles.containerForm, { gap: '15px' }]}>
          <BMI />
          <Results />
          <Suggestion />
          <Banner />
        </View>
      </ScrollView>
      <Drawer title='Indices' tab={1} {...props} />
    </View>
  )
}