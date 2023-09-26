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
import {useNavigation} from "@react-navigation/native"
export const faceDices = {
  one: require("../assets/one.png"),
  two: require("../assets/two.png"),
  three: require("../assets/three.png"),
  four: require("../assets/four.png"),
  five: require("../assets/five.png"),
  six: require("../assets/six.png"),
}

export default function Home() {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  function rolaDados(){
      let dado1 = Math.floor((Math.random() * 5 + 1));
      let dado2 = Math.floor((Math.random() * 5 + 1));
  }

  useEffect(() => {
    
  });

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image source={require('../assets/one.png')}/>
        <Image source={require('../assets/one.png')}/>
      </View>
      <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch({ type: "addItem" })}
        >
          <Text>Jogar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('History')}
        >
          <Text>Histórico</Text>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    margin: 10,
    width: 150,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: "black",
    padding: 5,
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
  view: {
    alignItems:'center',
    justifyContent: 'space-between',
    flexDirection: "row",
    width: 300,
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: "black",
  },
  text: {
    marginBottom: 50,
  },
});