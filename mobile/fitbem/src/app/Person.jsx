"use client"

import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Drawer from '../components/Drawer'
import Header from '../components/Header/index.jsx'
import Input from "../components/Input"
import api from './api.js'
import { styles } from './style.js'

export default function Person({ ...props }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [fone, setFone] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [cep, setCep] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [sexo, setSexo] = useState('')
  const [nascimento, setNascimento] = useState('')

  const loadDados = async () => {
    const resp = await api.get('user?id=14')
    if (resp.status = 200 && resp.data && resp.data.length > 0) {
      const data = resp.data[0]
      setNome(data.name + ' ' + data.lastname)
      setEmail(data.email)
      setFone(data.phone)
      setRua('')
      setNumero('')
      setCep('')
      setBairro('')
      setCidade('')
      setUf('')
      setPeso(data.weight)
      setAltura(data.height)
      setSexo('')
      setNascimento('')
    }
  }

  useEffect(() => {
    loadDados()
  }, [])

  return (
    <View style={styles.containerBetween}>
      <Header />
      <ScrollView style={styles.containerScrollView}>
        <View style={styles.containerForm}>
          <Input placeholder='nome' value={nome} onChangeText={setNome} autoFocus />
          <Input placeholder='e-mail' value={email} onChangeText={setEmail} />
          <Input placeholder='sexo' data={[{ label: 'Masculino', value: '0' }, { label: 'Feminino', value: '1' }]} />
          <Input placeholder='fone' value={fone} onChangeText={setFone} />
          <Input placeholder='logradouro' value={rua} onChangeText={setRua} />
          <Input placeholder='número' value={numero} onChangeText={setNumero} />
          <Input placeholder='cep' value={cep} onChangeText={setCep} />
          <Input placeholder='bairro' value={bairro} onChangeText={setBairro} />
          <Input placeholder='cidade' value={cidade} onChangeText={setCidade} />
          <Input placeholder='uf' value={uf} onChangeText={setUf} />
          <Input placeholder='peso' value={peso} onChangeText={setPeso} />
          <Input placeholder='altura' value={altura} onChangeText={setAltura} />
          <Input placeholder='nascimento' value={nascimento} onChangeText={setNascimento} />
        </View>
      </ScrollView>
      <Drawer title='Dados pessoais' tab={4} {...props} />
    </View>
  )
}