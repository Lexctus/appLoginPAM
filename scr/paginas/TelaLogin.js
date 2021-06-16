import React from 'react';
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Alert, Text } from 'react-native';
import firebase from 'firebase';


export default class TelaLogin extends React.Component{

  constructor(props){

    super(props);
    this.state = {

      email: '',
      senha: ''
    }
  }

  //Pegar dados de senha e email
  onChangeEmail(value){

    this.setState({

      email: value

    })
  }

  onChangeSenha(value){

    this.setState({

      senha: value

    })

  }

  //Código para logar no app
  tryLogin(){

    console.log(this.state);

    //Conexão com o Firebase
    try{

      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(response => {

        console.log('SUCESSO AO AUTENTICAR', response.user);

        this.props.navigation.replace('Home');

      }).catch(error => {
        console.log('FALHA NA AUTENTICAÇÃO', error.code)
      })
    }catch{
      Alert.alert(
        'FALHA NO LOGIN',
        'Verfique sua conexão com a internet ou tente novamente mais tarde.',
        [
          {
            text: 'OK',
            onPress: () => {console.log('botão ok (falha no login) pressionado')}
          }
        ]
      )

    }
  }

  //MÉTODO QUE LEVA A TELA DE CADASTRO
  irParaCadastro(){
    console.log('clicou em ir para cadastro');
    this.props.navigation.navigate('Cadastro');
  }

  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyBrbtc9Yfx9cxHsqvZqdRpq1yf_LsaGqt4",
      authDomain: "apploginpam.firebaseapp.com",
      projectId: "apploginpam",
      storageBucket: "apploginpam.appspot.com",
      messagingSenderId: "775870510490",
      appId: "1:775870510490:web:0c12b03f940d36acd33623"
    };

    if(firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }


  render(){

    return(
        
      <View style={styles.container}>

        <Text style={styles.Text}>E-mail</Text>
        <TextInput 
          style={styles.input}
          placeholder="digite seu e-mail"
          onChangeText={ value => {
            this.onChangeEmail(value);
          }}
        />

        <Text style={styles.Text}>Senha</Text>
        <TextInput 
          style={styles.input}
          placeholder="digite sua senha"
          onChangeText={ value => {
            this.onChangeSenha(value);
          }}
        />

        <Button 
        title="ENTRAR" 
        color="#00ff7f"
        onPress={ () => {this.tryLogin()} }
        />

        <TouchableOpacity onPress={ () => {this.irParaCadastro()} }>
          <Text style={styles.cadastro}>
            Clique aqui para se cadastrar
          </Text>
        </TouchableOpacity>
      </View>  
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  input:{
    padding: 5,
    borderBottomWidth:3,
    borderBottomColor: '#00ff7f',
    marginBottom: 20
  },

  Text: {
    backgroundColor: '#00ff7f',
    padding: 10,
    fontSize: 15

  },
  
  cadastro: {
    color: '#00ff7f',
    marginTop: 50
  }
});
