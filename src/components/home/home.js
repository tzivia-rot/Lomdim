import React from "react";
import "./home.css";
import imgHome from "../picthers/imgHome.jpg";

export default function Home() {
  return (
    <>
      <img id="imgHome" alt="imgHome" src={imgHome} />

      <div className="searchTech">
        {/* <form>
          <div className="findTechTxt">מצא מורה:</div>
          <div className="inputSearch">
            <input type="text" placeholder="מקצוע" />
            <input type="text" placeholder="יישוב" />
            <button type="submit" className="submit"> חיפוש </button>
            <br />
          </div>
        </form> */}
      </div>
    </>
  );
}
