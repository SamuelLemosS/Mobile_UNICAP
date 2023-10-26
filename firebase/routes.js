import { createStackNavigator } from "@react-navigation/stack";
import { useContext, useEffect, useState } from "react";
import { userContext } from "./context";
import Home from "./screen/home";
import Login from "./screen/login";
import Register from "./screen/register";
const Stack = createStackNavigator();

export function Routes() {
  const [login, setLogin] = useState(false);
  const { isLogin } = useContext(userContext);

  useEffect(() => {
    setLogin(isLogin);
  }, [isLogin]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {isLogin ? 
          <Stack.Screen name="Home" component={Home} options={{ headerTitle: "Home" }}/>
         : 
          <>
            <Stack.Screen name="Login" component={Login} options={{ headerTitle: "Login" }}/>
            <Stack.Screen name="Register"  component={Register} options={{ headerTitle: "Register" }}/>
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
