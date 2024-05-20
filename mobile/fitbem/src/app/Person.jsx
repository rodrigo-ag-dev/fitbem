"use client"

import { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import perfil from "../assets/perfil.png"
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
          <View style={{ width: '100%', maxWidth: 385, height: 120, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={perfil} />
          </View>
          <Text style={[styles.title, { width: '100%', maxWidth: 365, marginLeft: 5 }]}>Dados Pessoais</Text>
          <Input compact={true} placeholder='nome' value={nome} onChangeText={setNome} autoFocus />
          <Input compact={true} placeholder='e-mail' value={email} onChangeText={setEmail} />
          <Input compact={true} placeholder='fone' value={fone} onChangeText={setFone} />
          <View style={{ width: '100%', maxWidth: 385, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Input compact={true} style={{ width: '48%' }} placeholder='sexo' data={[{ label: 'Masculino', value: '0' }, { label: 'Feminino', value: '1' }]} />
            <Input compact={true} style={{ width: '48%' }} placeholder='nascimento' value={nascimento} onChangeText={setNascimento} />
          </View>
          <Text style={[styles.title, { width: '100vw', maxWidth: 365, marginLeft: 5 }]}>Endereço</Text>
          <Input compact={true} placeholder='logradouro' value={rua} onChangeText={setRua} />
          <Input compact={true} placeholder='número' value={numero} onChangeText={setNumero} />
          <Input compact={true} placeholder='cep' value={cep} onChangeText={setCep} />
          <Input compact={true} placeholder='bairro' value={bairro} onChangeText={setBairro} />
          <Input compact={true} placeholder='cidade' value={cidade} onChangeText={setCidade} />
          <Input compact={true} placeholder='uf' value={uf} onChangeText={setUf} />
          <Text style={[styles.title, { width: '100vw', maxWidth: 365, marginLeft: 5 }]}>Informações Adicionais</Text>
          <View style={{ width: '100%', maxWidth: 385, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Input compact={true} style={{ width: '48%' }} placeholder='peso' value={peso} onChangeText={setPeso} />
            <Input compact={true} style={{ width: '48%' }} placeholder='altura' value={altura} onChangeText={setAltura} />
          </View>
        </View>
      </ScrollView>
      <Drawer title='Dados pessoais' tab={4} {...props} />
    </View>
  )
}