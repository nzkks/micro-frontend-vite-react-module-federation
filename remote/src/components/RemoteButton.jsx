import { useState } from 'react';

export default function RemoteButton() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count => count + 1)}>Click me {count}</button>;
}
