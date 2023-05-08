import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <SafeAreaView >
      <Home />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

