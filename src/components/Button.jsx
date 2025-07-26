import { useState } from 'react'

export function Button(props){
      const [count, setCount] = useState(0);
      console.log("render---->");
    return (<div> <button onClick={() => setCount((count) => count + 1)} style={{background: "red"}}>
    count is {count}
    <div>{props.name}</div>
    <div>{props?.data?.a}</div>
  <div>{props?.data?.b}</div>
  </button></div>)
}


export function Text(){
    const [count, setCount] = useState(0);
    console.log("render---->");
  return (<div> <button onClick={() => setCount((count) => count + 1)} style={{background: "red"}}>
  count is {count}
</button></div>)
}

