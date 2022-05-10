import axios from "axios";

const createItems = (data) => {
    return axios.post("/createItems", data);
  };
  
  const getAllItems = () => {
    return axios.get("/getAllItems");
  };
  
  const getItemsById = id => {
    return axios.get(`/getItemsById/?id=${id}`);
  };
  
  const updateItem = (data,id) => {
    return axios.put(`/updateItem/?id=${id}`, data);
  };

  const deleteItem = (id) => {
    return axios.delete(`/deleteItem/?id=${id}`);
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    createItems,
    getAllItems,
    getItemsById,
    updateItem,
    deleteItem,
  };