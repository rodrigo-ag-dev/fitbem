import { ImageBackground } from "react-native"
import img from './Banner.png'
import { styles } from './style'

export default Banner = ({ data, ...props }) => {
  return (
    <ImageBackground source={img} style={styles.banner} imageStyle={{ borderRadius: 10}} />
  )
}