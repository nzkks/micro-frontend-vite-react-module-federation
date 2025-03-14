import useCount from '../store';

export default function RemoteButton() {
  const [count, setCount] = useCount();

  return (
    <button className="remote-button" onClick={() => setCount(count => count + 1)}>
      Click me {count}
    </button>
  );
}
