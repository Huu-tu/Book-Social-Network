export default function authHeader(){
  // const user = `${localStorage.getItem("token")}`
  const user = `Bearer ${localStorage.getItem("token")}`

  if (user){
    return {
      "authorization": user,
    };
  }else {
    return {}
  }
}