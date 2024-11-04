import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Botao from './components/Botao';

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={estilos.botoes}>
        <Botao label="7"/>
        <Botao label="8"/>
        <Botao label="9"/>
        <Botao label="*"/>

        <Botao label="4"/>
        <Botao label="5"/>
        <Botao label="6"/>
        <Botao label="-"/>

        <Botao label="1"/>
        <Botao label="2"/>
        <Botao label="3"/>        
        <Botao label="+"/>

        <Botao label="0"/>
        <Botao label=","/>
        <Botao label="="/>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 550,
  }
});
