import { useReducer } from 'react';
import CatsContext from './CatContext';
import catsReducer from './CatReducer';
import catsService from '../../services/CatService';

import * as Types from '../Types';
import { CatsState } from './Interfaces';

interface props {
  children : JSX.Element | JSX.Element[]
}

const INITIAL_STATE: CatsState = {
  cats: []
}

const CatsContextState = ({ children } : props) => {
  const [ catsState, dispatch ] = useReducer(catsReducer, INITIAL_STATE);

  const getCats = () => {
    catsService.getCats().then(
      (response) => {
        dispatch({
          type: Types.CATS_ALL,
          payload: response
        });
      }
    ).catch(err => {
      dispatch({
        type: Types.CATS_ALL_ERROR,
        payload: []
      });
    })
  };

  return (
    <CatsContext.Provider value={{
        catsState,
        getCats
    }}>
      {children}
    </CatsContext.Provider>
  );
};

export default CatsContextState;