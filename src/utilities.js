import axios from "axios";

export const handleDelete = async (id, load) => {
  load(true);
  try {
    await axios.delete(`https://auto-mart1.herokuapp.com/api/product/${id}`);
    load(false);
  } catch (error) {
    console.log(error);
    load(false);
  }
};
