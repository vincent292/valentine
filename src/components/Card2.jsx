import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import "./style/card2.css"; // Asegúrate de crear este archivo CSS
import { Link } from "react-router-dom";

const ValentineCard = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { x: 0.5, y: 0.5 },
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="valentines-day-card">
      <input id="open" type="checkbox" />
      <label className="open" htmlFor="open"></label>
      <div className="card-front">
        <div className="note">Click para Abrir</div>
      </div>
      <div className="card-inside">
        <div className="text-one">Feliz</div>
        <div className="hearts"></div>
        <div className="smile"></div>
        <div className="eyes"></div>
      </div>

      <Link to="/">
          <button className="crushbtn">Home</button>
        </Link>
    </div>

    
  );
};

export default ValentineCard;
