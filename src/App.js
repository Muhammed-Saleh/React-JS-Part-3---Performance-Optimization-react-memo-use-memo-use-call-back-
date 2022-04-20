import { useState, useMemo, useCallback } from 'react';
import ViewCounter from './components/ViewCounter';
import ViewText from './components/ViewText';

function App() {
  const [count, setCount] = useState(0);

  const counterHandler = () => {
    setCount((prev) => prev + 1);
  };


  return (
    <div className='App'>
      <ViewCounter num={count} increaseCount={counterHandler} />
      <ViewText />
    </div>
  );

  //react dom run x2
}

export default App;
