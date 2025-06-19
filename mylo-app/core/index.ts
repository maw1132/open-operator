import { handleTask } from '../agents';
import { remember } from '../memory';

export async function processUserInput(text: string) {
  const result = await handleTask(text);
  await remember('lastResult', result);
  return result;
}
