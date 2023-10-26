import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect, useReducer, useState } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";


export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const {setIsLogin} = useContext(userContext)

  async function register(){
    try{
      await auth.createUserWithEmailAndPassword(email, password)
      setIsLogin(true)
    }catch(error){
      alert(error.message);
    }
    console.log(email)
    console.log(password)
    console.log(name)
  }

  useEffect(() => {});

  return (
    <View style={styles.container}>
      <View style={styles.views}>
      <TextInput
          onChangeText={setName}
          placeholder="Name"
          style={styles.input}
        />
      <TextInput
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          onChangeText={setPassword}
          placeholder="Password"
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>register()}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: 100,
    height: 50,
    borderRadius: 5,
    padding: 5,
    margin: 10,
  },
  register: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 50,
    borderRadius: 5,
    padding: 5,
    margin: 10,
    
  },
  textRegister:{
    textDecorationStyle:"solid",
    textDecorationLine:"underline",
  },
  views: {
    alignItems: "center",
    justifyContent: "space-around",
    width:200,
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: "black",
  },
  view: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    width: 300,
    height: 300,
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: "black",
  },
  text: {
    marginBottom: 50,
  },
  input: {
    margin: 10,
    width: 150,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
});
