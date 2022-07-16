import c from './product.module.css'

const Product = ({ product }) => {
  return (
    <div className={c.productDisplay}>
      <div className={c.imageContainer}>
        <img
          className={c.productImage}
          src={product.image_url}
          alt={product.name}
          height="100%"
        />
      </div>
      <div className={c.productName}>{product.name}</div>
      <button>Buy</button>
    </div>
  )
}

export default Product
