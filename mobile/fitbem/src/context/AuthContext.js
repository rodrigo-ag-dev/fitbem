"use client"

import { createContext, useState } from "react";
import api from "../app/api";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

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
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}