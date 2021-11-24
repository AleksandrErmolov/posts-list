import React, { useState } from "react"
import Counter from "./components/Counter";
import '../src/styles/App.css'
import Postitem from "./components/Postitem";
function App() {


  return (
    <div className="App">

      <Postitem post={{id:1, title:'JavaScript', body:'Description'}}/>
      <Postitem />
      <Postitem />
      <Postitem />
      <Postitem />

    </div>
  );
}

export default App;
