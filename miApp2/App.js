/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MenuScreen from './screens/MenuScreen';
import ModalBottomScreen from './screens/ModalBottomScreen';

/* 2. Zona main */
export default function App() {
  return (
    <ModalBottomScreen />
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
});