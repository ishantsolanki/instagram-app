import { useEffect, useState } from 'react'
import getProducts from '../api/products'
import Product from '../components/product/product'
import Sidepane from '../components/sidepane/sidepane'
import Navigation from '../components/navigation/navigation'
import c from './index.module.css'

export default function IndexPage() {
  const [products, setProducts] = useState([])
  const [productIndex, setProductIndex] = useState(0)
  const [isSidepaneOpen, setIsSidepaneOpen] = useState(false)
  const openSidePane = () => setIsSidepaneOpen(true)
  const closeSidePane = () => setIsSidepaneOpen(false)

  useEffect(() => {
    const fetchProducts = async () => {
      const productsResult = await getProducts()
      setProducts(productsResult)
    }

    fetchProducts()
  }, [setProducts])

  return (
    <div className={c.main}>
      <h3 className={c.heading}>Beers</h3>
      {!!products?.length && (
        <section>
          <div className={c.productContent}>
            <Product product={products[productIndex]} />
          </div>
          <Navigation
            productIndex={productIndex}
            totalProducts={products.length}
            setProductIndex={setProductIndex}
          />
        </section>
      )}
      {!products?.length && <div>{'No beers for you :('}</div>}
      <button className={c.filterButton} onClick={openSidePane}>
        filter
      </button>
      <Sidepane isOpen={isSidepaneOpen} closeSidepanHandler={closeSidePane} />
    </div>
  )
}
