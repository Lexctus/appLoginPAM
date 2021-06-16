import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';

//Importando telas
import TelaLogin from './scr/paginas/TelaLogin';
import TelaHome from './scr/paginas/TelaHome';
import TelaCadastro from './scr/paginas/TelaCadastro';

const AppNavigator = createStackNavigator({

  'Login':{
    screen: TelaLogin,
    navigationOptions:{
      title: 'Login'
    }
  },

  'Home':{
    screen: TelaHome,
    navigationOptions:{
      title: 'Página Inicial'
    }
  },

  'Cadastro':{
    screen: TelaCadastro,
    navigationOptions:{
      title: 'Página de Cadastro'
    }
  }
}, {
  HeaderTitle: {
    backgroundColor: '#00ff7f',
    border_bottom_width: 10
  },
  
})

const AppConteiner = createAppContainer(AppNavigator);
export default AppConteiner;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Em progresso</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
