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
import { useNavigation } from "@react-navigation/native";


export default function Login() {

 
  const [text, setText] = useState('teste');
  const navigation = useNavigation();

  useEffect(() => {});

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Text style={styles.texto}>{text}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => rolaDados()}
        >
          <Text>Jogar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
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
  buttons: {
    alignItems: "center",
    justifyContent: "space-around",
    width:200,
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: "black",
  },
  texto:{
    fontSize: 40,
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
  image: {
    width: 100,
    height: 100,
  },
});
