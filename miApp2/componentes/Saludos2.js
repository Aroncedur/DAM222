import { Text, View, Image, Button } from 'react-native';

export const Saludos2 = () => {
  return (
    <View>
      <Text> Hola RN: Soy un componente Propio Compuesto </Text>
      <Image source={require("../assets/wave.png")} style={{ width: 100, height: 100 }} />
      <Button title='Presiona para saludar'></Button>
    </View>

  )
}