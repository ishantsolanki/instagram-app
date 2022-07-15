import { useEffect, useState } from 'react'
import getProducts from '../api/products'
import BeerComponent from '../components/beerComponent'
import {
  center,
  productContent,
  navigation,
  navigationButton,
} from './index.module.css'

export default function IndexPage() {
  const [products, setProducts] = useState([])
  let [productIndex, setProductIndex] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      const productsResult = await getProducts()
      setProducts(productsResult)
    }

    fetchProducts()
  }, [setProducts])

  return (
    <div>
      <h1 className={center}>Beers</h1>
      {!!products?.length && (
        <section>
          <div className={productContent}>
            <BeerComponent beer={products[productIndex]} />
          </div>
          <div className={navigation}>
            <button
              className={navigationButton}
              disabled={productIndex === 0}
              onClick={() =>
                productIndex >= 0 &&
                setProductIndex((productIndex) => productIndex - 1)
              }
            >
              {'<<'} Previous
            </button>
            <button
              className={navigationButton}
              disabled={productIndex === products.length - 1}
              onClick={() =>
                productIndex < products.length &&
                setProductIndex((productIndex) => productIndex + 1)
              }
            >
              Next {'>>'}
            </button>
          </div>
        </section>
      )}
      {!products?.length && <div> No beers for you :(</div>}
    </div>
  )
}
