import axios from 'axios';
import { REACT_APP_API, REACT_APP_API_KEY } from '@env';

export const CATS_API = axios.create({
    baseURL: `${REACT_APP_API}`,
    timeout: 15000,
    headers: {
      'Content-type': 'application/json',
      'x-api-key'   : REACT_APP_API_KEY
    }
});