import React from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import './App.css'
import {v4 as uuidv4} from 'uuid'
const App = () => {
  const handleOptionSelect = (option) => {
    console.log("Selected Option:", option);
  };

  const defaultOptions = [
    {id:uuidv4(), label: "Abhi's space", value: "abhi-space" },
    {id:uuidv4(), label: "Workspace", value: "workspace" },
    {id:uuidv4(), label: "Finance space", value: "finance-space" },
    {id:uuidv4(), label: "HR space", value: "hr-space" },
    {id:uuidv4(), label: "Developer", value: "developer" },
    {id:uuidv4(), label: "IT Infra", value: "it-infra" },
    {id:uuidv4(), label: "IT Infra Support", value: "it-infra-support" },
    {id:uuidv4(), label: "Test new Workspace", value: "test-workspace" },
  ];

  return (
    <div className="background-container">
      <h1>Dropdown Component</h1>
      <Dropdown
      fetchUrl="https://674950e686802029663079ce.mockapi.io/option/options"
        defaultOptions={defaultOptions}
        onOptionSelect={handleOptionSelect}
        placeholder="Choose a space"
      />
    </div>
  );
};

export default App;


