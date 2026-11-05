/* 1 - Zona de importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';
import Tarjetas from './Tarjetas';
import SafeScreen from './SafeScreen';
import PressableSwitch from './PressableSwitch';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroungScreen from './ImageBackgroungScreen';
import ModalBottomScreen from './ModalBottomScreen'
import ActivityIndicatorScreen from './ActivityIndicatorScreen';

/* 2 - Zona del main */
export default function MenuScreen() {

    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'tarjetas':
            return <Tarjetas/>
        case 'safescreen':
            return <SafeScreen/>
        case 'pressablescreen':
            return <PressableScreen/>
        case 'textinputscreen':
            return <TextInputScreen/>
        case 'flatlistscreen':
            return <FlatListScreen/>
        case 'imagebackgroungscreen':
            return <ImageBackgroungScreen/>
        case 'modalscreen':
            return <ModalBottomScreen/>
        case 'activityindicatorscreen':
            return <ActivityIndicatorScreen/>
        case 'menu':
            default:
            return (
                <View style={[styles.container, styles.borde]}>
                    <Text style={styles.titulo}> Menu de Practicas </Text>
                    <Button title='Tarjetas' onPress={ ()=> setScreen('tarjetas') }></Button>
                    <Button title='SafeAreaView' onPress={ ()=> setScreen('safescreen') }></Button>
                    <Button title='Pressable' onPress={ ()=> setScreen('pressablescreen') }></Button>
                    <Button title='textinputscreen' onPress={ ()=> setScreen('textinputscreen') }></Button>

                    <Button title='flatlistscreen' onPress={ ()=> setScreen('flatlistscreen') }></Button>
                    <Button title='imagebackgroungscreen' onPress={ ()=> setScreen('imagebackgroungscreen') }></Button>
                    <Button title='modalscreen' onPress={ ()=> setScreen('modalscreen') }></Button>
                    <Button title='activityindicatorscreen' onPress={ ()=> setScreen('activityindicatorscreen') }></Button>
                    <StatusBar style="auto" />
                </View>
            ); //return
    } //Switch
} //funcion

    /* 3 -  Zona estilos y posicionamiento */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    titulo:{
        fontSize: 24,
        fontWeight: '800',
        textTransform: 'uppercase',
        backgroundColor: '#e9dcdc',
        borderRadius: 10,
        padding: 10
    },
    borde: {
        borderWidth: 3,
        borderRadius: 10,
        padding: 15,
        margin: 10,
        backgroundColor: '#ceb3b3',
    },
});