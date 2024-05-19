import { useContext, useState } from "react";
import { Image, Text, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { AuthContext } from "../context/AuthContext";
import { NavigateContext } from "../context/NavigateContext.js";
import NewAccount from "./NewAccount.jsx";
import { styles } from './style.js';

export default Login = ({ navigation, ...props }) => {
  const [showScreen, setShowScreen] = useState(null)
  const [error, setError] = useState(" ")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const { login } = useContext(AuthContext)
  const { refresh, setRefresh } = useContext(NavigateContext)

  const handleLogin = async () => {
    const respLogin = await login(email, senha)
    if (respLogin == 'ok') {
      setRefresh(!refresh)
      setEmail("")
      setSenha("")
      setError(" ")
    } else
      setError('Acesso negado!')
  }

  const handleNewAccount = () => {
    setShowScreen('newAccount')
  }

  if (!showScreen) {
    return (
      <View style={styles.containerLogin}>
        <View style={styles.formLogin}>
          <View style={styles.centerAlign}>
            <Image style={styles.imageLogin} source={require('../assets/home.png')} />
            <Text style={styles.appName}>Login</Text>
          </View>
          <View style={styles.centerAlign}>
            <Input placeholder='e-mail' value={email} onChangeText={setEmail} autoFocus />
            <Input placeholder='senha' value={senha} onChangeText={setSenha} secureTextEntry />
            <Text style={[styles.fontNormal, { marginTop: 15 }]}>{error}</Text>
          </View>
          <View style={styles.centerAlign}>
            <Button onPress={() => handleLogin()}>Login</Button>
            <View style={[styles.centerAlign, styles.rowDirection]}>
              <Text style={[styles.fontLower, { marginTop: 15 }]}>Não possui uma conta? </Text>
              <Text
                style={[styles.fontLower, { marginTop: 15, color: '#0D2C34' }]}
                onClick={handleNewAccount}
              >
                Cadastre-se
              </Text>
            </View>
          </View>
        </View>
      </View >
    )
  } else {
    return <NewAccount BackScreen={setShowScreen} />
  }
}
