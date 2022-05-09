import axios from "axios";

export const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:2000/api/product/${id}`);
  } catch (error) {
    console.log(error);
  }
};
