import { NavigationContainer } from "@react-navigation/native"
import { Routes } from "./routes"
import userProvider from "./context"
export default function App() {
  return(
    <userProvider>
      <NavigationContainer><Routes/></NavigationContainer>
    </userProvider>
  )
}