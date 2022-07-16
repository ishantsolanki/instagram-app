import c from './navigation.module.css'

const Navigation = ({ productIndex, totalProducts, setProductIndex }) => {
  return (
    <div className={c.navigation}>
      <button
        className={c.navigationButton}
        disabled={productIndex === 0}
        onClick={() =>
          productIndex >= 0 &&
          setProductIndex((productIndex) => productIndex - 1)
        }
      >
        {'<<'}
      </button>
      <button
        className={c.navigationButton}
        disabled={productIndex === totalProducts - 1}
        onClick={() =>
          productIndex < totalProducts &&
          setProductIndex((productIndex) => productIndex + 1)
        }
      >
        {'>>'}
      </button>
    </div>
  )
}
export default Navigation
