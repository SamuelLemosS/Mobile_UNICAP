import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home';
import History from './screen/History';
const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerTitle:'Jogo'}}/>
      <Stack.Screen name="History" component={History} options={{headerTitle:'Histórico'}} />
    </Stack.Navigator>
  );
}