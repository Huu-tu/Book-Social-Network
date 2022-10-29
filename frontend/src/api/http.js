import axios from 'axios';
import authHeader from "./auth-header";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export class Http  {
    static get = (endPoint) =>{
        return axios.get(BASE_URL + endPoint, {
            headers: authHeader()
        });
    }

    static getUser = (endPoint) =>{
        return axios.get(BASE_URL + endPoint, {
            headers: authHeader()
        });
    }

    static post = (endPoint, payload) =>{
        return axios.post(BASE_URL + endPoint, payload)
    }

    static createPost = (endPoint, payload) =>{
        return axios.post(BASE_URL + endPoint, payload,{
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
    }

    static putReactPost = (endPoint, payload) =>{
        return axios.post(BASE_URL + endPoint, payload, {
            headers: authHeader()
        });
    }

    static put = (endPoint, payload) =>{
        return axios.put(BASE_URL + endPoint, payload)
    }

    static delete = (endPoint, id) =>{
        return axios.put(BASE_URL + endPoint + '/' + id)
    }
}