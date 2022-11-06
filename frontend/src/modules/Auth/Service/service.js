import { Http } from "../../../api/http";

const API_ENDPOINT = {
    GETALLUSER: "/auth/getAllUser",
    LOGIN: "/auth/login",
    LOGINGG: "/auth/loginGG",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    POST_DATA: "/auth/register",
    PUT_DATA: "/auth/register",
    DELETE_DATA: "/auth/register",
}

class AccountServices{
    getAllUser(){
        return Http.get(API_ENDPOINT.GETALLUSER)
    }
    login(data){
        return Http.post(API_ENDPOINT.LOGIN, data)
    }
    loginGG(data){
        return Http.post(API_ENDPOINT.LOGINGG, data)
    }
    register(data){
        return Http.post(API_ENDPOINT.REGISTER, data)
    }
    logOut(){
        return Http.post(API_ENDPOINT.LOGOUT)
    }
    postAccount(){
        return Http.post(API_ENDPOINT.POST_DATA)
    }
}

const AccountService = new AccountServices();
export default AccountService;
