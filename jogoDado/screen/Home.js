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
import useStore from '../Store'
export const faceDices = {
  one: require("../assets/one.png"),
  two: require("../assets/two.png"),
  three: require("../assets/three.png"),
  four: require("../assets/four.png"),
  five: require("../assets/five.png"),
  six: require("../assets/six.png"),
};

export default function Home() {

  const store = useStore()

  const dice = [faceDices.one,faceDices.two,faceDices.three,faceDices.four,faceDices.five,faceDices.six]
  const [text, setText] = useState('Jogue');
  const [image1, setImage1] = useState(dice[0]);
  const [image2, setImage2] = useState(dice[2]);
  const navigation = useNavigation();

  function rolaDados() {
    let dado1 = Math.floor(Math.random() * 5 + 1);
    let dado2 = Math.floor(Math.random() * 5 + 1);
    let soma = dado1 + dado2;
    setImage1(dice[dado1 - 1])
    setImage2(dice[dado2 - 1])

    if(soma>5){
      setText('Ganhou');
      store.addResultado({ resultado: 'Ganhou', date: getData() })
    }else{
      setText('Perdeu');
      store.addResultado({ resultado: 'Perdeu', date: getData() })
    }
  }

  const getData = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${day}/${month}/${year}`;
};

  useEffect(() => {});

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image style={styles.image} source={image1} />
        <Image style={styles.image} source={image2} />
      </View>
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
          onPress={() => navigation.navigate("History")}
        >
          <Text>Histórico</Text>
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
