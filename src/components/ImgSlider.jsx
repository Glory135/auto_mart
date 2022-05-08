import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImgSlider = ({ data }) => {
  return (
    <div className='slider'>
      <Slider
        autoplay
        autoplaySpeed={5000}
        dots
        customPaging={(i) => {
          return (
            <div>
              <img className='indicator-imgs' src={data[i]} alt='thumds' />
            </div>
          );
        }}
        dotsClass='slick-dots custom-dots'
      >
        {data.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} className='slider_img' alt='' />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
