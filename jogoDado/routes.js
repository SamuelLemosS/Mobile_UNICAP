import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home';
import History from './screen/History';
const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
}