import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/';

const getPublicContent = () => {

    return axios.get(API_URL+'items' , { headers: authHeader() });

}

//TODO: implementar roles que permitan acceder a ciertas url

const getAdminSection = () => {

    return axios.get(API_URL+'users' , { headers: authHeader() });

}

const getAdminSectionDiscounts = () => {

    return axios.get(API_URL+'discounts' , { headers: authHeader() });

}

const getAdminSectionSuppliers = () => {

    return axios.get(API_URL+'suppliers' , { headers: authHeader() });

}

export default {

    getPublicContent,
    getAdminSection,
    getAdminSectionDiscounts,
    getAdminSectionSuppliers,

}



