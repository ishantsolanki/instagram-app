import Image from 'next/image'
import c from './NoProducts.module.css'

const NoProducts = ({ onClearFilters }) => (
  <div className={c.noProduct}>
    <Image src="/beer-spill.jpeg" width="300" height="300" alt="No beers" />
    <div>{'No beers for you :('}</div>
    <hr />
    <div className={c.clearFilterHint}>Try clearing all filters?</div>
    <button onClick={onClearFilters}>Clear filters</button>
  </div>
)

export default NoProducts
