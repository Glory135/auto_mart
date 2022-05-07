import React from "react";
import { AllProducts } from "../components/Products/AllProducts";
import { data } from "../data";

export const Home = () => {
  return (
    <div className='home'>
      <div className='home-head'>
        {" "}
        <span>All</span> Adverts
      </div>
      <AllProducts data={data} />
    </div>
  );
};
