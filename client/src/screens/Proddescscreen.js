import React from 'react'
import products from '../Products';
import { useParams } from 'react-router-dom';
export default function Proddescscreen({match}) {
  const prodid = match.params.id;
  return (
    <div>
        <h1>Product description</h1>
        <h1>Product id is {prodid}</h1>
    </div>
  )
}
