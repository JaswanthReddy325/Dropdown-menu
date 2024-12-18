
import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({
  fetchUrl,
  onOptionSelect,
  placeholder = "Select an option",
  defaultOptions = [],
}) => {
  const [options, setOptions] = useState(defaultOptions);
  const [filteredOptions, setFilteredOptions] = useState(defaultOptions);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchOptions = async () => {
    
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        console.log("Fetched options:", data); // Debug log
        setOptions(data);
        setFilteredOptions(data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = options.filter((option) =>
      option.createdAt?.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Filtered options:", filtered); // Debug log
    setFilteredOptions(filtered);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelect(option);
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown-input"
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) fetchOptions();
        }}
      >
        {selectedOption ? selectedOption.createdAt : placeholder}
        <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <input
            type="text"
            className="dropdown-search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <ul className="dropdown-options">
            {console.log("Filtered options for rendering:", filteredOptions)} 
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.id}
                  className={`dropdown-option ${
                    selectedOption?.id === option.id ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.createdAt}
                </li>
              ))
            ) : (
              <li className="dropdown-no-options">No options available</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
