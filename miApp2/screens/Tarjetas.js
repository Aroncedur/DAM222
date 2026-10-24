/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from '../componentes/Perfil';

/* 2. Zona main */
export default function Tarjetas() {
  return (
    <View style={styles.container}>

      <Perfil style={styles.tarjeta1} nombre="aaron cuenca" materia="movil" /> 
      
      <Perfil style={styles.tarjeta2} nombre="aaron cuellar" cuatri="4"/>
      
      <Perfil style={styles.tarjeta3} nombre="aaron gallardo" carrera="TIID"/>
    
      <StatusBar style="auto" />

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