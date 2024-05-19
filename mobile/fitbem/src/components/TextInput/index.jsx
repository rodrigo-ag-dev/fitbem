import { useState } from 'react';
import { TextInput } from 'react-native';
import { styles } from './style';

export default Input = ({ style, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <TextInput
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={[styles.input, style, isFocused && { borderColor: '#ffffff' }]}
      selectionColor='red'
      multiline={true}
      {...props}
    />
  )
}
