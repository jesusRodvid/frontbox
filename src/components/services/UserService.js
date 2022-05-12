import axios from "../../http-commons";

const getAllSuppliers = () => {
    return axios.get("/users/getAllUsers");
  };

  export default {

    getAllSuppliers,
  }
