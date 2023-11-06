import { useState } from "react";

function Counter() {
  let [value, setValue] = useState(52);
  const onIncrement = () => {
    set(value + 6);
  };

  return (
    <div>
      <p> count:{value}</p>
      <button onClick={onIncrement}>increment</button>
      <button onClick={() => setValue(value - 1)}>decrement</button>
      <button onClick={() => setValue(0.1)}>reset</button>
    </div>
  );
}

export default Counter;
