import { useState } from "react";
import { Image, Text, View } from "react-native";
import Button from "../components/Button/index.jsx";
import ButtonBack from "../components/ButtonBack/index.jsx";
import Input from "../components/Input/index.jsx";
import ContactUs from "./ContactUs.jsx";
import { styles } from './style.js';

export default NewAccount = ({ navigation, BackScreen, ...props }) => {
  const [showScreen, setShowScreen] = useState(null)
  const [error, setError] = useState(" ")
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [fone, setFone] = useState("")
  const [sexo, setSexo] = useState("")
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [senha2, setSenha2] = useState("")

  const handleRegister = async () => {
    const respRegister = await register({ nome, sobrenome, fone, sexo, peso, altura, email, senha, senha2 })
    if (respRegister == 'ok') {
    } else
      setError('!')
  }

  const handleContactUs = () => {
    setShowScreen('ContactUs')
  }

  if (!showScreen) {
    return (
      <View style={styles.containerLogin}>
        <View style={styles.formLogin}>
          <View style={styles.centerAlign}>
            <Image style={styles.imageLogin} source={require('../assets/home.png')} />
            <Text style={styles.appName}>Crie sua conta</Text>
          </View>
          <View style={styles.centerAlign}>
            <Input placeholder='Nome' value={nome} onChangeText={setNome} autoFocus />
            <Input placeholder='Sobrenome' value={sobrenome} onChangeText={setSobrenome} />
            <Input placeholder='Telefone' value={fone} onChangeText={setFone} />
            <Input placeholder='Sexo' value={sexo} onChangeText={setSexo} />
            <View style={[styles.centerAlign, styles.rowDirection]}>
              <Input placeholder='Peso' value={peso} onChangeText={setPeso} />
              <Input placeholder='Altura' value={altura} onChangeText={setAltura} />
            </View>
            <Input placeholder='E-mail' value={email} onChangeText={setEmail} />
            <Input placeholder='Senha' value={senha} onChangeText={setSenha} secureTextEntry />
            <Input placeholder='Repita a senha' value={senha2} onChangeText={setSenha2} secureTextEntry />
          </View>
          <Text style={[styles.fontNormal, { marginTop: 15 }]}>{error}</Text>
          <View style={styles.centerAlign}>
            <Button onPress={() => handleRegister()}>Cadastrar</Button>
            <View style={[styles.centerAlign, styles.rowDirection]}>
              <Text style={[styles.fontLower, { marginTop: 15 }]}>É um profissional? </Text>
              <Text
                style={[styles.fontLower, { marginTop: 15, color: '#0D2C34' }]}
                onClick={handleContactUs}
              >
                Fale conosco
              </Text>
            </View>
          </View>
        </View>
        <ButtonBack onPress={() => BackScreen(false)} />
      </View >
    )
  } else
    return <ContactUs BackScreen={setShowScreen} />
}
