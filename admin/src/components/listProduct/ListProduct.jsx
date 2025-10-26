import React, { useState, useEffect } from 'react';
import classes from './ListProduct.module.css';

const ListProduct = () => {
  const [allproduct, setAllproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch all products
  const fetchAllProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8888/api/retrieve-all-product");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Backend returns an array directly (not in { products: [...] })
      if (Array.isArray(data)) {
        setAllproduct(data);
      } else if (Array.isArray(data.products)) {
        setAllproduct(data.products);
      } else {
        setAllproduct([]);
      }
    } catch (err) {
      console.error("❌ Error fetching products:", err);
      setError(err.message || "Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Remove product function
  const removeProduct = async (id) => {
    const originalProducts = [...allproduct];
    setAllproduct(allproduct.filter(product => product._id !== id)); // Optimistic update

    try {
      const response = await fetch(`http://localhost:8888/api/removeproduct/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Failed to remove product');
      }

      // Optional: Re-fetch product list to keep in sync
      await fetchAllProduct();

    } catch (error) {
      console.error("❌ Error removing product:", error);
      alert(`Failed to remove product: ${error.message}`);
      setAllproduct(originalProducts); // revert on failure
    }
  };

  // Fetch products on mount
  useEffect(() => {
    fetchAllProduct();
  }, []);

  // --- Display Logic ---
  if (loading) {
    return <div className={classes.listproduct}>Loading products...</div>;
  }

  if (error) {
    return <div className={classes.listproduct} style={{ color: 'red' }}>Error: {error}</div>;
  }

  if (allproduct.length === 0) {
    return <div className={classes.listproduct}>No products found.</div>;
  }

  return (
    <div className={classes.listproduct}>
      <h1>All Product List</h1>
      <div className={classes.listproduct_main}>
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className={classes.listproduct_allProduct}>
        <hr />
        {allproduct.map((product, i) => (
          <div key={i} className={classes.listproduct_item}>
            <img
              src={product.image}
              alt={product.name}
              className={classes.listproduct_product_icon}
            />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <p
              className={classes.listproduct_remove_icon}
              onClick={() => removeProduct(product.id)} // ✅ use product.id, not _id (your DB uses "id" field)
            >
              🗑️
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
