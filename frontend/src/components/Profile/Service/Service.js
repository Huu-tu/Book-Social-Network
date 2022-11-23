import {Http} from "../../../api/http";

const API_ENDPOINT = {
  UPDATEPROFILE: "/editProfile",
  DETAILPROFILE: "/detailProfile"
}

class ProfileServices{
  updateProfile(data){
    return Http.post(API_ENDPOINT.UPDATEPROFILE, data)
  }

  detailProfile(id){
    return Http.get(API_ENDPOINT.DETAILPROFILE + `/${id}`)
  }
}

const ProfileService = new ProfileServices();
export default ProfileService;
