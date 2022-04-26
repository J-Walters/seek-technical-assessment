import { tables } from './data';
import { useState } from 'react';

const FinalLevel = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={{ paddingLeft: 40 }}>
      <p
        style={isActive ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}
        onClick={() => setIsActive(!isActive)}
      >
        Tables
      </p>
      {isActive ? (
        <div style={{ paddingLeft: 20 }}>
          <p>{tables[4].name}</p>

          <p>{tables[5].name}</p>
        </div>
      ) : null}
    </div>
  );
};

export default FinalLevel;
