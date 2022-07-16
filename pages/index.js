import { useContext, useEffect, useState } from 'react'
import getProducts from '../api/products'
import Product from '../components/product/product'
import Sidepane from '../components/sidepane/sidepane'
import Navigation from '../components/navigation/navigation'

import c from './index.module.css'
import FilterContext from '../context/filter'

export default function IndexPage() {
  const [products, setProducts] = useState([])
  const [productIndex, setProductIndex] = useState(0)
  const [isSidepaneOpen, setIsSidepaneOpen] = useState(false)
  const openSidePane = () => setIsSidepaneOpen(true)
  const closeSidePane = () => setIsSidepaneOpen(false)
  const [filterValues, setFilterValues] = useContext(FilterContext)

  useEffect(() => {
    const fetchProducts = async () => {
      const productsResult = await getProducts(filterValues)
      setProducts(productsResult)
    }

    // when refetching products, set the index to 0 again.
    setProductIndex(0)

    fetchProducts()
  }, [setProducts, filterValues])

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
      {!products?.length && (
        <div className={c.noProduct}>
          {'No beers for you :('}
          <div>Try clearing all filters?</div>
          <button onClick={() => setFilterValues([])}>Clear filters</button>
        </div>
      )}
      <button className={c.filterButton} onClick={openSidePane}>
        filter
      </button>
      <Sidepane
        isOpen={isSidepaneOpen}
        closeSidepaneHandler={closeSidePane}
        setFilterValues={setFilterValues}
      />
    </div>
  )
}
