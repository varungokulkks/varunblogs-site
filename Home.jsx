import Cards from "../../Components/Cards/Cards";
import React, { useEffect } from "react";
import Carddata from "../../Assests/Carddata";
import NavBar from "../NavBar/NavBar";
import "./Home.scss";

function Home() {
  return (
    <div className="eachacard">
      <div className="navbarclass">
        <NavBar />
      </div>
      {Carddata.data.map((data, ind) => {
        return (
          <div key={ind} className="element_card">
            <Cards
              cardimg={data.cardimg}
              cardtitle={data.cardtitle}
              cardlike={data.cardlike}
              cardcontent={data.cardcontent}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
