import React, { useState } from "react"; // imoprt react

export default function App() {
  // glavna funkcija
  const colors = ["#f44336", "#4caf50", "#2196f3", "#ff9800", "#9c27b0"]; // const z barvami
  const [bgColor, setBgColor] = useState("#ffffff"); //const za barve?

  function changeColor() {
    // funkcija za menjat barve
    const randomIndex = Math.floor(Math.random() * colors.length); // math za naključno barvo
    setBgColor(colors[randomIndex]); // setbgcolors je naključna barva po random index
  }
  function reset() {
    setBgColor("white");
  }

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      {" "}
      {/* za clasnam app naredi style */}
      <h1>🎨 Color Changer</h1>
      {/* naslov html */}
      <button onClick={changeColor}>Change Color</button>{" "}
      {/* ob kliku na gumb poženi funkcijo */}
      <button onClick={reset}>Reset</button>{" "}
    </div>
  );
}
