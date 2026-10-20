import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export const Perfil = ({ nombre, carrera, materia, cuatri, style }) => {

  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={[estilos.tarjeta, style]}> 
      <Text style={estilos.nombre}>{nombre}</Text>

      {mostrar && (
        <>
          <Text>{carrera}</Text>
          <Text>{materia}</Text>
          <Text>{cuatri}</Text>
        </>
      )}

      <Button title="ver perfil" onPress={() => setMostrar(!mostrar)} />
    </View>
  );
};

const estilos = StyleSheet.create({
  nombre: {
    fontSize: 24,
    fontWeight: '600',
    textTransform: 'uppercase',
  }, 
  otroTexto: {
    fontSize: 12,
    fontFamily: 'Courier',
    fontStyle: 'italic',
  },
  carrera: {
    fontSize: 18,
    color: 'blue',
    fontFamily: 'Roboto',
  },
  tarjeta: {
    borderWidth: 6, 
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
});