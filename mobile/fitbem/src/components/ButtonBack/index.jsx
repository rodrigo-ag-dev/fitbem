import Ionicons from '@expo/vector-icons/Ionicons'
import TouchablePress from "../TouchablePress"
import { styles } from './style'

export default Button = ({ ...props }) => {
  return (
    <TouchablePress style={styles.button} {...props}>
      <Ionicons name="arrow-back-sharp" size={32} color="#ffffff" />
    </TouchablePress>
  )
}