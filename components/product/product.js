import { useContext, useMemo } from 'react'
import BasketContext from '../../context/basket'
import useDwellTimeLog from '../../hooks/useDwellTimeLog'
import c from './product.module.css'
import ProductImage from './productImage'
import capture, { captureDwellTime, TYPES } from '../../analytics/capture'

const Product = ({ product }) => {
  const [basket, dispatch] = useContext(BasketContext)
  const [setRef] = useDwellTimeLog(
    captureDwellTime({ productId: product.id, name: 'Product viewed' })
  )
  const inBasketCount = useMemo(() => {
    return basket.filter((basketItem) => basketItem.id === product.id).length
  }, [basket, product.id])
  return (
    <div className={c.productDisplay} ref={setRef}>
      <div className={c.imageContainer}>
        <ProductImage
          className={c.productImage}
          imageUrl={product.image_url}
          altText={product.name}
        />
      </div>
      <div className={c.productName}>{product.name}</div>
      <button
        onClick={() => {
          dispatch({ type: 'ADD', payload: product })
          capture(TYPES.CLICK, { name: 'Buy product', productId: product.id })
        }}
      >
        Buy for £{product.price}
      </button>
      {!!inBasketCount && (
        <div className={c.inBasketCountText}>({inBasketCount} in basket)</div>
      )}
    </div>
  )
}

export default Product
