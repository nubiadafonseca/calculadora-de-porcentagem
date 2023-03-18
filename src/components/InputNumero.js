import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';

const InputNumero = () => {
  const [numeroInput, setNumero] = useState('');
  const [porcentagemInput, setPorcentagem] = useState('');
  const [resultado, setResultado] = useState(0);

  const calcular = () => {
    setResultado(
      (parseFloat(porcentagemInput) / 100) * parseFloat(numeroInput) +
        parseFloat(numeroInput),
    );
  };

  const limparTela = () => {
    setNumero('');
    setPorcentagem('');
    setResultado(0);
  };

  return (
    <View>
      <TextInput
        placeholder="Número"
        placeholderTextColor="#A9A9A9"
        style={styles.input}
        value={numeroInput}
        onChangeText={setNumero}
        keyboardType="numeric"
      />
      <Text style={styles.sinal}>+</Text>
      <TextInput
        placeholder="Porcentagem"
        placeholderTextColor="#A9A9A9"
        style={styles.input}
        value={porcentagemInput}
        onChangeText={setPorcentagem}
        keyboardType="numeric"
      />
      <Text style={styles.texto}>Resultado: {resultado}</Text>
      <TouchableOpacity style={styles.botaoCalcular} onPress={calcular}>
        <Text style={styles.textoBotao}>CALCULAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoLimpar} onPress={limparTela}>
        <Text style={styles.textoBotao}>LIMPAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputNumero;

const styles = StyleSheet.create({
  input: {
    color: '#F8F8FF',
    borderColor: '#7FFFD4',
    height: 60,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
  },
  botaoCalcular: {
    backgroundColor: '#F8F8FF',
    padding: 15,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 10,
  },
  botaoLimpar: {
    backgroundColor: '#F8F8FF',
    padding: 15,
    alignSelf: 'center',
    borderRadius: 10,
  },
  textoBotao: {
    color: '#20B2AA',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  texto: {
    color: '#F8F8FF',
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
  },
  sinal: {
    color: '#F8F8FF',
    fontSize: 30,
    textAlign: 'center',
  },
});
