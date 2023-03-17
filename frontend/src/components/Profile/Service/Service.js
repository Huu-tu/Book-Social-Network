import {Http} from "../../../api/http";

const API_ENDPOINT = {
  UPDATEPROFILE: "/editProfile",
  DETAILPROFILE: "/detailProfile",
  ADDFRIEND: "/auth/friend",
  UNFRIEND: "/auth/unFriend",
}

class ProfileServices{
  updateProfile(data){
    return Http.post(API_ENDPOINT.UPDATEPROFILE, data)
  }

  detailProfile(id){
    return Http.get(API_ENDPOINT.DETAILPROFILE + `/${id}`)
  }

  addFriend(id){
    return Http.Friend(API_ENDPOINT.ADDFRIEND + `/${id}`)
  }
  
  unFriend(id){
    return Http.unFriend(API_ENDPOINT.UNFRIEND + `/${id}`)
  }
}

const ProfileService = new ProfileServices();
export default ProfileService;
