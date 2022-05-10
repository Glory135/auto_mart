import React, { useContext, useEffect, useState } from "react";

import { ImgSlider } from "../components/ImgSlider";
import { Button } from "@material-ui/core";
import { ArrowForward, DeleteForeverOutlined } from "@material-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { handleDelete } from "../utilities";
import { LoadContext } from "../App";

export const Single = () => {
  const [data, setData] = useState({
    images: { main: "", extra1: "", extra2: "" },
  });
  const { setIsloading } = useContext(LoadContext);
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://auto-mart1.herokuapp.com/api/product/${search.split("=")[1]}`
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [search]);
  const sliderImgs = [data.images.main, data.images.extra1, data.images.extra2];

  return (
    <div className='singleProductPage'>
      <div className='img-slider-container'>
        <ImgSlider data={sliderImgs} />
      </div>
      <div className='single-details-container'>
        <div className='single-main-details-container'>
          <h1>
            {data.brand} <span>{data.model}</span>{" "}
          </h1>
          <div className='details'>
            <p>
              Year: <span>{data.year}</span>
            </p>
            <p>
              Color: <span>{data.color}</span>
            </p>
            <p>
              Mileage:{" "}
              <span>
                {data.mileage} <span>miles</span>{" "}
              </span>
            </p>
            <p>
              Price:{" "}
              <span>
                {data.price} <span>NGN</span>{" "}
              </span>
            </p>
            <div className='btn-container'>
              <Button className='btn' variant='outlined' color='primary'>
                Lets Do Business <ArrowForward className='icon' />
              </Button>
              <Button
                onClick={() => {
                  handleDelete(data._id, setIsloading);
                  navigate("/");
                }}
                className='btn'
                variant='outlined'
                color='secondary'
              >
                Delete <DeleteForeverOutlined className='icon' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
