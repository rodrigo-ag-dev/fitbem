import { Image, Text, View } from "react-native"
import scale from './scale.png'
import { styles } from './style'
import water_drop from './water_drop.png'

export default Suggestion = ({ data, ...props }) => {
  return (
    <View style={styles.suggestionContainer}>
      <View style={styles.suggestionRow}>
        <Image source={scale} />
        <View style={styles.suggestionCol}>
        <Text style={styles.title}>Peso ideal</Text>
          <Text style={styles.caption}>63-85kg</Text>
        </View>
      </View>
      <View style={styles.suggestionRow}>
        <Image source={water_drop} />
        <View style={styles.suggestionCol}>
          <Text style={styles.title}>Água por dia</Text>
          <Text style={styles.caption}>3.4 litros</Text>
        </View>
      </View>
    </View >
  )
}