import { NativeBaseProvider, StatusBar } from 'native-base';

import { Home } from '@screens/Home';

import { Loading } from '@components/Loading';

import { THEME } from './src/theme';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Home /> : <Loading />}
    </NativeBaseProvider>
  );
}
