import { StatusBar } from 'expo-status-bar';
import Store from './src/pages/store';
import { StyleSheet, Text, View } from 'react-native'
import { BACKGROUND_COLOR } from './src/constants/styles'

export default function App() {
  return (
    <View style={styles.app}>
      <Store />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  }
})