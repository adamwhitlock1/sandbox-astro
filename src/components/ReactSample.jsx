import React from 'react'
import { getState, setState, subscribe } from "../store";

export const ReactSample = () => {
  const [count, setCount] = React.useState(getState().count);
  const [doubleCount, setDoubleCount] = React.useState(getState().doubleCount);

  function increaseSingleCount() {
    setState({ count: getState().count + 1 });
  }

  function increaseDoubleCount() {
    setState({ doubleCount: getState().doubleCount + 2 });
  }

  subscribe(() => {
    setCount(getState().count);
    setDoubleCount(getState().doubleCount);
  })

  return (
    <div style={{ border: "3px dotted cornflowerblue", padding: '10px', marginBottom: '20px' }}>
      <div>This is React</div>
      <div>Single Count: {count}</div>
      <div>Double Count: {doubleCount}</div>
      <button onClick={increaseSingleCount}>Increase Single Count</button>
      <button onClick={increaseDoubleCount}>Increase Double Count</button>
    </div>
  )
}
