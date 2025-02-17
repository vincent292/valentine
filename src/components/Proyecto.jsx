import React, { useState, useRef } from "react";
import "./style/proyecto.css";

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
                <strong>Querida Estrella</strong>
                <p>
                  Hoy es <strong>San Valentín</strong>, el día oficial de los <em>corazones</em>, el <em>chocolate</em> y las declaraciones de amor dramáticas (como en las telenovelas). Así que prepárate, porque aquí va la mía: Desde que te conocí, mi corazón late más rápido que <code>WiFi</code> gratis en una plaza pública. Eres más brillante que un mensaje de "<strong>te amo</strong>" en <strong>LED gigante</strong> y más dulce que el doble de caramelo en un café con extra de crema. Si fueras un algoritmo, serías el más eficiente: optimizas mi felicidad con la menor cantidad de esfuerzo. Si fueras un bug, serías el único que no querría corregir. Y si fueras una aplicación, serías la que siempre tengo anclada en mi pantalla principal. Gracias por hacer de mi vida una versión mejorada, sin errores (bueno, quizá con algunos, pero todos adorables). <br /> <strong>Feliz San Valentín</strong>, mi <em>estrella favorita</em>. <br /> Con mucho <strong>código</strong> (y <strong>amor</strong>), <br /> Tu programador enamorado. <br /> <span style={{ fontSize: "0.9em", color: "grey" }}>PD: Si esta carta fuera un programa, su salida sería:</span> <br /> <code>"Eres lo mejor que me ha pasado."</code>
                </p>
              </div>
            </div>
          </div>
          <div className="heart"></div>
          <div className="tap-right"></div>
          <div className="tap-left"></div>
        </div>
      </div>
    </div>
  );
};

export default ValentineLetter;
