import { useEffect, useState } from "react";

export function Counter (){
const [count, setCount] = useState(0);
const [count1, setCount1] = useState(0);

useEffect(()=>{
    console.log("useEffect");
    return ()=>{
        console.log("component will un mount");
    }
},[]);

useEffect(()=>{
    console.log("useEffect");
},[count]);

useEffect(()=>{
    console.log("useEffect1");
},[count1]);
    const increaseCount = () =>{
        setCount(count+1);
    }
      const increaseCount1 = () =>{
        setCount1(count1+1);
    }
    return (
        <div>
            <div onClick={increaseCount}>{count}</div>
            <div onClick={increaseCount1}>{count1}</div>
        </div>
        
    );
}