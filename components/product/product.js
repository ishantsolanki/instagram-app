import c from './product.module.css'
import ProductImage from './productImage'

const Product = ({ product }) => {
  return (
    <div className={c.productDisplay}>
      <div className={c.imageContainer}>
        <ProductImage
          className={c.productImage}
          imageUrl={product.image_url}
          altText={product.name}
        />
      </div>
      <div className={c.productName}>{product.name}</div>
      <button>Buy for £{product.price}</button>
    </div>
  )
}

export default Product
