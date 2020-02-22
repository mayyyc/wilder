import React, { useState, useEffect } from "react";
import axios from "axios";
import isEmpty from "lodash/isEmpty";
import { Cards } from "./Cards";
import styled from "styled-components";
import { Loading } from "./Loading";
import { Nothing } from "./Nothing";
import Chance from "chance";
const chance = new Chance();

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 850px;
  max-width: 450px;
  margin: auto;
  background-color: #f2f2f2;
  position: relative;
`;
const Header = styled.div`
  background-color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;
const Content = styled.div`
  height: calc(100% - 58px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

if ("geolocation" in navigator) {
  console.log("geolocation is available ");
} else {
  console.log("geolocation is not available ");
}
const pageSize = 5;
const App: React.FC = () => {
  const [animals, setAnimals] = useState(undefined);
  const [viewedAnimals, setViewedAnimals] = useState(0);
  const [latLong, setLatLong] = useState({
    lat: -31.0,
    long: 149.0
  });
  const [isFetching, setIsFetching] = useState(false);
  const getAnimals = (lat, long, viewed) => {
    setIsFetching(true);
    axios
      .get(
        `https://biocache-ws.ala.org.au/ws/occurrences/search.json?q=*%3A*&fq=class%3A%22Mammalia%22&fq=family%3A%22Macropodidae%22&lat=${lat}&lon=${long}&radius=100&fq=multimedia:Image&facet=false&pageSize=${pageSize}&start=${viewed}&sort=identification_qualifier_s&dir=asc`
      )
      .then(res => {
        setIsFetching(false);
        setAnimals(res.data.occurrences);
        setViewedAnimals(prev => prev + pageSize);
        // console.log("res.data.occurrences :", res.data.occurrences);
      });
  };
  const handleRandomLocation = () => {
    const randomLat = chance.floating({ min: -34, max: -33 });
    const randomLong = chance.floating({ min: 148, max: 150 });
    setViewedAnimals(0);
    setLatLong({
      lat: randomLat,
      long: randomLong
    });
    getAnimals(randomLat, randomLong, 0);
  };
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(position => {
    //   setLatLong({
    //     lat: position.coords.latitude,
    //     long: position.coords.longitude
    //   });
    //   getAnimals(position.coords.latitude, position.coords.longitude, viewedAnimals);
    // });
    handleRandomLocation();
  }, []);
  return (
    <Container>
      <Header>
        <img width="80" src="/wilder_logo.png" alt="Wilder Logo" />
      </Header>
      <Content>
        {!animals || isFetching ? (
          <Loading />
        ) : isEmpty(animals) ? (
          <Nothing onClickRandomLocation={handleRandomLocation} />
        ) : (
          <Cards
            animals={animals}
            onFinished={() =>
              getAnimals(latLong.lat, latLong.long, viewedAnimals)
            }
            latLong={latLong}
          />
        )}
      </Content>
    </Container>
  );
};

export default App;
