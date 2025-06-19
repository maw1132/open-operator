import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { speak } from '../voice/tts';
import { processUserInput } from '../core';

export default function MyloUI() {
  const [text, setText] = React.useState('');

  const onSubmit = async () => {
    const result = await processUserInput(text);
    speak(JSON.stringify(result));
  };

  return (
    <View>
      <TextInput value={text} onChangeText={setText} placeholder="Ask Mylo" />
      <Button title="Send" onPress={onSubmit} />
    </View>
  );
}
