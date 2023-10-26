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
import { auth } from "../firebase";
import { useEffect, useReducer, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native"
import  teste  from "../context";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const store = teste()

  async function login(){
    try{
      await auth.signInWithEmailAndPassword(email, password)
      store.signIn()
    }catch(error){
      alert(error.message);
    }
    console.log(email)
    console.log(password)
    
  }


  useEffect(() => {});

  return (
    <View style={styles.container}>
      <View style={styles.views}>
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
          onPress={() =>login()}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.textRegister}>Register</Text>
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
