import * as FileSystem from 'expo-file-system';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function listenAndTranscribe(uri: string) {
  const file = await FileSystem.readAsStringAsync(uri, { encoding: 'base64' });
  const resp = await openai.audio.transcriptions.create({
    file: Buffer.from(file, 'base64'),
    model: 'whisper-1'
  });
  return resp.text;
}
