import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Map from './screens/Map';

export default function App() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#fff", alignItems: "center", justifyContent: "center"}}>
      <Map></Map>
    </SafeAreaView>
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
