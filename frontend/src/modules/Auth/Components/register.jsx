import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/auth.css"
import AccountService from "../Service/service";

export default function Register(){
    let navigate  = useNavigate();
    const[input, setInput] = useState({
        username: "",
        password: "",
        fullName: "",
        phone: "",
        email: "",
        gender: "",
        role: ""
    });
    const[error, setError] = useState({});

    const validated = (values) =>{
        const errors = {};
        const nameRegex = /^[a-z0-9_-]{3,16}$/igm;
        const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        const genderRegex = /^(?:m|M|male|Male|f|F|female|Female)$/;

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


        if(values.fullName){
            if(!values.fullName.match(nameRegex)){
                errors.fullName = "Invalid Name!!";
            }else{
                errors.fullName = "Valid Name!"
            }
        }

        if(values.email){
            if(!values.email.match(mailRegex)){
                errors.email = "Invalid Mail!"
            }else{
                errors.email = "Valid Mail!"
            }
        }

        if(values.phone){
            if(!values.phone.match(phoneRegex)){
                errors.phone = "Invalid Phone!"
            }else{
                errors.phone = "Valid Phone!"
            }
        }

        if(values.gender){
            if(!values.gender.match(genderRegex)){
                errors.gender = "Invalid Gender!"
            }else{
                errors.gender = "Valid Gender!"
            }
        }
        return errors;
    };

    const handleChange = (event) =>{
        event.preventDefault();

        setInput({...input,[event.target.name]: event.target.value });

        setError(validated(input));
    }

    const hanldeSubmit = (event)=>{
        event.preventDefault();

        const formData = {
            username: input.username,
            password: input.password,
            fullName: input.fullName,
            phone: input.phone,
            email: input.email,
            gender: input.gender,
            role: "user"
        }

        // console.log(formData)
        AccountService.register(formData)

        navigate("/")
    }

    return(
        <>
        <div className="container-fluid px-2 px-md-4 py-5 mx-auto">
            <div className="card card0 border-0">
                <div className="row d-flex">
                    <div className="col-lg-5">
                        <div className="card1 pb-5">
                            <div className="row px-3">
                                <h5 className="logo" onClick={() => { navigate(-1) }}><u>GoBack</u></h5>
                            </div>
                            <div className="row px-3 justify-content-center mt-4 mb-5">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="card2 card border-0 px-4 px-sm-5 py-5"> <small className="text-right mb-3"><a href="/login"><u>I already have an account</u></a></small>
                            <h3 className="mb-1">Sign Up</h3>
                            <p className="mb-4 text-sm">Create our account and start learning with thousands of courses</p>
                            <form onSubmit={hanldeSubmit}>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label className="mb-0">
                                            <h6 className="mb-0 text-sm">User Name</h6>
                                        </label>
                                        <input type="text" name="username" placeholder="John Doe" onChange={handleChange} value={input.username}/>
                                        <p>{error.username}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="mb-0">
                                            <h6 className="mb-0 text-sm">Pass Word</h6>
                                        </label>
                                        <input type="text" name="password" placeholder="johndoe123" onChange={handleChange} value={input.password}/>
                                        <p>{error.password}</p>
                                    </div>
                                </div>
                                <div className="row px-3"> <label className="mb-0">
                                    <h6 className="mb-0 text-sm">Full Name</h6>
                                    </label> <input type="text" name="fullName" placeholder="john.doe" onChange={handleChange} value={input.fullName}/> <p>{error.fullName}</p> </div>
                                <div className="row px-3"> <label className="mb-0">
                                    <h6 className="mb-0 text-sm">Phone</h6>
                                    </label> <input type="text" name="phone" placeholder="0388*****" onChange={handleChange} value={input.phone}/> <p>{error.phone}</p></div>
                                <div className="row px-3"> <label className="mb-0">
                                    <h6 className="mb-0 text-sm">Email</h6>
                                    </label> <input type="text" name="email" placeholder="john.doe@email.com" onChange={handleChange} value={input.email}/> <p>{error.email}</p> </div>

                                <div className="row px-3"> <label className="mb-0">
                                    <h6 className="mb-0 text-sm">Gender</h6>
                                    </label> <input type="text" name="gender" placeholder="male"  onChange={handleChange} value={input.gender}/> <p>{error.gender}</p> </div>
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