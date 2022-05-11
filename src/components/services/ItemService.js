import axios from "../../http-commons";

const createItems = (data) => {
    return axios.post("/items/createItems", data);
  };
  
  const getAllItems = () => {
    return axios.get("/items/getAllItems");
  };
  
  const getItemsById = id => {
    return axios.get(`/items/getItemsById/?id=${id}`);
  };
  
  const updateItem = (data,id) => {
    return axios.put(`/items/updateItem/?id=${id}`, data);
  };

  const deleteItem = (id) => {
    return axios.delete(`/items/deleteItem/?id=${id}`);
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    createItems,
    getAllItems,
    getItemsById,
    updateItem,
    deleteItem,
  };