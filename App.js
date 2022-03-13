import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function App() {
  const chaveStorage = '@userlg';
  const [codigo, setCod] = useState('');
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const [confirmaSenha, setConfirmPassword] = useState('');
  const [exibeSenha, setShowPassword] = useState(false);

  async function saveData() {
    if (!ValidateData())
      return;
    try {
      let obj = {
        codigo,
        nome,
        email,
        senha
      };
      let objString = JSON.stringify(obj);
      await AsyncStorage.setItem(chaveStorage, objString);
      Alert.alert('Salvo com sucesso!!!');
    }
    catch (e) {
      Alert.alert(e.toString());
    }
  }

  function ValidateData() {
    if (codigo.length == 0 || codigo <= 0) {
      Alert.alert('Código deve ser maior que zero.');
      return false;
    }
    if (nome.length == 0) {
      Alert.alert('Informe o nome.');
      return false;
    }

    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{5,}$/
    if (!regex.exec(senha)) {
      Alert.alert('Senha não atende os requisitos mínimos');
      return false;
    }

    if (senha !== confirmaSenha) {
      Alert.alert('Senha está diferente da confirmação de senha');
      return false;
    }

    return true;
  }

  async function loadData() {
    try {
      let objString = await AsyncStorage.getItem(chaveStorage);
      if (objString != null) {
        let obj = JSON.parse(objString);
        setCod(obj.codigo);
        setName(obj.nome);
        setEmail(obj.email);
        setPassword(obj.senha);
        setConfirmPassword(obj.senha);
      }
    }
    catch (e) {
      Alert.alert(e.toString());
    }
  }

  function cleanData() {
    setCod('');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}  >
        <View style={styles.areaHeader}>
          <Text style={styles.header} >Cadastro</Text>
        </View>

        <Text style={styles.text}>Código</Text>
        <TextInput style={[styles.textBox, styles.shadow]}
          keyboardType='numeric'
          onChangeText={(texto) => setCod(texto)} value={codigo} />

        <Text style={styles.text}>Nome</Text>
        <TextInput style={[styles.textBox, styles.shadow]}
          onChangeText={(texto) => setName(texto)} value={nome} />

        <Text style={styles.text}>E-mail</Text>
        <TextInput style={[styles.textBox, styles.shadow]}
          keyboardType='email-address'
          onChangeText={(texto) => setEmail(texto)} value={email} />

        <Text style={styles.text}>Senha</Text>
        <View>
          <TextInput style={[styles.textBox, styles.shadow]}
            secureTextEntry={!exibeSenha}
            onChangeText={(texto) => setPassword(texto)} value={senha} />
          <TouchableOpacity
            onPress={() => setShowPassword(!exibeSenha)}>
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>Confirmação de senha</Text>
        <TextInput style={[styles.textBox, styles.shadow]}
          secureTextEntry={!exibeSenha}
          onChangeText={(texto) => setConfirmPassword(texto)}
          value={confirmaSenha} />

        <View style={styles.areaBtn}>
          <TouchableOpacity style={[styles.btn, styles.shadow]}
            onPress={() => saveData()}>
            <Text style={styles.textBtn}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.shadow]}
            onPress={() => loadData()}>
            <Text style={styles.textBtn}>Carregar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.shadow]}
            onPress={() => cleanData()}>
            <Text style={styles.textBtn}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}