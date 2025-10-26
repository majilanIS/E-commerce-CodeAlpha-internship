import React, { useState } from "react";
import classes from "./AddProduct.module.css";
import upload_area_image from "../../Assets/Admin_Assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    category: "women",
    old_price: "",
    new_price: "",
  });

  // Handle image selection
  const imageHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // Handle input change
  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const addProduct = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("⚠️ Please select an image before submitting.");
      return;
    }

    try {
      // Step 1: Upload image
      const formData = new FormData();
      formData.append("product", image);

      const uploadResponse = await fetch("http://localhost:8888/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadResponse.json();

      if (!uploadResponse.ok) {
        throw new Error("Image upload failed");
      }

      const imageUrl = uploadData.imageUrl || `/upload/images/${uploadData.filename}`;

      // Step 2: Send product data to MongoDB
      const productResponse = await fetch("http://localhost:8888/api/addproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: productDetails.name,
          old_price: productDetails.old_price,
          new_price: productDetails.new_price,
          category: productDetails.category,
          image: imageUrl, // Full image URL
        }),
      });

      const productData = await productResponse.json();

      if (!productResponse.ok) {
        throw new Error("Failed to save product to MongoDB");
      }

      console.log("✅ Product added:", productData);
      alert("✅ Product uploaded successfully!");

      // Reset form
      setImage(null);
      setProductDetails({
        name: "",
        category: "women",
        old_price: "",
        new_price: "",
      });
    } catch (error) {
      console.error("❌ Error uploading product:", error);
      alert("❌ Upload failed. Check console for details.");
    }
  };

  return (
    <div className={classes.addproduct}>
      {/* Product Title */}
      <div className={classes.addproduct_fields}>
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>

      {/* Price Fields */}
      <div className={classes.addproduct_fields_prices}>
        <div className={classes.addproduct_fields}>
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="number"
            name="old_price"
            placeholder="Type here"
          />
        </div>

        <div className={classes.addproduct_fields}>
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="number"
            name="new_price"
            placeholder="Type here"
          />
        </div>
      </div>

      {/* Category */}
      <div className={classes.addproduct_fields}>
        <p>Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className={classes.addproduct_fields_selector}
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      {/* Image Upload */}
      <div className={classes.addproduct_fields}>
        <label htmlFor="file-input" className={classes.upload_label}>
          <img
            src={image ? URL.createObjectURL(image) : upload_area_image}
            alt="Upload preview"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="product"
          id="file-input"
          hidden
        />
      </div>

      <button onClick={addProduct} className={classes.addproduct_btn}>
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
