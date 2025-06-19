import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { speak } from './voice/tts';
import { listenAndTranscribe } from './voice/stt';

export default function App() {
  React.useEffect(() => {
    speak('Hello, I am Mylo. How can I assist you today?');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome to Mylo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
