import { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { NavigateContext } from '../../context/NavigateContext'
import { styles } from './style'

export default Results = ({ ...props }) => {
  const [dataLocal, setDataLocal] = useState()
  const { history } = useContext(NavigateContext)

  useEffect(() => {
    if (history && typeof history == 'string') {
      const resp = JSON.parse(history)
      if (resp)
        setDataLocal(resp)
    }
  }, [history])

  return (
    <View style={styles.results}>
      <Text style={styles.title}>Resultados anteriores</Text>
      <View style={styles.history}>
        {dataLocal ?
          dataLocal.map(e =>
            <View key={e.id} style={styles.historyItem}>
              <Text style={styles.BMI}>{e.weight}</Text>
              <Text style={styles.caption}>{e.caption}</Text>
              <Text style={styles.caption}>{e.day ? new Date(e.day).toLocaleDateString('pt-BR') : ''}</Text>
            </View>
          )
          : null
        }
      </View>
    </View >
  )
}