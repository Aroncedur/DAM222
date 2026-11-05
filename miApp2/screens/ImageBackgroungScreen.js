/* 1 - Zona de importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground, Platform, ActivityIndicator} from 'react-native';
import { useState, useEffect } from 'react';

/* 2 - Zona del main */
export default function ImageBackgroungScreen() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() =>{
        const timer = setTimeout(()=> {
            setShowSplash(false);
        }, 4000);
        return () => clearTimeout(timer);
    },[]);

    if (showSplash){
        return(
            <View style = {styles.splashContainer}>
                <ActivityIndicator
                    size= "Large" color = "#f0f0f0" style = {{marginTop: 20}}
                ></ActivityIndicator>
                <Text style = {styles.splashLoading}> Cargando...</Text>
            </View>
        )
    }

    return(
        <ImageBackground
            source={{uri: 'https://pbs.twimg.com/card_img/2115266529793024000/iSb34PiD?format=webp&name=medium'}}
            style = {styles.container}
            resizeMode='cover'
        >
            <View style = {styles.overlay}>
                <Text style = {styles.titulo}>BIENVENIDOS</Text>
            </View>
            <StatusBar style='light'></StatusBar>
        </ImageBackground>
        
    )

}

    /* 3 -  Zona estilos y posicionamiento */
const styles = StyleSheet.create({
  // Estilos del Splash
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000', // Verde UPQ
    width: '100%',
   
  },
  splashIcon: {
    fontSize: 80,
  },
  splashTitle: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
  },
  splashSub: {
    color: '#a7f3d0',
    fontSize: 18,
    marginTop: 5,
  },
  splashLoading: {
    color: '#d1fae5',
    fontSize: 12,
    marginTop: 20,
  },
  // Estilos de tu presentacion principal
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    alignItems: 'center',
  },
  titulo: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 
});