import React from "react";
import "./ProdAbout.css";

function ProdAbout() {
  return (
    <div>
      <h5 className="aboutTitleText"> About the Product </h5>
      <div className="aboutContainerFlex">
        <div>
          <h3 className="item"> Item 2404655 </h3>

          <button className="btnn">ONLY AT SEPHORA</button>
        </div>

        <div className="aboutProductText">
          <p>
            <b>What it is:</b> A first-of-its-kind blend of 10 percent vitamin C
            and white mushroom{" "}
          </p>
          <p>
            <b>Skin Type: </b> Normal, Dry, Combination, and Oily
          </p>
          <p>
            <b>Skincare Concerns: </b> Dark Spots, Dullness, and Uneven Texture{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProdAbout;
