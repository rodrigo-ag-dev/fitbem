import { Image, Text, View } from "react-native"
import NotifyIcon from "../../assets/NotifyIcon.png"
import { FormatDate } from "../../functions/global"
import { styles } from "./style"

export default NotifyCard = ({ data, ...props }) => {
  const { message, day, status } = data
  return (
    <View style={[styles.card, { backgroundColor: status == 1 ? '#ffffff' : '#D9D9D9' }]}>
      <View style={styles.title}>
        <View style={[styles.title, { width: 130 }]}>
          <Image source={NotifyIcon} />
          <Text style={styles.titleText}>Fit Bem</Text>
        </View>
        <Text>{FormatDate(day).substring(0, 5)}</Text>
      </View>
      <View style={styles.info}>
        <Text style={[styles.titleText, { fontSize: 14, fontWeight: 'bold' }]}>Dica do dia</Text>
        <Text style={[styles.titleText, { fontSize: 14 }]}>{message}</Text>
      </View>
    </View>
  )
}