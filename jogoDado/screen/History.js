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

export default function History() {
  const [text, setText] = useState("");

  function reducer(state, action) {
    if (action.type === "addItem") {
      return { ...state, data: [...state.data, text] };
    }
  }

  const [state, dispatch] = useReducer(reducer, { data: [] });

  useEffect(() => {
    console.log(state.data);
  });

  return (
    <View style={styles.container}>
     <Text>tsete</Text>
      
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