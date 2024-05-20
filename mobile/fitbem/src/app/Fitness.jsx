"use client"
import { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Card from '../components/Card/index.jsx'
import Drawer from '../components/Drawer'
import Header from '../components/Header/index.jsx'
import Input from "../components/Input"
import api from './api.js'

import { styles } from './style.js'

export default function Fitness({ ...props }) {
  const [data, setData] = useState()
  useEffect(() => {
    api.get(`trainer`)
      .then(resp => {
        if (resp && resp.status == 200) {
          const { data } = resp.data
          if (data && data.length > 0)
            setData(data)
          else
            setData(null)
        }
      })
  }, [])

  return (
    <View style={styles.containerBetween}>
      <Header />
      <View style={{ width: '100vw', maxWidth: 370 }}>
        <Text style={styles.title}>Preparadores Físicos</Text>
        <Input autoFocus={true} light={true} style={{ marginTop: 20 }} />
      </View>
      <ScrollView style={{ width: '100vw', maxWidth: 360 }}>
        {data && data.map(e => <Card key={e.id} data={e} />)}
      </ScrollView>
      <Drawer title='Profissionais da saúde' tab={3} {...props} />
    </View>
  )
}