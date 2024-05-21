import { Image, Text, View } from "react-native"
import Doutor from "../../assets/Dr.png"
import Trainer from "../../assets/Trainer.png"
import { styles } from "./style"

export default Card = ({ data, ...props }) => {
  const { category, description, city, whatsapp, specialty, type } = data
  const image = type == 0 ? Doutor : Trainer
  return (
    <View style={styles.card}>
      <View style={styles.back}>
        <View style={styles.info}>
          <View>
            <Text style={styles.description}>{description}</Text>
            <Text>{city}</Text>
            <Text>{whatsapp}</Text>
          </View>
          <View>
            <Image source={image} />
          </View>
        </View>
        <View style={styles.especialidade}>
          <Text style={styles.titleespecialidade}>Especialidade:</Text>
          <Text style={styles.textespecialidade}>{specialty}</Text>
        </View>
      </View>
      <Text style={styles.category}>{category}</Text>
    </View>
  )
}