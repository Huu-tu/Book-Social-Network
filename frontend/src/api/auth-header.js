export default function authHeader(){
  const user = `Bearer ${localStorage.getItem("token")}`

  if (user){
    return {
      "authorization": user,
    };
  }else {
    return {}
  }
}