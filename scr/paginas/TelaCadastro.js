import React from 'react';
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Alert, Text } from 'react-native';
import firebase from 'firebase';

export default class TelaCadastro extends React.Component{

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            senha: ''
        }
    }

    onChangeEmail(value) {
        this.setState({

            email: value
        })
    }

    onChangeSenha(value) {

        this.setState({

            senha: value
        })
    }

    tryCadastro() {
        
        console.log(this.state);

        try{

            firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .then( user => {

                console.log('NOVO USUÁRIO ADICIONADO', user)
                this.props.navigation.replace('Home');
            }).catch(error => {

                console.log('erro ao criar usuário', error)
            })
        }
        catch(error){

            console.log('erro no try', error);
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
                title="CADASTRAR-SE" 
                color="#00ffff"
                style={styles.entrar}
                onPress={ () => {this.tryCadastro()} }/>
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
      borderBottomColor: '#00ffFf',
      marginBottom: 20
    },
  
    Text: {
      backgroundColor: '#00ffFf',
      padding: 10,
      fontSize: 15
    },
    
    entrar: {
      backgroundColor: '#00ffFf',
      color: '#000'
  
    }
  
  });