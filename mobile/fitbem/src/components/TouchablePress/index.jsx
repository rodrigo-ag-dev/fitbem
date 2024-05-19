import { useState } from "react"
import { Pressable } from "react-native"

export default TouchablePress = ({ children, style, ...props }) => {
  const [pressed, setPressed] = useState(false)
  return (
    <Pressable onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)}
      {...props} style={[style, { opacity: pressed ? 0.5 : 1 }]}
    >
      {children}
    </Pressable>
  )
}