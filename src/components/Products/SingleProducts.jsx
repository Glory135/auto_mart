import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoadContext } from "../../App";
import { handleDelete } from "../../utilities";

export const SingleProducts = ({ data }) => {
  const { setIsloading } = useContext(LoadContext);
  return (
    <div className='single'>
      {" "}
      <span className='tag'>For Sale!!</span>
      <Card className='singleProduct'>
        <Link to={`/singleAd/?id=${data._id}`} className='Link'>
          <CardActionArea style={{ textTransform: "Capitalize" }}>
            <CardMedia
              className='singleProduct-media'
              image={data.images.main}
              title='Product'
            />
            <CardContent>
              <Typography gutterBottom variant='h5'>
                {data.brand} {data.model}{" "}
                <span className='singleProduct-year'>{data.year}</span>
              </Typography>
              <Typography variant='body1'>Price : {data.price} NGN</Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Link to={`/singleAd/?id=${data._id}`} className='Link'>
            <Button size='large' color='primary'>
              Show More
            </Button>
          </Link>
          <Button
            onClick={() => {
              handleDelete(data._id, setIsloading);
            }}
            size='large'
            color='secondary'
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
