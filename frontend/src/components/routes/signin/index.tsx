import { useState } from 'react';

export default function SignIn() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p className="text-3xl font-bold underline">SignIn page</p>
      <p className="counter">{counter}</p>
      <button onClick={() => setCounter(prev => prev + 1)}>Click me</button>
    </div>
  );
}
