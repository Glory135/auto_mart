import React, { useEffect, useState } from "react";
import { data as dataimg } from "../data";
import { ImgSlider } from "../components/ImgSlider";
import { Button } from "@material-ui/core";
import { ArrowForward, DeleteForeverOutlined } from "@material-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { handleDelete } from "../utilities";

export const Single = () => {
  const [data, setData] = useState({});
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:2000/api/product/${search.split("=")[1]}`
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [search]);

  return (
    <div className='singleProductPage'>
      <div className='img-slider-container'>
        <ImgSlider data={dataimg.slice(0, 3)} />
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
                  handleDelete(data._id);
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
