import { beerDisplay, beerImage } from "./beerComponent.module.css";

const BeerComponent = ({ beer }) => {
  return (
    <div className={beerDisplay}>
      <img
        className={beerImage}
        src={beer.image_url}
        alt={beer.name}
        height={100}
      />
      <div>{beer.name}</div>
      <button>Buy</button>
    </div>
  );
};

export default BeerComponent;
