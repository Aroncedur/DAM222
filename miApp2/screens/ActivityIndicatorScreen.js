/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from '../componentes/Perfil';

/* 2. Zona main */
export default function Tarjetas() {
  return (
    <View style={styles.container}>

    <Text> AQUI VA LA PRACTICA DE URIEL Y AARON </Text>

    </View>
  );
}

/* 3. Zona Estilos y posicionamiento */
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
},
  tarjeta1: {
    backgroundColor: 'red',
  },
  tarjeta2: {
    backgroundColor: 'pink',
  },
  tarjeta3: {
    backgroundColor: 'orange',
  },
});