import React from 'react';
import Text from './Text';

const ViewText = ({ text }) => {
  console.log('view text component');

  return (
    <div className='box'>
      <p>the included text:</p>
      <Text>{text}</Text>
    </div>
  );
};

export default React.memo(ViewText);
