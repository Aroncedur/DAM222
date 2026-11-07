import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [guardando, setGuardando] = useState(false);
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const tiempo = setTimeout(() => {
      setMostrarSplash(false);
    }, 2000);
    return () => clearTimeout(tiempo);
  }, []);

  const agregarLibro = () => {
    if (titulo.trim() === '' || autor.trim() === '' || genero.trim() === '') {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }

    setGuardando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo,
        autor: autor,
        genero: genero,
      };

      setLibros([nuevoLibro, ...libros]);
      setTitulo('');
      setAutor('');
      setGenero('');
      setGuardando(false);
      Alert.alert('Alert', 'Libro guardado correctamente.');
    }, 4000);
  };

  if (mostrarSplash) {
    return (
      <View style={styles.splash}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.splashTexto}>repa2</Text>
      </View>
    );
  }

  return (
    <ImageBackground source={require('./assets/fondo.jpg')} style={styles.fondo}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Catálogo de Libros</Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Autor"
          value={autor}
          onChangeText={setAutor}
        />
        <TextInput
          style={styles.input}
          placeholder="Género"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable
          style={[styles.boton, guardando && styles.botonDesactivado]}
          onPress={agregarLibro}
          disabled={guardando}
        >
          <Text style={styles.botonTexto}>
            {guardando ? 'Guardando...' : 'Agregar Libro'}
          </Text>
        </Pressable>

        {guardando && (
          <View style={styles.espera}>
            <ActivityIndicator size="large" color="#ffffff" />
            <Text style={styles.esperaTexto}>Guardando libro...</Text>
          </View>
        )}

        <Text style={styles.total}>Total de libros: {libros.length}</Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tarjeta}>
              <Text style={styles.tarjetaTitulo}>{item.titulo}</Text>
              <Text>Autor: {item.autor}</Text>
              <Text>Género: {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  splashTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  fondo: {
    flex: 1,
  },
  contenedor: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  botonDesactivado: {
    backgroundColor: '#888888',
  },
  botonTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  espera: {
    alignItems: 'center',
    marginTop: 10,
  },
  esperaTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  total: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  tarjeta: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  tarjetaTitulo: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});