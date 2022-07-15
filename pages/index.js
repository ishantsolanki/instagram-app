import { useEffect, useState } from "react";
import getBeers from "../api/beers";
import BeerComponent from "../components/beerComponent";
import {
  center,
  productContent,
  navigation,
  navigationButton
} from "./index.module.css";

export default function IndexPage() {
  const [beers, setBeers] = useState([]);
  let [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    const fetchBeers = async () => {
      const beersResult = await getBeers();
      setBeers(beersResult);
    };

    fetchBeers();
  }, [setBeers]);

  return (
    <div>
      <h1 className={center}>Beers</h1>
      {!!beers?.length && (
        <section>
          <div className={productContent}>
            <BeerComponent beer={beers[productIndex]} />
          </div>
          <div className={navigation}>
            <button
              className={navigationButton}
              disabled={productIndex === 0}
              onClick={() =>
                productIndex >= 0 &&
                setProductIndex((productIndex) => productIndex - 1)
              }
            >
              {"<<"} Previous
            </button>
            <button
              className={navigationButton}
              disabled={productIndex === beers.length - 1}
              onClick={() =>
                productIndex < beers.length &&
                setProductIndex((productIndex) => productIndex + 1)
              }
            >
              Next {">>"}
            </button>
          </div>
        </section>
      )}
      {!beers?.length && <div> No beers for you :(</div>}
    </div>
  );
}
