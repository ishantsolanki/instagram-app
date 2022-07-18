import {
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import getProducts from '../api/products'
import Product from '../components/product/product'
import Sidepane from '../components/sidepane/sidepane'
import FilterContext from '../context/filter'
import ScrollPane from '../components/product/scrollpane/scrollpane'
import FilterContent from '../components/filterContent/filterContent'
import useBoolean from '../hooks/useBoolean'
import BasketContext from '../context/basket'
import capture, { TYPES } from '../analytics/capture'

import c from './index.module.css'
import Link from 'next/link'
import NoProducts from '../components/noProducts/noProducts'
import { ProductInterface } from '../types/product'
import { FilterType } from '../types/filter'

const IndexPage: React.FC = () => {
  const [products, setProducts] = useState<ProductInterface[]>([])
  const [isFilterOpen, [openFilters, closeFilters]] = useBoolean(false)
  const [filterValues, setFilterValues] = useContext(FilterContext)
  const [basket] = useContext(BasketContext)
  const [page, setPage] = useState(1)

  const scrollEndCallback = useCallback(() => {
    // callback event for when the infiniteScroll event is triggered
    if (products.length / 25 === page) {
      setPage((currentPage) => currentPage + 1)
    }
  }, [page, products.length])

  useEffect(() => {
    const fetchProducts = async () => {
      const productsResult = await getProducts(filterValues, page)
      if (products.length / 25 === page - 1) {
        setProducts([...products, ...productsResult])
      } else {
        setProducts(productsResult)
      }
    }

    fetchProducts()
    // Excluded products from the dependency as it will cause an infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setProducts, filterValues, page])

  return (
    <div className={c.main}>
      <h3 className={c.heading}>Beers</h3>
      {!!products?.length && (
        <section>
          <div className={c.productContent}>
            <ScrollPane scrollEndCallback={scrollEndCallback}>
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </ScrollPane>
          </div>
        </section>
      )}
      {!products?.length && (
        <NoProducts
          onClearFilters={() => {
            setFilterValues({})
            setPage(1)
            capture(TYPES.CLICK, { type: 'Clear filter values' })
          }}
        />
      )}
      <button
        className={c.filterButton}
        onClick={() => {
          openFilters()
          capture(TYPES.CLICK, { type: 'Open filters' })
        }}
      >
        filter
      </button>
      <Link href="/basket">
        <button className={c.basketButton}>
          basket <span className={c.basketCount}>({basket.length})</span>
        </button>
      </Link>
      <Sidepane
        isOpen={isFilterOpen}
        closeHandler={() => {
          closeFilters()
          capture(TYPES.CLICK, { type: 'Close filters' })
        }}
      >
        <FilterContent
          closeSidepaneHandler={() => {
            closeFilters()
            capture(TYPES.CLICK, { type: 'Close filters' })
          }}
          setFilterValues={(args: unknown) => {
            setFilterValues(args as SetStateAction<FilterType>)
            setPage(1)
          }}
        />
      </Sidepane>
    </div>
  )
}

export default IndexPage
