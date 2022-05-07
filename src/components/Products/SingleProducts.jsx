import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export const SingleProducts = ({ data }) => {
  return (
    <div className='single'>
      {" "}
      <span className='tag'>For Sale!!</span>
      <Card className='singleProduct'>
        <Link to='/singleAd' className='Link'>
          <CardActionArea>
            <CardMedia
              className='singleProduct-media'
              image={data}
              title='Product'
            />
            <CardContent>
              <Typography gutterBottom variant='h5'>
                Toyota Camry <span className='singleProduct-year'>2010</span>
              </Typography>
              <Typography variant='body1'>Price : 2 million NGN</Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Link to='/singleAd' className='Link'>
            <Button size='large' color='primary'>
              Show More
            </Button>
          </Link>
          <Button size='large' color='secondary'>
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
