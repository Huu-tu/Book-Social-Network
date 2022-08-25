import {  Http } from "../../../api/http";

const API_ENDPOINT = {
    GET_USER: '/get',
    GET_COMPANY: '/company/company/get',
    CREATE_COMPANY: '/company/company/create',
    UPDATE_COMPANY: '/company/company/update',
    DELETE_COMPANY: '/company/company/delete',
}

class UserServices{
    // constructor(){
    //     if(UserServices._instance){
    //         return UserServices._instance
    //     }
    //     UserService._instance = this;
    // }

    getUser(){
        return Http.get(API_ENDPOINT.GET_USER)
    }
}

const UserService = new UserServices();
export default UserService;
