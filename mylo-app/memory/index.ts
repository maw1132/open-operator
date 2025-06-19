import { createClient } from 'weaviate-client';

const client = createClient({
  scheme: 'https',
  host: process.env.WEAVIATE_HOST || ''
});

export async function remember(key: string, value: any) {
  await client.data.creator().withClassName('Memory').withProperties({ key, value }).do();
}

export async function recall(key: string) {
  const res = await client.graphql.get().withClassName('Memory').withFields('value').withWhere({ path: ['key'], operator: 'Equal', valueText: key }).do();
  return res.data?.Get?.Memory?.[0]?.value;
}
