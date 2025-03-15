import { lazy, Suspense } from 'react';

import useStore from 'remoteApp/store';
import './App.css';

const RemoteButton = lazy(() => import('remoteApp/RemoteButton'));

function App() {
  const [count, setCount] = useStore();

  return (
    <>
      <h1>Host React application</h1>
      <Suspense>
        <RemoteButton />
      </Suspense>
      <div className="card">
        {/* RemoteButton and the normal html button below recieves the same store */}
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
