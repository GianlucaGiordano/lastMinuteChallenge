/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import Homepage from './screens/Homepage/Homepage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from './App.style';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Homepage />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
