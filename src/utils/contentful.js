import { createClient } from 'contentful';

export const client = createClient({
  space: 'bbwpgjv1jd8l',
  accessToken: '1d368a3878504119f6a075082be5665196d98efadf78884bbb314d7fd350dfcc',
});

export const getEntries = options => client.getEntries(options)
