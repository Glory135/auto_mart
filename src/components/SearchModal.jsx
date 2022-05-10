import {
  Button,
  Container,
  makeStyles,
  Modal,
  TextField,
} from "@material-ui/core";
import { CancelOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 500,
    height: 400,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    outline: "none",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
    },
  },
  head: {
    width: "90%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "30px",
    marginBottom: "40px",
  },
  cancel: {
    fontSize: "30px",
  },
}));

export const SearchModal = ({ open, setOpen }) => {
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const classes = useStyles();

  return (
    <Modal className='modal' open={open}>
      <Container className={classes.container}>
        <div className={classes.head}>
          <div>SEARCH</div>
          <CancelOutlined
            className={classes.cancel}
            onClick={() => setOpen(false)}
          />
        </div>
        <form>
          <TextField
            type='text'
            label='Brand'
            size='small'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            style={{ width: "100%", marginBottom: "50px" }}
          />

          <TextField
            type='number'
            label='Year'
            size='small'
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={{ width: "100%", marginBottom: "50px" }}
          />
          <Link className='Link' to={`/?search=${brand}/${year}`}>
            <Button
              type='submit'
              onClick={() => setOpen(false)}
              variant='outlined'
              color='primary'
            >
              GO
            </Button>
          </Link>
        </form>
      </Container>
    </Modal>
  );
};
