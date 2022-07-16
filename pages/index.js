import { useEffect, useState } from 'react'
import getProducts from '../api/products'
import Product from '../components/product'
import Sidepane from '../components/sidepane/sidepane'
import {
  main,
  heading,
  productContent,
  navigation,
  navigationButton,
  filterButton,
} from './index.module.css'

export default function IndexPage() {
  const [products, setProducts] = useState([])
  const [productIndex, setProductIndex] = useState(0)
  const [isSidepaneOpen, setIsSidepaneOpen] = useState(false);
  const openSidePane = () => setIsSidepaneOpen(true);
  const closeSidePane = () => setIsSidepaneOpen(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsResult = await getProducts()
      setProducts(productsResult)
    }

    fetchProducts()
  }, [setProducts])

  return (
    <div className={main}>
      <h3 className={heading}>Beers</h3>
      {!!products?.length && (
        <section>
          <div className={productContent}>
            <Product product={products[productIndex]} />
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
      <button className={filterButton} onClick={openSidePane}>filter</button>
      <Sidepane isOpen={isSidepaneOpen} closeSidepanHandler={closeSidePane} />
    </div>
  )
}
