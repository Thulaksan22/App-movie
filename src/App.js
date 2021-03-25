import React from "react"; 
import './App.css';


import Movies from "./Components/Movies"
import PageButton from "./Components/PageButton"



function App() {
  return (
    <div className="App">
      <Movies/>
      <PageButton/>
    </div>
  );
}

export default App;
