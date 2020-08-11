import React ,{useState,useEffect} from 'react'

const CounterHook : React.FC = ()=>{
    const [count,setCount]= useState(0)

    return (
        <div>
                <button onClick={ ()=> setCount(count+2)}>Click me {count }</button>
        </div>
    )
}
export default CounterHook

// const [count, setCount] = useState(0)
// return (
//     <div>
//         <button onClick = { ()=>setCount(count+1)}>Hooks Counter {count}</button>
//     </div>
// )