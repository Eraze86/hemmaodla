import { Outlet } from "react-router-dom";
import { Nav } from "./styled/header";
import headerImg from "../Img/balkong1.jpg";
import { ImgHeader } from "./styled/img";
import { NavLink } from "./styled/links";
import { NameDiv, WeatherDiv } from "./styled/div";
import { useEffect, useState } from "react";
import { Main } from "./styled/main";
import { IWeather } from "../interface/Iwaether";
import { getEnvironmentData } from "worker_threads";

export function Layout() {
  const [latitud, setLatitud] = useState(0);
  const [longitud, setLongitud] = useState(0);
  const [datan, setDatan] = useState<IWeather>({
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: ""
  });

  //hämta position med longitud och latitud, för att se var man är.
  useEffect(() => {
    const getData = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          setLatitud(lat);
          setLongitud(long);
          //hämta api med väder. longitud och latitud för att se vädert på den platsen. använd metric systemet
          fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=" + latitud + "&lon=" + longitud + "&units=metric&appid=6451acafe440344655d98f50d275c7f2"
          )
            .then((response) => response.json())
            .then((data) => {
              setDatan(data);
              console.log("datan:", data);
            });
        });
      }
    }
    getData()
    //vänta på long och lat
  }, [latitud, longitud]);
  console.log("när kommer det", longitud, latitud)


  return (
    <>
      <header>
        <NameDiv>Hemmaodlat</NameDiv>
        <Nav>
          <NavLink to="/">Hem</NavLink>
          <NavLink to="/contact">Kontakta</NavLink>
        </Nav>
        <WeatherDiv>
          {datan.name}<br />
          Temperatur: {datan.main.temp} C
          <br />
          Luftuktighet: {datan.main.humidity} %

        </WeatherDiv>
        <ImgHeader src={headerImg}></ImgHeader>
      </header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
