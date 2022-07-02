import React from "react";
import "./ProdHighlights.css";

function ProdHighlights() {
  return (
    <div>
      <h5 className="highlightsTitleText"> Highlights </h5>
      <div className="highlightsContainerFlex">
        <div>
          <div className="highlightsFlex">
            <img
              className="highlightsImg"
              src="https://www.sephora.com/contentimages/highlights/good-for-dark-circles.svg"
            />
            <h6 className="highlightsText">Good for: Dark Circles</h6>
          </div>
          <div className="highlightsFlex">
            <img
              className="highlightsImg"
              src="https://www.sephora.com/contentimages/highlights/formulated-without.svg"
            />
            <h6 className="highlightsText">Without Parabens</h6>
          </div>
        </div>

        <div>
          <div className="highlightsFlex">
            <img
              className="highlightsImg"
              src="https://www.sephora.com/contentimages/highlights/good-for-dark-spots.svg"
            />
            <h6 className="highlightsText">Good for: Dark spots</h6>
          </div>
          <div className="highlightsFlex">
            <img
              className="highlightsImg"
              src="https://www.sephora.com/contentimages/highlights/cruelty-free.svg"
            />
            <h6 className="highlightsText">Cruelty-Free</h6>
          </div>
        </div>

        <div>
          <div className="highlightsFlex">
            <img
              className="highlightsImg"
              src="https://www.sephora.com/contentimages/highlights/key-ingredient.svg"
            />
            <h6 className="highlightsText">Vitamin C</h6>
          </div>
          <div className="highlightsFlex">
            <img
              className="highlightsImg"
              src="https://www.sephora.com/contentimages/highlights/clean-at-sephora.svg"
            />
            <h6 className="highlightsText">Clean at Sephora﻿</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdHighlights;
