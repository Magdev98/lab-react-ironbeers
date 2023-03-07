import React, { useEffect, useState } from "react";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState(null);
  const url = "https://ih-beers-api2.herokuapp.com/beers/random";

  useEffect(() => {
    fetch(url)
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        setRandomBeer(response);
      })
      .catch((e) => console.error(e));
  }, []);

  if (!randomBeer) {
    return <div className="Loading">Loading...</div>;
  }

  return (
    <div className="randomBeerPage">
      <div>
        <img height={150} src={randomBeer.image_url} alt="" />
      </div>
      <div>
        <h2>{randomBeer.name}</h2>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>Created by : {randomBeer.contributed_by}</p>
      </div>
    </div>
  );
};

export default RandomBeer;
