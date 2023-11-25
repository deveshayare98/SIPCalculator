import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import "../Styles/Slider.css";


function SliderRange(props) {
  return (
    <div className="slider-container">
      <div className="slider-sub-container">
        <RangeSlider
          value={props.selecetedValue}
          min={props.min}
          max={props.max}
          onChange={(e) => props.selectedSlider(e.target.value)}
          tooltipPlacement="top"
          tooltip="on"
          step={props.step}
        />
        <div className="range-label">
          <div className="min_label">₹{props.min}</div>
          <div className="max_label">₹{props.max}</div>
        </div>
      </div>
    </div>
  );
}

export default SliderRange;
