import { tables } from './data';
import DatabaseLevel from './DatabaseLevel';

const App = () => {
  return (
    <div>
      {tables.slice(1, 4).map((table, index) => {
        return <DatabaseLevel table={table} key={index} index={index} />;
      })}
    </div>
  );
};

export default App;
