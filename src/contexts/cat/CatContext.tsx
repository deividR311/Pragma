import { createContext } from 'react';
import { CatsState } from './Interfaces';

export type CatsContextProps = {
    catsState : CatsState,
    getCats : () => void
}

const CatsContext = createContext<CatsContextProps>({} as CatsContextProps);

export default CatsContext;