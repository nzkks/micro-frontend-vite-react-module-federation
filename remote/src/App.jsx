import useCount from './store';
import './App.css';
import RemoteButton from './components/RemoteButton';

function App() {
  const [count, setCount] = useCount();

  return (
    <>
      <h1>Remote React application</h1>
      <RemoteButton />
      <div className="card">
        {/* Since both RemoteButton component and the normal html button below uses the same store, 
        clicking either one updates the store and gets the latest value to show in both buttons */}
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
