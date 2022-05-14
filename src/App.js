import './App.css';
import { Counter } from './context';
import { useContext } from 'react';

function App() {
  const {count,setCount} = useContext(Counter)
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <div className="counter_app">
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h4>{count}</h4>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
      </div>
      
    </div>
  );
}

export default App;
