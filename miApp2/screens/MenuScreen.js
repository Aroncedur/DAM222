/* 1. Zona de importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, text, Button } from 'react-native';
import { useState } from 'react';
import Tarjetas from './Tarjetas';
import SafeScreen from './SafeScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';  
import FlatListScreen from './FlatListScreen';
import { ImageBackgroundScreen } from 'react-native';
import ModalScreen from './ModalScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';

/* 2. Zona main */
export default function MenuScreen() {

    const[screen,setScreen]= useState('menu');

    switch(screen){ 
        case 'tarjetas' :
            return <Tarjetas/>
        case 'safeScreen' :
            return <SafeScreen/>

        case 'menu':
          default:
          return (
            <View style={styles.container}>
              <>MENU DE PRACTICAS</>
              <Button title='Tarjetas' onPress={ ()=>setScreen('tarjetas') } ></Button>
              <Button title='SafeAreaView' onPress={ ()=>setScreen('safeScreen') } ></Button>
              <Button title='ActivityIndicator' onPress={ ()=>setScreen('ActivityIndicatorScreen') } ></Button>
              <Button title='FlatList' onPress={ ()=>setScreen('FlatListScreen') } ></Button>
              <Button title='ImageBackground' onPress={ ()=>setScreen('ImageBackgroundScreen') } ></Button>
              <Button title='ModalScreen' onPress={ ()=>setScreen('ModalScreen') } ></Button>
              <Button title='PressableScreen' onPress={ ()=>setScreen('PressableScreen') } ></Button>
              <Button title='TextInputScreen' onPress={ ()=>setScreen('TextInputScreen') } ></Button>
              <Button title='Menu' onPress={ ()=>setScreen('menu') } ></Button>


              <StatusBar style="auto" />

            </View>
          );
  }
}

/* 3. Zona Estilos y posicionamiento */
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#f8efeff0',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
},
});