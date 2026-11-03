import { useState } from "react";
import { View, Text, TextInput, Switch, Button, Alert, StyleSheet } from "react-native";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [semestre, setSemestre] = useState("");
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const enviar = () => {
    if (nombre === "" || carrera === "" || semestre === "") {
      Alert.alert("Campos incompletos", "Debes llenar todos los campos.");
    } else if (isNaN(semestre)) {
      Alert.alert("Error", "El semestre debe ser un número.");
    } else {
      Alert.alert(
        "Registro enviado",
        "Nombre: " + nombre + "\n" +
        "Carrera: " + carrera + "\n" +
        "Semestre: " + semestre + "\n\n" +
        "Taller: " + (taller ? "Sí" : "No") + "\n" +
        "Constancia: " + (constancia ? "Sí" : "No") + "\n" +
        "Deportes: " + (deportes ? "Sí" : "No")
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />
      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
      />

      <Text style={styles.subtitulo}>Opciones</Text>

      <View style={styles.fila}>
        <Text>¿Asistirá al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>

      <View style={styles.fila}>
        <Text>¿Requiere constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>

      <View style={styles.fila}>
        <Text>¿Participará en deportes?</Text>
        <Switch value={deportes} onValueChange={setDeportes} />
      </View>

      <View style={styles.boton}>
        <Button title="Enviar Registro" onPress={enviar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  boton: {
    marginTop: 20,
  },
});
