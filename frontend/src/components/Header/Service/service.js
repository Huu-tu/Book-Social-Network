import {Http} from "../../../api/http";

const API_ENDPOINT = {
  GETCURRENTUSER: "/currentUser",
  SEARCHUSER: "/searchUsers?fullName="
}

class UserServices{
  getCurrentUser(){
    return Http.get(API_ENDPOINT.GETCURRENTUSER)
  }

  searchUser(search){
    return Http.get(API_ENDPOINT.SEARCHUSER + `${search}`)
  }
}
const UserService = new UserServices();
export default UserService;