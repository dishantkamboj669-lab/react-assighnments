import React, { useEffect, useState } from 'react'

const apiIntegration = () => {

const [count,setcount]=useState(0)
const [user, setUser] = useState([])

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json())
.then(data=>setUser(data))
.catch(err=>console.log(err))

},[])




  return (
    <div style={{justifySelf:'center'}}>
      <h1>count</h1>
      <h2>{count}</h2>
      <button onClick={()=>setcount(count+2)}>change</button>
    {
                user.map((d) => (
                    <div key={d.id}>
                      <h1>{d.name}</h1>
                       
                    </div>
                ))
            }


    </div>
  )
}

export default apiIntegration

