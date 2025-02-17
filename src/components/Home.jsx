import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";


const Home = () => {
  return (
    <div>
 <h1>¡Feliz San Valentín! ❤️ Amor de mi vida ❤️</h1>
        <Carousel />
     
      <h2>este es un proyecto que estaba haciendo hace un tiempo y me parecio muy bontio</h2>
      <h3>no es mucho pero es lo que pude hacer por todo el amor que siento por ti</h3>
      <h3>Ya que hacer una manualidad es un poco dificil...:(</h3>
      <h3>estoy pensando agregar mas cosas y hacerlo aglo muy bonito </h3>






      <nav>
        <Link to="/ValentineLetter">
          <button className="crushbtn">Primero</button>
        </Link>
        <Link to="/ValentineCard">
          <button className="crushbtn">Segundo</button>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
