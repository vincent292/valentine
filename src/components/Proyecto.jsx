import React, { useState, useRef } from "react";
import "./style/proyecto.css";

import { Link } from "react-router-dom";

const ValentineLetter = () => {
  const [isFlapped, setIsFlapped] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const envelopeRef = useRef(null);
  const letterRef = useRef(null);

  const handleEnvelopeClick = (e) => {
    if (
      e.target.classList.contains("envelope") ||
      e.target.classList.contains("tap-right") ||
      e.target.classList.contains("tap-left") ||
      e.target.classList.contains("heart")
    ) {
      setIsFlapped(!isFlapped);
    } else if (envelopeRef.current.contains(e.target)) {
      if (!isOpened) {
        letterRef.current.classList.add("letter-opening");
        setTimeout(() => {
          letterRef.current.classList.remove("letter-opening");
          setIsOpened(true);
        }, 500);
      } else {
        letterRef.current.classList.add("closing-letter");
        setTimeout(() => {
          letterRef.current.classList.remove("closing-letter");
          setIsOpened(false);
        }, 500);
      }
    }
  };

  return (
    <div onClick={handleEnvelopeClick}>
      <h1>¡Feliz San Valentín! ❤️</h1>
      <div className="container">
        <div
          className={`envelope-wrapper ${isFlapped ? "flap" : ""}`}
          ref={envelopeRef}
        >
          <div className="envelope">
            <div className={`letter ${isOpened ? "opened" : ""}`} ref={letterRef}>
              <div className="text">
                <strong> Mi Niña hermosa</strong>
                <p>

  <br />
  <br />
  Hoy es <strong>San Valentín</strong>, el día donde los <em>corazones</em>, el <em>chocolate</em> y las historias de amor cobran más sentido.  
  Quería hacer algo especial, algo fuera de lo común, porque si hay una historia que me encanta, es la nuestra.
  <br />
  <br />
  Llevamos juntos <strong>1 año y meses</strong>, y en todo este tiempo hemos crecido tanto.  
  Me has enseñado a ser mejor, a ver la vida con otros ojos, y yo he tenido el privilegio de ayudarte a brillar aún más.  
  No somos perfectos, tenemos errores, pero juntos encontramos la manera de mejorar, de entendernos y de seguir adelante,  
  porque lo nuestro siempre vale la pena.
  <br />
  <br />
  Si la vida fuera un desafío, seríamos el mejor equipo; si fuera un camino, lo recorrería mil veces si eso significa estar contigo.  
  Y aunque a veces el mundo parezca difícil, sé que mientras estemos juntos, nada nos detendrá,  
  porque somos <strong>tú y yo contra el mundo</strong>.
  <br />
  <br />
  Gracias por ser mi refugio, mi alegría y mi hogar en cada abrazo.  
  No sé qué sería de mí sin ti, pero sé que contigo soy la mejor versión de lo que siempre quise ser.
  <br />
  <br />
  <strong>Feliz San Valentín</strong>, mi compañera de vida y de sueños.
  <br />
  <br />
  Con todo mi amor,  
  <br />
  <strong>Vincent Arias</strong>
</p>
              </div>
            </div>
          </div>
          <div className="heart"></div>
          <div className="tap-right"></div>
          <div className="tap-left"></div>
        </div>
      </div>

      <Link to="/">
          <button className="crushbtn">Home</button>
        </Link>
    </div>

  );
};

export default ValentineLetter;
