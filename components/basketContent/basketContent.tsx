import { useContext, useMemo } from 'react'
import c from './basketContent.module.css'
import BasketContext from '../../context/basket'
import useBoolean from '../../hooks/useBoolean'
import capture, { TYPES } from '../../analytics/capture'
import Link from 'next/link'
import { BasketInterface } from '../../types/basket'

const BasketContent: React.FC = () => {
  const [basket] = useContext(BasketContext)
  const [areProductsBought, [buyProducts]] = useBoolean(false)

  const basketItemsForBilling = useMemo(() => {
    const itemsForBilling = new Map<string, BasketInterface>()

    basket.forEach((basketItem) => {
      // group items and calculate quantity for each
      const existingItem = itemsForBilling.get(basketItem.id)
      if (existingItem) {
        itemsForBilling.set(basketItem.id, {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        })
      } else {
        itemsForBilling.set(basketItem.id, {
          id: basketItem.id,
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
      <Link href="/">
        <button className={c.backButton}>back</button>
      </Link>
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
            {!!basketItemsForBilling.length && (
              <button
                className={c.buyButton}
                onClick={() => {
                  buyProducts()
                  capture(TYPES.CLICK, { type: 'Buy products' })
                }}
              >
                Buy
              </button>
            )}
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
