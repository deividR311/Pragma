//OWN IMPORTS

import { Cat } from '../models/Cat';
import { CATS_API } from './BaseService';

class CatsService {
  getCats = async () => {
    let response = await CATS_API.get<Cat[]>(``);
    return response.data;
  };
}

const catsService = new CatsService();

export default catsService;