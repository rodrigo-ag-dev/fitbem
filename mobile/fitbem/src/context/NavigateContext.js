"use client"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import api from "../app/api";
import { BMIStatus } from "../functions/global";
import { AuthContext } from "./AuthContext";

export const NavigateContext = createContext({})

export const NavigateProvider = ({ children }) => {
  const { user } = useContext(AuthContext)
  const [refresh, setRefresh] = useState(0)
  const [data, setData] = useState(null)
  const [history, setHistory] = useState(null)

  useEffect(() => {

    AsyncStorage.getItem('fitbem_data')
      .then(resp => {
        if (resp)
          setData(resp)
      })
      .catch(e => {
        console.log('data error', e)
      })

    AsyncStorage.getItem('fitbem_history')
      .then(resp => {
        if (resp)
          setHistory(resp)
      })
      .catch(e => {
        console.log('history error', e)
      })

    if (user && user.id)
      api.get(`history?id=${user.id}`)
        .then(resp => {
          if (resp && resp.status == 200) {
            if (resp.data && resp.data.length > 0) {
              resp.data.forEach(e => e.caption = BMIStatus(e.bmi))
              const history = JSON.stringify(resp.data)
              if (history) {
                AsyncStorage.setItem('fitbem_history', history)
                const data = JSON.stringify(resp.data[0])
                if (data)
                  AsyncStorage.setItem('fitbem_data', data)
              }
            }
          }
        })
  }, [refresh])

  return (
    <NavigateContext.Provider value={{ data, history, setRefresh, refresh }}>
      {children}
    </NavigateContext.Provider>
  )
}