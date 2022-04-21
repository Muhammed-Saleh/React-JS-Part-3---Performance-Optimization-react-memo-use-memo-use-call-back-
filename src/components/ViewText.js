import React from 'react';
import Text from './Text';

const ViewText = ({ text, addAge }) => {
  console.log('view text component');

  const apiConnect = () => {
    for (let i = 0; i <= 500_000_000; i++) {}
    console.log('view text component');
  };

  apiConnect();

  return (
    <div className='box'>
      <button onClick={addAge}>Add Age</button>
      <p>the included text:</p>
      <Text>{text.name}</Text>
    </div>
  );
};

export default React.memo(ViewText);
