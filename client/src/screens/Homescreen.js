import React from 'react'
import products from '../Products';
import Products from '../components/Products';
export default function Homescreen() {
  return (
    <div>
        <div className='row justify-content-center'>
            {products.map(product=>{
                return <Products products={product}/>


            })}
        </div>
    </div>
  )
}
