import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/components/Navigator/Navigator';
import { AuthContext } from './src/components/AuthContext/AuthContext';
import 'react-native-gesture-handler';

export default function App() {
  return (

    <AuthContext>
      <Navigator />
    </AuthContext>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
