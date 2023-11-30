import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Image} from 'react-native';
import Button from './src/components/Button';
import InputComponent from './src/components/Input';
import Imagem from "./src/assets/images/reactlogo.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Imagem} style={styles.image}/>
      <Button />
      <InputComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width:150,
    height:150,
    marginBottom:20,
    borderRadius:999,
  }
});