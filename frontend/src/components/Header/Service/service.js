import {Http} from "../../../api/http";

const API_ENDPOINT = {
  GETCURRENTUSER: "/currentUser",
}

class UserServices{
  getCurrentUser(){
    return Http.get(API_ENDPOINT.GETCURRENTUSER)
  }
}
const UserService = new UserServices();
export default UserService;