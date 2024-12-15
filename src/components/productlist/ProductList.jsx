import React from 'react';

// Fetch data at build time
export async function getStaticProps() {
  try {
    // Replace with your API endpoint
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

    const products = await res.json(); // Assuming the API returns an array of products
console.log(products,"products")
    return {
      props: {
        products, // Pass the data as a prop
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
        error: error.message,
      },
    };
  }
}

// Main component
const ProductList = ({ products, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );    
};

export default ProductList;
    