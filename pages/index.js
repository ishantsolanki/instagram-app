import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import getProducts from '../api/products'
import Product from '../components/product/product'
import Sidepane from '../components/sidepane/sidepane'

import c from './index.module.css'
import FilterContext from '../context/filter'
import ScrollPane from '../components/product/scrollpane/scrollpane'

export default function IndexPage() {
  const [products, setProducts] = useState([])
  const [isSidepaneOpen, setIsSidepaneOpen] = useState(false)
  const openSidePane = () => setIsSidepaneOpen(true)
  const closeSidePane = () => setIsSidepaneOpen(false)
  const [filterValues, setFilterValues] = useContext(FilterContext)

  useEffect(() => {
    const fetchProducts = async () => {
      const productsResult = await getProducts(filterValues)
      setProducts(productsResult)
    }

    fetchProducts()
  }, [setProducts, filterValues])

  return (
    <div className={c.main}>
      <h3 className={c.heading}>Beers</h3>
      {!!products?.length && (
        <section>
          <div className={c.productContent}>
            <ScrollPane>
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </ScrollPane>
          </div>
        </section>
      )}
      {!products?.length && (
        <div className={c.noProduct}>
          <Image
            src="/beer-spill.jpeg"
            width="300"
            height="300"
            alt="No beers"
          />
          <div>{'No beers for you :('}</div>
          <hr />
          <div className={c.clearFilterHint}>Try clearing all filters?</div>
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
