import { Cat } from '../../models/Cat';
import { CatsState } from './Interfaces';
import * as Types from '../Types';

type action = {
  type    : string,
  payload : Cat[]
}

const catsReducer = (state : CatsState, { type, payload } : action ) : CatsState => {
  switch (type) {
    
    case Types.CATS_ALL:
      return {
        ...state,
        cats: payload
      };

    case Types.CATS_ALL_ERROR:
      return {
        ...state,
        cats: payload
      };

    default:
      return state;
  }
};

export default catsReducer;