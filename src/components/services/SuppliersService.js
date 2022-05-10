import axios from "../../http-commons";

const createSupplier = (data) => {
    return axios.post("/suppliers/createSupplier", data);
  };
  
  const getAllSuppliers = () => {
    return axios.get("/suppliers/getAllSuppliers");
  };
  
  const getSupplierById = id => {
    return axios.get(`/suppliers/getSupplierById/?id=${id}`);
  };
  
  const updateSupplier = (data,id) => {
    return axios.put(`/suppliers/updateSupplier/?id=${id}`, data);
  };

  const deleteSupplier = (id) => {
    return axios.delete(`/suppliers/deleteSupplier/?id=${id}`);
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    createSupplier,
    getAllSuppliers,
    getSupplierById,
    updateSupplier,
    deleteSupplier,
};