import React from "react";
import { data } from "../data";
import { ImgSlider } from "../components/ImgSlider";
import { Button } from "@material-ui/core";
import { ArrowForward, DeleteForeverOutlined } from "@material-ui/icons";

export const Single = () => {
  return (
    <div className='singleProductPage'>
      <div className='img-slider-container'>
        <ImgSlider data={data.slice(0, 3)} />
      </div>
      <div className='single-details-container'>
        <div className='single-main-details-container'>
          <h1>
            Toyota <span>camry</span>{" "}
          </h1>
          <div className='details'>
            <p>
              Year: <span>2022</span>
            </p>
            <p>
              Color: <span>RED</span>
            </p>
            <p>
              Mileage:{" "}
              <span>
                14000 <span>miles</span>{" "}
              </span>
            </p>
            <p>
              Price:{" "}
              <span>
                1 million <span>NGN</span>{" "}
              </span>
            </p>
            <div className='btn-container'>
              <Button className='btn' variant='outlined' color='primary'>
                Lets Do Business <ArrowForward className='icon' />
              </Button>
              <Button className='btn' variant='outlined' color='secondary'>
                Delete <DeleteForeverOutlined className='icon' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
