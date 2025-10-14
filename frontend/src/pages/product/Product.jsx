import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../../components/productDisplay/ProductDisplay.jsx';
import BreakCrum from '../../components/breakCrum/BreakCrum';
import DescriptionBox from '../../components/descriptionBox/DescriptionBox.jsx';
import RelatedProduct from '../../components/relatedProduct/RelatedProduct.jsx';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <BreakCrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product
