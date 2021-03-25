import React from "react"; 
import './App.css';


import Movies from "./Components/Movies"
import PageButton from "./Components/PageButton"



function App() {
  return (
    <div className="App">
      <Movies/>
      <div className="d-flex justify-content-center">
        <PageButton/>
      </div>
    </div>
  );
}

export default App;
