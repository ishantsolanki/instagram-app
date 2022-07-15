import {
  productDisplay,
  productImage,
  imageContainer,
} from './product.module.css'

const Product = ({ product }) => {
  return (
    <div className={productDisplay}>
      <div className={imageContainer}>
        <img
          className={productImage}
          src={product.image_url}
          alt={product.name}
          height="100%"
        />
      </div>
      <div>{product.name}</div>
      <button>Buy</button>
    </div>
  )
}

export default Product
