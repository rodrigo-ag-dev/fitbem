import { Text } from "react-native"
import TouchablePress from "../TouchablePress"
import { styles } from './style'

export default Button = ({ children, ...props }) => {
  return (
    <TouchablePress style={styles.button} {...props}>
      <Text style={{
        color: props.color ? props.color : styles.button.color,
        fontSize: styles.button.fontSize,
        fontWeight: styles.button.fontWeight
      }}>
        {children}
      </Text>
    </TouchablePress>
  )
}