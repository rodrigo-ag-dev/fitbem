import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import { Text, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import TouchablePress from '../TouchablePress';
import { styles } from './style';


export default Button = ({ ...props }) => {
  const { logout, user } = useContext(AuthContext)

  const Iniciais = (name, lastname) => {
    let iniciais = ''
    iniciais += name[0]
    if (lastname)
      iniciais += lastname[0]
    return iniciais
  }

  return (
    <View style={styles.header}>
      <View style={styles.user}>
        <Text style={styles.siglas}>{Iniciais(user.name, user.lastname)}</Text>
        <Text style={styles.title}>{user.name} {user.lastname}</Text>
      </View>
      <TouchablePress onPress={logout} {...props}>
        <Ionicons name="exit-outline" size={32} color="#4f808d" />
      </TouchablePress>
    </View>
  )
}