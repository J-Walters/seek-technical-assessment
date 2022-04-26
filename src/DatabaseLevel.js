import { useState } from 'react';
import SchemaLevel from './SchemaLevel';
import { FaDatabase } from 'react-icons/fa';

const Database = ({ table, index }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <>
      <div
        style={
          isActive && selectedElement === index
            ? { fontWeight: 'bold' }
            : { fontWeight: 'normal' }
        }
        onClick={() => {
          setIsActive(!isActive);
          setSelectedElement(index);
        }}
      >
        <FaDatabase />
        {table.db_name}
      </div>
      <div>{isActive ? <SchemaLevel /> : null}</div>
    </>
  );
};

export default Database;
