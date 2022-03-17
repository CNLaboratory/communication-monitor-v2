import React from "react";
import { useForm } from "react-hook-form";
import AuthService from "../services/auth.service";

export default function NewLogin (props) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let loading = false;
    let message = "";


    const onSubmit = data => {
        console.log(data);
        loading = true;
        AuthService.login(data.username, data.password).then(
            () => {
                loading = false;
                props.logIn();
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                    loading = false;
                    message = resMessage;
            }
        );
    }
    

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className="login-container">
            <div className="card card-container">
                <img
                    src="common1.546da79d.svg"
                    alt="profile-img"
                    className="profile-img-card"
                />
                {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            className="form-control" 
                            {...register("username", { required: true })} />
                        
                    </div>
                    {/* include validation with required or other standard HTML validation rules */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            className="form-control" 
                            {...register("password", { required: true })} />
                    </div>
                    {/* errors will return when field validation fails  */}
                    {/*errors.passwordRequired && <span>This field is required</span>*/}     
                    <div className="form-group">
                        <button
                            className="btn btn-primary btn-block"
                            disabled={loading}
                        >
                            {loading && (<span className="spinner-border spinner-border-sm"></span>)}
                            <span>Login</span>
                        </button>
                    </div>
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}