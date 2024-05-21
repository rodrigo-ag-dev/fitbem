import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useContext } from 'react'
import Fitness from './app/Fitness.jsx'
import Health from './app/Health.jsx'
import Index from './app/Index.jsx'
import Login from './app/Login'
import Notification from './app/Notification.jsx'
import Person from './app/Person.jsx'
import { AuthContext, AuthProvider } from './context/AuthContext'
import { NavigateProvider } from './context/NavigateContext'

export default function Routes() {
  const Stack = createNativeStackNavigator()

  const loginVerifyLocal = async () => {
    const { loginVerify } = useContext(AuthContext)
    await loginVerify()
  }

  const Route = () => {
    const { user } = useContext(AuthContext)
    loginVerifyLocal()
    return (
      !user || !user.token
        ? <Login />
        :
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Index' component={Index} />
            <Stack.Screen name='Health' component={Health} />
            <Stack.Screen name='Fitness' component={Fitness} />
            <Stack.Screen name='Person' component={Person} />
            <Stack.Screen name='Notification' component={Notification} />
          </Stack.Navigator>
        </NavigationContainer>
    )
  }

  return (
    <AuthProvider>
      <NavigateProvider>
        <Route />
      </NavigateProvider>
    </AuthProvider>
  )
}