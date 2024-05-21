"use client"
import { useContext, useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import Drawer from '../components/Drawer'
import Header from '../components/Header/index.jsx'
import NotifyCard from '../components/NotifyCard/index.jsx'
import { AuthContext } from '../context/AuthContext.js'
import api from './api.js'
import { styles } from './style.js'

export default function Notification({ ...props }) {
  const { user } = useContext(AuthContext)
  const [data, setData] = useState()
  useEffect(() => {
    api.get(`notification/${user.id}`)
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
        <Text style={[styles.title, { marginBottom: 20 }]}>Notificações</Text>
      </View>
      <FlatList
        style={{ width: '100vw', maxWidth: 370 }} contentContainerStyle={{ alignItems: 'center' }}
        data={data}
        renderItem={({ item }) => <NotifyCard data={item} />}
        keyExtractor={item => item.id}
      />
      <Drawer title='Notificações' tab={5} {...props} />
    </View>
  )
}