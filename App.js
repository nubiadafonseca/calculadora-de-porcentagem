import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import InputNumero from './src/components/InputNumero';

export default function App() {
  return (
    <SafeAreaProvider>
      <LinearGradient style={{ flex: 1 }} colors={['#2F4F4F', '#20B2AA']}>
        <SafeAreaView style={estilos.container}>
          <Text style={estilos.titulo}>Calculadora de %</Text>
          <InputNumero />
          <StatusBar barStyle="light-content" backgroundColor="#2F4F4F" />
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const estilos = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  titulo: {
    color: '#F8F8FF',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
});
