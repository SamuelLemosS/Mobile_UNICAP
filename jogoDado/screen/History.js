import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  SectionList,
  Image,
} from "react-native";
import { useEffect, useReducer, useState } from "react";
import useStore from '../Store'

export default function History() {
  const [text, setText] = useState("");
  const store = useStore()

  const data = store.historico.reverse()

  useEffect(() => {
    console.log(data)
  })

  return (
    <View style={styles.container}>
      {/* <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    /> */}
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.view}>
          <Text>{item.resultado}</Text>
          <Text>{item.date}</Text>
        </View>
      )}
    />
      
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
  view: {
    alignItems:'center',
    justifyContent: 'space-between',
    flexDirection: "row",
    width: 300,
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: "black",
    padding: 10,
  },
  text: {
    marginBottom: 50,
  },
});