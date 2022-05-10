import React, { useContext, useEffect, useState } from "react";
import { AllProducts } from "../components/Products/AllProducts";
import { SearchModal } from "../components/SearchModal";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { LoadContext } from "../App";

export const Home = () => {
  const { isLoading, setIsloading } = useContext(LoadContext);
  const [allData, setAllData] = useState([]);
  const [open, setOpen] = useState(false);
  const { search } = useLocation();
 
  useEffect(() => {
    const getData = async () => {
      setIsloading(true);
      try {
        const res = await axios.get(
          `https://auto-mart1.herokuapp.com/api/products/${search}`
        );
        setAllData(res.data);
        setTimeout(() => {
          setIsloading(false);
        }, 1000);
      } catch (error) {
        console.log(error);
        setIsloading(false);
      }
    };
    getData();
  }, [search, setIsloading]);

  return (
    <div className='home'>
      <Button
        onClick={() => setOpen(true)}
        variant='outlined'
        color='primary'
        className='search-btn'
      >
        {" "}
        <Search /> SEARCH
      </Button>
      <SearchModal open={open} setOpen={setOpen} />
      {isLoading ? (
        <div className='load'>LOADING... </div>
      ) : (
        <>
          <div className='home-head'>
            <span>All</span> Adverts
          </div>

          {allData.length >= 1 ? (
            <AllProducts data={allData.reverse()} />
          ) : (
            <h1>No Data Found</h1>
          )}
        </>
      )}
    </div>
  );
};
