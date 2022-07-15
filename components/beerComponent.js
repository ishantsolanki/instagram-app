import {
  beerDisplay,
  beerImage,
  imageContainer,
} from './beerComponent.module.css'

const BeerComponent = ({ beer }) => {
  return (
    <div className={beerDisplay}>
      <div className={imageContainer}>
        <img
          className={beerImage}
          src={beer.image_url}
          alt={beer.name}
          height="100%"
        />
      </div>
      <div>{beer.name}</div>
      <button>Buy</button>
    </div>
  )
}

export default BeerComponent
