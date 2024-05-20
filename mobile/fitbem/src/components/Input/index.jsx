import { useState } from 'react';
import { TextInput } from 'react-native';
import { styles } from './style';

export default Input = ({ style, light, compact, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <TextInput
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      style={
        [styles.input,
        { backgroundColor: light || compact ? '#ffffff' : '#397382' },
        { borderColor: light || compact ? '#cccccc' : '#397382' },
        { color: light || compact ? '#397382' : '#ffffff' },
        { marginBottom: compact ? 5 : 10 },
        { height: compact ? 32 : 42 },
          style,
        isFocused && { borderColor: '#aaaaaa' }
        ]
      }
      selectionColor='red'
      {...props}
    />
  )
}
