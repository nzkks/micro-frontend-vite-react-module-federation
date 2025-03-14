import { useState } from 'react';

export default function RemoteButton() {
  const [count, setCount] = useState(0);

  return (
    <button className="remote-button" onClick={() => setCount(count => count + 1)}>
      Click me {count}
    </button>
  );
}
