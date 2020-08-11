import React , {useState ,Component} from  'react'

 const Message = ()=>{
     const [count ,setCount]=useState(0)
     
    return(
        <div>
        <p>This is in message component</p>
        <button onClick ={()=>setCount(count+1)}>Count is :  {count}</button>
        </div>
    )
}

export default Message
