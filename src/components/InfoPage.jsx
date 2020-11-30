import React from "react";
import "./InfoPage.css";
import logo from '../images/windturbine.png';
function InfoPage(){
return <div className="infoText">
<img src={logo} />
<h3>Die Datenquelle entspricht dem Fachinformationssystem LIS-A und enthält 
Informationen uber geplante, genehmigte und in Betriebgenommene Windkraftanlagen 
des Landes Brandenburg sowie technische Informationen zu den einzelnen Windkraftanglagen.
</h3>
<h3>Die einzelnen Windkraftanlagen entsprechen dem BlmSchG, der 4. BlmSchV und 9. BlmSchV
</h3>
</div>

}

export default InfoPage;