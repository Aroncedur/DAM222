
/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './componentes/Saludo'; 
import { Saludos2 } from './componentes/Saludos2'; 
import { Perfil } from './componentes/Perfil';



/* 2. Zona Main */


export default function App() {
  return (
    <View style={styles.container}>
      <Perfil />

      <Text>Hola mundo React Native</Text>
      <Image source={require("./assets/wave.png")} style={{ width: 100, height: 100 }} />
      <Text>-----------------------------------------</Text>

      <Saludo></Saludo>
      <Saludo/>

      <Text>-----------------------------------------</Text>

      <Saludos2></Saludos2>
      <Saludos2/>

      <StatusBar style="auto" />

    </View>
  );
}

/* 3. Zona estiloz y posicionamiento */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
