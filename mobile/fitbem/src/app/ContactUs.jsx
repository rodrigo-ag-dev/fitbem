import { useState } from "react";
import { Image, Text, View } from "react-native";
import Button from "../components/Button/index.jsx";
import ButtonBack from "../components/ButtonBack/index.jsx";
import Input from "../components/Input/index.jsx";
import TextInput from "../components/TextInput/index.jsx";
import { styles } from './style.js';

export default ContactUs = ({ navigation, BackScreen, ...props }) => {
  const [msgOk, setMsgOk] = useState(false)
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [fone, setFone] = useState("")
  const [mensagem, setMensagem] = useState("")

  const handleSend = async () => {
    setMsgOk(true)
  }

  const MsgOK = () => {
    if (msgOk)
      return (
        <View style={styles.backBlur}>
          <View style={styles.screenMessage}>
            <View style={{ width: '80vw', maxWidth: '380px', display: 'flex', alignItems: 'center', padding: '10px' }}>
              <Text style={styles.textMessage}>Mensagem recebida.</Text>
              <Text style={styles.textMessage}>Em breve te responderemos por e-mail.</Text>
            </View>
            <Button style={styles.buttonOk} color='#236678' onPress={() => setMsgOk(false)}>Ok</Button>
          </View>
        </View>
      )
  }

  return (
    <View style={styles.containerLogin}>
      <View style={styles.formLogin}>
        <View style={styles.centerAlign}>
          <Image style={styles.imageLogin} source={require('../assets/home.png')} />
          <Text style={styles.appName}>Fale conosco</Text>
        </View>
        <View style={styles.centerAlign}>
          <Input placeholder='Nome' value={nome} onChangeText={setNome} autoFocus />
          <Input placeholder='E-mail' value={email} onChangeText={setEmail} />
          <Input placeholder='Telefone' value={fone} onChangeText={setFone} />
          <TextInput placeholder='Mensagem' value={mensagem} onChangeText={setMensagem} />
        </View>
        <View style={styles.centerAlign}>
          <Button onPress={() => handleSend()}>Enviar</Button>
        </View>
      </View>
      <ButtonBack onPress={() => BackScreen(false)} />
      <MsgOK />
    </View >
  )
}
