import React, { useState, useEffect } from 'react';
import Sorting from './Sorting'; // Import the Sorting component
//import FilterModal from './FilterModal';
import Filter from './Filter';

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  //definining filtered products state
  const [filteredProducts, setFilteredProducts] = useState([]);
  //adding cart state
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      setProducts(result);
      setFilteredProducts(result); //initialize filtered products with all products
    } catch (err) {
      console.error(err);
    }
  };



  

  //function to update the filtered products based on filter criteria

  const updateFilteredProducts = (filtered) => {
    setFilteredProducts(filtered);
  }
  console.log('Filtered Products:', filteredProducts); // Debugging: Log filtered products


  return (
    <div>
      <div className="container">
        <div className="navbar">
      
          {/* Adding sorting component */}
          <Sorting products={filteredProducts} setProducts={setFilteredProducts} />

          {/* Adding filtering component */}
          <Filter products={products} setFilteredProducts={updateFilteredProducts} />
          
        </div>


        <div id="all-products-container">
        {filteredProducts.length === 0 ? (
            <p>No matching products found.</p>
          ) : (filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} width="250" height="300" alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <p>{product.category}</p>
              <button className="description-button" data-id={product.description}>
                View Description
              </button>
              <button className="add-button" data-id={product.id}>
                Add to Cart
              </button>
            </div>
          )
          ))}
        </div>
      </div>
    </div>
  );
}

