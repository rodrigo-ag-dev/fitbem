import { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import TouchablePress from '../TouchablePress';
import { styles } from './style';

export default Select = ({ style, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [top, setTop] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const nameSelect = makeid(10)

  const handleOpen = (e) => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      const drop = document.getElementById(nameSelect)
      const heigth = drop.getBoundingClientRect().bottom - drop.getBoundingClientRect().top
      let topP = drop.parentNode.getBoundingClientRect().top
      topP = topP - heigth
      setTop(topP)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isFocused)
      setIsOpen(false)
  }, [isFocused])

  return (
    <>
      <View id={nameSelect}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.select, style, isFocused && { borderColor: 'blue' }]}
        readOnly
        {...props}
      >
        <TextInput
          readOnly
          name='combo'
          style={[styles.text, style]}
          placeholder={props.placeholder}
        />
        <TouchablePress name='btncombo' style={styles.button} onPress={(e) => handleOpen(e.target)}>
          <Text style={{ color: '#000000' }}>...</Text>
        </TouchablePress>
      </View>
      {isOpen ?
        <View style={[styles.selectContainer, { top }]}>
          <Text>Rodrigo</Text>
          <Text>Rodrigo</Text>
          <Text>Rodrigo</Text>
          <Text>Rodrigo</Text>
          <Text>Rodrigo</Text>
        </View >
        : null
      }
    </>
  );
}
