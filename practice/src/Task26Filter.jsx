

// example 1 for practice


// import React, { useState } from 'react'

// const Task26Filter = () => {
    
//       const items = [
//     { id: 1, name: "Milk", price: 20 },
//     { id: 2, name: "Shoes", price: 29 },
//     { id: 3, name: "Bread", price: 15 },
//     { id: 4, name: "Jacket", price: 120 }
//   ];
  
// const cheapItems = items.filter(item => item.price < 30);

//   return (
//     <div>
//         <h1> budget items</h1>
//         <ul>
      
//         {cheapItems.map(item => (
//           <li key={item.id}>
//             {item.name} — ${item.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Task26Filter





// example 2 for price filter



// import React, { useEffect, useState } from 'react'

// export const Task26Filter = () => {

// const [products,setProducts]= useState([])

// useEffect(()=>{  
// fetch('https://dummyjson.com/products')
// .then (res =>res.json())
// .then (data =>setProducts(data.products))
// .catch(error => console.log(error))


// },[])
// const cheapItems = products.filter(products => products.price < 8);

//   return (
//     <div><h1 style={{justifySelf:'center'}}>Task26Filter</h1>


//     {cheapItems.map((d)=>
    
// <ul>
//     <li key={d.id}>
//     {d.title}------{d.price}
    
// </li>

// </ul>
//  )}     
//     </div>
//   )
// }

// export default Task26Filter





// example 3 for assighnment



    
import React, { useEffect, useState } from 'react'

export const Task26Filter = () => {

const [products,setProducts]= useState([])
const [selectedCategory, setSelectedCategory] = useState('all')

useEffect(()=>{  
fetch('https://dummyjson.com/products')
.then (res =>res.json())
.then (data =>setProducts(data.products))
.catch(error => console.log(error))


},[])


const categories = [...new Set(products.map((product) => product.category))]
const filteredProducts = selectedCategory === 'all'
  ? products
  : products.filter((product) => product.category === selectedCategory)
 


  return (
    <div style={{backgroundColor:'#97bbb7'}}>
      <h1 style={{ textAlign: 'center' }}>Task26Filter</h1>

     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, margin: '20px 0' }}>
        <button onClick={() => setSelectedCategory('all')}>
          All
        </button>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',gap: 20,
        }}
      >
        {filteredProducts.map((d) => (
          <div key={d.id} style={{ minHeight: 220, backgroundColor: '#dbdd9c', padding: 20 }}>
            <strong>{d.title}</strong>
            <p>Category: {d.category}</p>
            <p>Price: ${d.price}</p>
            <p>Rating: {d.rating}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Task26Filter

