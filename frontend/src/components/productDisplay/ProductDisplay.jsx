import React, { useContext, useState } from 'react';
import classes from './ProductDisplay.module.css';
import star_icon from '../../components/Assets/Frontend_Assets/star_icon.png';
import star_dull_icon from '../../components/Assets/Frontend_Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = ({ product }) => {
  const [mainImage, setMainImage] = useState(product?.image);
  const [selectedSize, setSelectedSize] = useState(null);

  const { addToCart, removeFromCart } = useContext(ShopContext);

  if (!product) return null;

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className={classes.productDisplay}>
      {/* Left side: Product images */}
      <div className={classes.productDisplay_left}>
        <div className={classes.productDisplay_image_list}>
          {Array(4)
            .fill(product.image)
            .map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.name}
                onClick={() => setMainImage(img)}
              />
            ))}
        </div>

        <div className={classes.productDisplay_img}>
          <img
            className={classes.productDisplay_main_image}
            src={mainImage}
            alt={product.name}
          />
        </div>
      </div>

      {/* Right side: Product details */}
      <div className={classes.productDisplay_right}>
        <h1>{product.name}</h1>

        <div className={classes.productDisplay_right_star}>
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_dull_icon} alt="star dull icon" />
          <p>(122)</p>
        </div>

        <p className={classes.productDisplay_right_price}>
          <span>${product.old_price}</span> ${product.new_price}
        </p>

        <p className={classes.productDisplay_right_desc}>
          A great {product.name} for everyday use. High-quality material and design.
        </p>

        <div className={classes.productDisplay_selectSize}>
          <h2>Select Size</h2>
          <div className={classes.sizes}>
            {sizes.map((size) => (
              <button
                key={size}
                className={selectedSize === size ? classes.selected : ''}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          className={classes.add_to_cart}
          onClick={() => {
            if (!selectedSize) {
              alert('Please select a size before adding to cart!');
              return;
            }
            addToCart(product.id);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
