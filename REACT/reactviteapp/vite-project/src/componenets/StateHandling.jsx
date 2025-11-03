import React, { useState } from 'react';

function StateHandling() {
  const [count, setCount] = useState(20);

  function increaseValue() {
    alert("heluuuuu!");
    setCount(count + 10);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter value = {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Value</button>
      <button onClick={() => setCount(count - 1)}>Decrement Value</button>
      <button onClick={increaseValue}>Increase by 10</button>
    </div>
  );
}

export default StateHandling;
