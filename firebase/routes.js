import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/home';
import Login from './screen/login';
import Register from './screen/register';
const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerTitle:'Login'}} />
      <Stack.Screen name="Home" component={Home} options={{headerTitle:'Home'}}/>
      <Stack.Screen name="Register" component={Register} options={{headerTitle:'Register'}} />
    </Stack.Navigator>
  );
}