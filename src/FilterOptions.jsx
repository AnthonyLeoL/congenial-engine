import React from "react";

const FilterOptions = ({
  filterType,
  options,
  selectedValue,
  onFilterChange,
}) => {
  return (
    <div className="filter-options">
      <h2>{filterType === "color" ? "Filter by Color" : "Filter by Shape"}</h2>
      <div>
        {options.map((option, i) => (
          <label key={`${i}${option}`}>
            <input
              type="radio"
              name={filterType}
              value={option}
              checked={selectedValue === option}
              onChange={() => onFilterChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterOptions;
