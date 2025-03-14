import { useState } from 'react';
import './App.css';
import RemoteButton from './components/RemoteButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Remote React application</h1>
      <RemoteButton />
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
