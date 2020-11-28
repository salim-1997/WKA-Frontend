import React from "react";
import "./InfoPage.css";
function InfoPage(){
  return  (
  <div>
  <div className="topnav">
  <a className="brand" href="#brand">Turbindr</a>
  <input type="text" placeholder="PLZ.."></input>
  <a href="#Karte">Karte</a>
  <a href="#Statistik">Stastik</a>
  <a href="#Info">Info</a>
  <a href="#Kontakt">Kontakt</a>
</div>
  </div>);
}

export default InfoPage;