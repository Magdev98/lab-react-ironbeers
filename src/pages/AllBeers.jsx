import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllBeers = () => {
  const [beers, setBeers] = useState([]);
  const url = "https://ih-beers-api2.herokuapp.com/beers";

  const fetchBeers = async () => {
    try {
      const raw = await fetch(url);
      const res = await raw.json();
      console.log(res);
      setBeers(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div>
      AllBeers
      {beers.map((beer) => {
        return (
          <div className="allBeersPage">
            <div>
              <img height={150} src={beer.image_url} alt="" />
            </div>
            <div>
              <Link to={`/beers/` + beer._id}>
                <h2>{beer.name}</h2>
              </Link>
              <p>{beer.tagline}</p>
              <p>Created by : {beer.contributed_by}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllBeers;
