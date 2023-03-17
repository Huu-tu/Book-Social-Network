import axios from 'axios';
import authHeader from "./auth-header";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export class Http  {
    static get = (endPoint) =>{
        return axios.get(BASE_URL + endPoint, {
            headers: authHeader()
        });
    }

    static register = (endPoint, payload) =>{
        return axios.post(BASE_URL + endPoint, payload,{
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
    }

    static post = (endPoint, payload) =>{
        return axios.post(BASE_URL + endPoint, payload,{
            headers: authHeader(),
        })
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

    static putLikePost = (endPoint) =>{
        return axios.post(BASE_URL + endPoint, {
            headers: authHeader()
        });
    }

    static Friend = (endPoint) =>{
        return axios.get(BASE_URL + endPoint, {
            headers: authHeader()
        });
    }

    static unFriend = (endPoint) =>{
        return axios.delete(BASE_URL + endPoint, {
            headers: authHeader()
        });
    }

    static put = (endPoint, payload) =>{
        return axios.put(BASE_URL + endPoint, payload)
    }

    static patch = (endPoint, payload) =>{
        return axios.patch(BASE_URL + endPoint, payload, {
            headers: authHeader()
        })
    }

    static delete = (endPoint) =>{
        return axios.delete(BASE_URL + endPoint,{
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
    }
}