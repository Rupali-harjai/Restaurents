import { useEffect, useState } from "react";

const User = ({name}) =>{
    const [count,setCount] =useState(0);
    const [count2,setCount2] = useState(2);

    useEffect(() =>{
console.log("useEffect")

const timer = setInterval(() =>{
console.log("hello")
},1000)

// clear interval 
return () =>{
    clearInterval(timer);
}
    },[])

    console.log("render");
    return (
        <div className="user">
             Functional Based
            <h1> Count: {count}</h1>
            <button onClick ={() =>{setCount((count => count +1))}}>Increase</button>
            <h1> Count2: {count2}</h1>
            <h2>Name : {name}</h2>
            <h2>Location: Bangalore</h2>
            <h2>Citizenship : Indian</h2>
        </div>
    )
}

export default User;