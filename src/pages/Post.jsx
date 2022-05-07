import { Button } from "@material-ui/core";
import { Image } from "@material-ui/icons";
import React, { useState } from "react";

export const Post = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [color, setColor] = useState("");
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState(0);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);

  const previewPic = (file, set) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      set(reader.result);
    };
  };
  return (
    <div className='post'>
      <div className='post-head'>Post Your Car For Sale</div>
      <form>
        <label>
          <span className='label'>Brand:</span>
          <input
            required
            type='text'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <label>
          <span className='label'>Model:</span>
          <input
            required
            type='text'
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </label>
        <label>
          <span className='label'> Model Year:</span>
          <input
            required
            type='number'
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label>
          <span className='label'>Color:</span>
          <input
            required
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <label>
          <span className='label'> Mileage:</span>
          <input
            required
            type='number'
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
          />
        </label>
        <label>
          <span className='label'>Price:</span>
          <input
            required
            type='number'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label htmlFor='photo1' className='AddPhoto'>
          <Image />{" "}
          <span className='photoLabel'>
            {img1 ? "Change" : "Add"} Main Product Image
          </span>
        </label>
        <input
          required
          className='photoInput required'
          type='file'
          id='photo1'
          onChange={(e) => {
            const file = e.target.files[0];
            previewPic(file, setImg1);
          }}
        />
        <label htmlFor='photo2' className='AddPhoto'>
          <Image />{" "}
          <span className='photoLabel'>
            {img2 ? "Change" : "Add"} Extra Product Image
          </span>
        </label>
        <input
          required
          className='photoInput required'
          type='file'
          id='photo2'
          onChange={(e) => {
            const file = e.target.files[0];
            previewPic(file, setImg2);
          }}
        />
        <label htmlFor='photo3' className='AddPhoto'>
          <Image />{" "}
          <span className='photoLabel'>
            {img3 ? "Change" : "Add"} Extra Product Image
          </span>
        </label>
        <input
          required
          className='photoInput required'
          type='file'
          id='photo3'
          onChange={(e) => {
            const file = e.target.files[0];
            previewPic(file, setImg3);
          }}
        />
        <div className='btn-container'>
          <Button
            type='submit'
            size='large'
            color='primary'
            variant='outlined'
            className='submitBtn'
          >
            POST
          </Button>
        </div>
      </form>
      <div className='preview-container'>
        <div className='preview'>{img1 && <img src={img1} alt='' />}</div>
        <div className='preview'>{img2 && <img src={img2} alt='' />}</div>
        <div className='preview'>{img3 && <img src={img3} alt='' />}</div>
      </div>
    </div>
  );
};
