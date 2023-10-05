import React, { useState } from "react";
import "./ShapeFilterApp.css"; // Import your CSS file
import FilterOptions from "./FilterOptions";
import { BASE_SHAPES } from "./constants";

const ShapeFilterApp = () => {
  const [shapes, setShapes] = useState(BASE_SHAPES);

  return (
    <div>
      <div>
        <FilterOptions
          filterType="color"
          options={["red", "blue", "green"]}
          onFilterChange={() => {
            //TODO
          }}
        />
        <FilterOptions
          filterType="shape"
          options={["circle", "square", "triangle"]}
          onFilterChange={() => {
            //TODO
          }}
        />
      </div>
      <div className="shape-list">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className={`shape ${shape.type} ${shape.color}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ShapeFilterApp;
