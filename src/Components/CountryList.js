import React, { useState } from "react";
import { response } from "../response";

function CountryList(props) {
  console.log(props.data);
 
  return (
    <>
      <section>
        <ul className="card country-list" data-testid="countryList">
          {props.data.map((country) => (
            <li className="pa-10 pl-20">{country}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default CountryList;
