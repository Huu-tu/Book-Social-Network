import React,{ useState} from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import AccountService from "../../Auth/Service/service";
import BookService from "../Service/service";

export default function CreateBook(){
  let navigate  = useNavigate();

  const disPatch = useDispatch();

  const[input, setInput] = useState({
    bookTitle: "",
    description: "",
    author: "",
    language: "",
  });
  const[file, setFile] = useState(null )

  const[error, setError] = useState({});

  const validated = (values) =>{
    let errors = {};

    if(values.username){
      if(values.username.length < 8){
        errors.username = "Value must be more than 8 elements";
      }else{
        errors.username = "Valid value"
      }
    }

    if(values.password){
      if(values.password.length < 8){
        errors.password = "Value must be more than 8 elements";
      }else{
        errors.password = "Valid value"
      }
    }
    return errors;
  };


  const handleChange = (event) =>{
    setInput({ ...input, [event.target.name]: event.target.value });
    setFile(event.target.files[0])

    // setError(validated(input));
  }

  const handleCreate = async (event) =>{
    event.preventDefault();

    const formData = {
      bookTitle: input.bookTitle,
      description: input.description,
      author: input.author,
      language: input.language,
      image: file
    }

    // disPatch(authActions.login({}));

    await BookService.createBook(formData);

    // disPatch(authActions.loginSuccess())

    navigate("/main")
  }

  return(
    <>
      <div className="container-fluid px-2 px-md-4 py-5 mx-auto">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-5">
              <div className="card1 pb-5">
                <div className="row px-3">
                  <h5 className="logo" onClick={() => { navigate("/main") }}><u>GoBack</u></h5>
                </div>
                <div className="row px-3 justify-content-center mt-4 mb-5">
                  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card2 card border-0 px-4 px-sm-5 py-5">
                <h3 className="mb-1">Create a Book </h3>
                <p className="mb-4 text-sm">Create a book and start review about it</p>
                <form onSubmit={handleCreate}>
                  <div className="row px-3"> <label className="mb-0">
                    <h6 className="mb-0 text-sm">Book Title</h6>
                  </label> <input type="text" name="bookTitle"  onChange={handleChange} value={input.bookTitle} />
                    {/*<p>{error.username}</p>*/}
                  </div>
                  <div className="row px-3"> <label className="mb-0">
                    <h6 className="mb-0 text-sm">Description</h6>
                  </label> <input type="text" name="description" onChange={handleChange} value={input.description}/>
                    {/*<p>{error.password}</p>*/}
                  </div>
                  <div className="row px-3"> <label className="mb-0">
                    <h6 className="mb-0 text-sm">Author</h6>
                  </label> <input type="text" name="author" onChange={handleChange} value={input.author}/>
                    {/*<p>{error.password}</p>*/}
                  </div>
                  <div className="row px-3"> <label className="mb-0">
                    <h6 className="mb-0 text-sm">Language</h6>
                  </label> <input type="text" name="language" onChange={handleChange} value={input.language}/>
                    {/*<p>{error.password}</p>*/}
                  </div>
                  <div className="row px-3"> <label className="mb-0">
                    <h6 className="mb-0 text-sm">Image</h6>
                  </label> <input id="image" type="file" name="image" onChange={handleChange}/>
                    {/*<p>{error.password}</p>*/}
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-6"> <button className="btn btn-blue text-center mb-1 py-2">Create Book</button> </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}