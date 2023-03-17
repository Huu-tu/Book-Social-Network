import { Http } from "../../../api/http";

const API_ENDPOINT = {
    GETALLUSER: "/auth/getAllUser",
    LOGIN: "/auth/login",
    LOGINGG: "/auth/loginGG",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    BLOCKACCOUNT: "/auth/blockAccount",
    RESTOREACCOUNT: "/auth/restoreAccount",
    TRASHACCOUNT: "/auth/trashAccount",
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
        return Http.register(API_ENDPOINT.REGISTER, data)
    }
    blockAccount(id){
        return Http.delete(API_ENDPOINT.BLOCKACCOUNT + `/${id}`)
    }
    restoreAccount(id){
        return Http.patch(API_ENDPOINT.RESTOREACCOUNT + `/${id}`)
    }
    trashAccount(){
        return Http.get(API_ENDPOINT.TRASHACCOUNT)
    }
    logOut(){
        return Http.post(API_ENDPOINT.LOGOUT)
    }
}

const AccountService = new AccountServices();
export default AccountService;