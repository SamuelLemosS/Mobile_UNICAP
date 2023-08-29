import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TextInput 
          placeholder='Digite sua tarefa'
          style={styles.input}
        />
        <Button
          placeholder='Adicine a tarefa'
          style={styles.teste}
        />
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor:"black"
  },
  teste:{
    backgroundColor:"black",
  },
  view:{
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor:"black"
  }
});
