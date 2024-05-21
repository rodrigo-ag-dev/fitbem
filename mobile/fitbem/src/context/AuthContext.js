"use client"

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";
import api from "../app/api";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  async function loginVerify() {
    const resp = await AsyncStorage.getItem('fitbem_login')
    const json = await JSON.parse(resp)
    if (json) {
      setUser(json)
      api.defaults.headers.Authorization = json.token
    }
  }

  async function login(email, senha) {
    try {
      api.defaults.headers.email = email
      api.defaults.headers.password = senha
      const resp = await api.post('session')
      if (resp.status = 200 && resp.data && resp.data.reg) {
        const { id, name, lastname, email } = resp.data.reg
        setUser({ id, name, lastname, email, token: resp.data.token })
        api.defaults.headers.Authorization = resp.data.token
        return 'ok'
      }
    } catch (e) {
      return 'error'
    }
  }

  function logout() {
    AsyncStorage.removeItem('fitbem_login')
    AsyncStorage.removeItem('fitbem_data')
    AsyncStorage.removeItem('fitbem_history')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, loginVerify, logout }}>
      {children}
    </AuthContext.Provider>
  )
}