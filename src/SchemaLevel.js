import { useState } from 'react';
import { tables } from './data';
import FinalLevel from './FinalLevel';

const SchemaLevel = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={{ paddingLeft: 20 }}>
      <p>{tables[3].schema_name}</p>

      <p
        style={isActive ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}
        onClick={() => setIsActive(!isActive)}
      >
        {tables[4].schema_name}
      </p>
      {isActive ? <FinalLevel tables={tables} /> : null}
    </div>
  );
};

export default SchemaLevel;
