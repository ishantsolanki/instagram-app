import { useContext, useMemo } from 'react'
import c from './basketContent.module.css'
import BasketContext from '../../context/basket'
import useBoolean from '../../hooks/useBoolean'

const BasketContent = () => {
  const [basket] = useContext(BasketContext)
  const [areProductsBought, [buyProducts]] = useBoolean(false)

  const basketItemsForBilling = useMemo(() => {
    const itemsForBilling = new Map()

    basket.forEach((basketItem) => {
      const existingItem = itemsForBilling.get(basketItem.id)
      if (existingItem) {
        itemsForBilling.set(basketItem.id, {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        })
      } else {
        itemsForBilling.set(basketItem.id, {
          name: basketItem.name,
          quantity: 1,
          price: basketItem.price,
        })
      }
    })

    return Object.values(Object.fromEntries(itemsForBilling))
  }, [basket])
  return (
    <>
      <h5 className={c.heading}>Basket</h5>
      <div className={c.container}>
        {!areProductsBought && (
          <>
            <div className={c.row}>
              <div className={c.rowName}>Name</div>
              <div className={c.rowQuantity}>Quantity</div>
              <div className={c.rowPrice}>Price</div>
            </div>
            {basketItemsForBilling.map((basketItem, index) => (
              <div className={c.row} key={`${basketItem.id}-${index}`}>
                <div className={c.rowName}>{basketItem.name}</div>
                <div className={c.rowQuantity}>{basketItem.quantity}</div>
                <div className={c.rowPrice}>£{basketItem.price}</div>
              </div>
            ))}
            <hr />
            <div className={c.total}>
              Total:
              <span>
                £{basket.reduce((acc, basketItem) => acc + basketItem.price, 0)}
              </span>
            </div>
            <button className={c.buyButton} onClick={buyProducts}>
              Buy
            </button>
          </>
        )}

        {areProductsBought && (
          <div className={c.purchaseConfirmed}>
            Purchase confirmed. Your stuff will be with you soon...!!!
          </div>
        )}
      </div>
    </>
  )
}

export default BasketContent
