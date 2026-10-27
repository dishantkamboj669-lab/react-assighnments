// question no 1
// import React, { useState } from 'react'

// const Liastrendering = () => {
//     const [ Islogin , setIslogin]=useState(false)
//   return (
//     <div style={{justifySelf:'center',textAlign : 'center',border:'5px solid red',height:200,width:200}}>

//       <h1>Login status</h1>
      
//       <h2>{Islogin? 'welcome user !':'please login'}</h2>

//       <button onClick={()=>setIslogin(!Islogin)}>{Islogin?'logout':'login'}</button>
//     </div>
//   )
// }

// export default Liastrendering






// question no 2


// import React, { useState } from 'react'

// const Liastrendering = () => {
//   const [show, setshow]=useState(false)
//   return (
//     <div>
//       <button onClick={()=>{setshow(!show)}}>{show?'hide message':'show message'}</button>
//       {show && <p> hello react</p>}
//     </div>
//   )
// }

// export default Liastrendering



// qusestion no 3

// import React, { useState } from 'react'

// const Liastrendering = () => {
//   const [marks, setMarks] = useState(0)
//   const submit = (e) => e.preventDefault()
//   return (
//     <div>
//       <h1>students marks</h1>
//       <form onSubmit={submit}>
//         <input
//           type="number"
//           placeholder="enter the obtained marks"
//           value={marks}
//           onChange={(e) => setMarks(Number(e.target.value))}
//         />
//       </form>
//       <h2>{marks>40?'pass':'fail'}</h2>
//     </div>
//   )
// }

// export default Liastrendering

// question no 4

// import React, { useState } from 'react'

// const Liastrendering = () => {
//   const [isLoaded, setIsLoaded] = useState(false)

//   return (
//     <div>
//       <h1>Loading Status</h1>
//       <h2>{isLoaded ? "Data Loaded Successfully!" : "Loading..."}</h2>
//       <button onClick={() => setIsLoaded(true)}>
//         Load Data
//       </button>
//     </div>
//   )
// }

// export default Liastrendering



