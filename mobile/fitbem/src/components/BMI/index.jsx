import { useContext, useEffect, useState } from "react"
import { Text, View } from "react-native"
import { NavigateContext } from "../../context/NavigateContext"
import { styles } from './style'

export default BMI = ({ ...props }) => {
  const [dataLocal, setDataLocal] = useState()
  const { data } = useContext(NavigateContext)

  useEffect(() => {
    if (data && typeof data == 'string') {
      const resp = JSON.parse(data)
      if (resp)
        setDataLocal(resp)
    }
  }, [data])

  return (
    <View style={styles.bmi}>
      <Text style={styles.title}>Índice de Massa Corporal</Text>
      <View style={styles.body}>
        <View style={styles.weightHeight}>
          <Text style={styles.textWeightHeight}>PESO</Text>
          <Text style={styles.textWeightHeight}>{dataLocal ? dataLocal.weight : 0} kg</Text>
        </View>
        <View style={styles.index}>
          <Text style={styles.textIndex}>IMC</Text>
          <Text style={styles.textIndex}>{dataLocal ? dataLocal.bmi.toFixed(2) : 0.00}</Text>
        </View>
        <View style={styles.weightHeight}>
          <Text style={styles.textWeightHeight}>ALTURA</Text>
          <Text style={styles.textWeightHeight}>{dataLocal ? dataLocal.height : 0} m</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{dataLocal ? dataLocal.caption : 0}</Text>
      </View>
    </View >
  )
}