import React, { useState } from "react";
import "./App.css";
import CountryList from "./Components/CountryList";
import Search from "./Components/Search";
import "h8k-components";
import { response } from "./response";

const title = "Country Filter";
function App() {
  const [state, setstate] = useState(response);

  const searchHandler = (text) => {
    setstate(
      response.filter((country) =>
        country.toLowerCase().includes(text.target.value.toLowerCase())
      )
    );
    // setstate([1,2,3]);
    // console.log(response)

    // console.log(text.target.value)

    console.log();
  };
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <section className="w-30 justify-content-center layout-column mt-30 mx-auto">
        <Search searchHandler={searchHandler} />
        <CountryList data={state} />
      </section>
    </div>
  );
}

export default App;
