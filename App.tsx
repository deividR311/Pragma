import React from 'react';
import CatsContextState from './src/contexts/cat/CatState';
import { Cats } from './src/screens/Screens';

const App = () => {
  return (
    <CatsContextState>
      <Cats />
    </CatsContextState>
  )
}

export default App;