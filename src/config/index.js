// @flow
import { createClient } from 'contentful';

const API_TOKEN = '09S9ZzDHInOc5idlUFGUb8WMHKgTVjdL8qY-gAHkvvs';
const SPACE_ID = '00rupoxwqclx';

export const CLIENT = createClient({
  space: SPACE_ID,
  accessToken: API_TOKEN
});


