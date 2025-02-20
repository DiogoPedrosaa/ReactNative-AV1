import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Loginscreen } from './src/screens/login';
import { Registerscreen } from './src/screens/register/register';
import {MenuScreen} from './src/screens/mainmenu/menu';
import {AtlasScreen} from './src/screens/atlas/atlas'
import { BuildsScreen } from './src/screens/builds/metabuilds';
export default function App() {
  

    return (<Loginscreen />);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnalert: {
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    borderRadius: 5
  },
});
