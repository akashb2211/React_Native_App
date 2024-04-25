import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mainscreen from './Mainscreen';
import Introscreen from './Introscreen';

export default function App() {
  const [isloading, setisloading] = useState(false)
  setTimeout(() => {
    setisloading(true)
  }, 2000)
  return (
    <View style={styles.container}>
      {isloading ? <Mainscreen/> : <Introscreen/>}
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
});
