import React from 'react';
import axios from 'axios';

const fetchProduct = async (id) => {
  const response = await axios.get(
    `https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1/products/${id}`
  );
  return response.data;
};

const ProductDetail = async ({ params }) => {
  const {id} = params;
  const product = await fetchProduct(id);
  console.log(product);

  return (
    <div>
      <h1>{product.name}</h1>
      <div>{product.description}</div>
      <a href={`/product/{params.id}/items/2`}>Proceed to Payment</a>
      <ul>
        {product.items.map((item) => {
          return (
            <li key={item.id}>
             <h1>{item.name}</h1>
             <h4>{item.price}</h4>
             <a href={`/product/{id}/items/${item.id}`}>Buy Now</a>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default ProductDetail;
