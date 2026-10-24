
/* 1 - Zona de importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';

/* 2 - Zona del main */
export default function SafeScreen() {
    return (
    <View style={styles.container}> 
        
        <Text> Aqui va la practica de Uriel o Aaron</Text>
        
        <StatusBar style="auto" />
        </View>
    );
    }

    /* 3 -  Zona estilos y posicionamiento */
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});