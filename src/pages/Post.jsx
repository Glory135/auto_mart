import React from "react";

export const Post = () => {
  return (
    <div className='post'>
      <div className='post-head'>Post Your Car For Sale</div>
      <form>
        <label>
          Make
          <input type='text' />
        </label>
        <label>
          Model
          <input type='text' />
        </label>
        <label>
          Model Year
          <input type='number' />
        </label>
        <label>
          Color
          <input type='text' />
        </label>
        <label>
          Mileage
          <input type='number' />
        </label>
        <label>
          Price
          <input type='number' />
        </label>
      </form>
    </div>
  );
};
