import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../../../styles/auth.css";
import { authActions } from "../authSlice";
import AccountService from "../Service/service";

export default function Login(){
    let navigate  = useNavigate();
    const disPatch = useDispatch();

    const[input, setInput] = useState({
        username: "",
        password: ""
    });
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

        setError(validated(input));
    }
 
    const handleLogin = async (event) =>{
        event.preventDefault();

        const formData = {
            username: input.username,
            password: input.password,
        }

        // disPatch(authActions.login({}));

        const value = await AccountService.login(formData);

        // disPatch(authActions.loginSuccess())
        // setCookie('token', JSON.stringify(value.data), 1)
        if (value.data === "Thap Bai"){
            console.log("Thap bai")
            navigate("/login")
        }else {
            localStorage.setItem("token", JSON.stringify(value.data));
            navigate("/main")
        }
    }

    return(
        <>
        <div className="container-fluid px-2 px-md-4 py-5 mx-auto">
            <div className="card card0 border-0">
                <div className="row d-flex">
                    <div className="col-lg-5">
                        <div className="card1 pb-5">
                            <div className="row px-3">
                                <h5 className="logo" onClick={() => { navigate("/") }}><u>GoBack</u></h5>
                            </div>
                            <div className="row px-3 justify-content-center mt-4 mb-5">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="card2 card border-0 px-4 px-sm-5 py-5"> <small className="text-right mb-3"><a href="/login"><u>I already have an account</u></a></small>
                            <h3 className="mb-1">Login In Form</h3>
                            <p className="mb-4 text-sm">Create our account and start learning with thousands of courses</p>
                            <form onSubmit={handleLogin}>
                                <div className="row px-3"> <label className="mb-0">
                                    <h6 className="mb-0 text-sm">User Name</h6>
                                    </label> <input type="text" name="username" placeholder="john.doe@email.com" onChange={handleChange} value={input.username} />
                                    <p>{error.username}</p>
                                </div>
                                <div className="row px-3"> <label className="mb-0">
                                    <h6 className="mb-0 text-sm">Pass Word</h6>
                                    </label> <input type="password" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" onChange={handleChange} value={input.password}/>
                                    <p>{error.password}</p>

                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-6"> <button className="btn btn-blue text-center mb-1 py-2">Create Account</button> </div>
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