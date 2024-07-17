import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  const [cnt,setCnt]=useState(0)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.fs}>{cnt}</Text>
      <Button
        title="Press me"
        onPress={() => setCnt(cnt+1)}
      />
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
  fs:{
    fontSize:"100px"
  }
});
