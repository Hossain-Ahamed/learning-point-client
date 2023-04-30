import React from 'react';
import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';



const Login = () => {

    window.scrollTo(0, 0);
    const navigate = useNavigate();
    

    //prev location
    const location = useLocation();
    const from = location.state?.from?.pathname  || '/';

 


    const [load,setLoad] = useState(false);


    //auth
    const { signInbyEmailPassword, signInByGithub, signInByGoogle ,setLoading} = useContext(AuthContext);

    const [fogetPassPage, setforgetpassPage] = useState(false);
    const handleForgotPassword = () => {
        setforgetpassPage(true);
    }

    const handleSubmit = (event) => {
        setLoad(true);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        if (!email || !pass) {
            toast.error('Provide email & password');
            return;
        }

        signInbyEmailPassword(email,pass)
        .then(result=>{
            setLoad(false);
            


            const user = result.user;

            if(user.emailVerified){
                navigate(from,{replace:true});
            }else{
                toast.error('Varify Your E-mail');
                return;
            }
           })
           .catch((error) => {
            setLoad(false);
            toast(
                `${ error.code}\n\n${error.message}`,
                {
                  duration: 6000,
                }
            )
          })
          .finally (()=>{
            setLoading(false);
            setLoad(false);
          }

          )

    }

    //google sign in
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {

        signInByGoogle(provider)
        .then(result=>{
          
            toast.success('User Created successfully');
            navigate(from,{replace:true});
    
    
          
           })
           .catch((error) => {
            toast(
                `${ error.code}\n\n${error.message}`,
                {
                  duration: 6000,
                }
            )
          })

    }
    return (

        <>

            {
                fogetPassPage ?
                    <ForgetPassword />
                    :
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Login now!</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form className="card-body pb-1" onSubmit={handleSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name='password' className="input input-bordered" />




                                        <div className='flex justify-between'>
                                            <label className="label">
                                                <button className="label-text-alt link link-hover font-semibold hover:text-blue-600" onClick={handleForgotPassword} >Forgot password?</button>
                                            </label>
                                            <label className="label label-text-alt ">
                                                New Here?
                                                <button className=" link link-hover font-semibold hover:text-blue-600"
                                                    onClick={() => { navigate('/register') }} >
                                                    Register Now
                                                </button>
                                            </label>
                                        </div>

                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary" type='submit'>Login</button>
                                        </div>



                                    </div>

                                </form>
                                <div className="px-2 md:px-5 mt-0 mb-3 flex justify-between">
                                    <div className="form-control mt-6 me-1 w-full">
                                        <button className="btn btn-outline  hover:btn-success " onClick={handleGoogleSignIn} ><FcGoogle className='me-3' /> Google</button>
                                    </div>
                                    <div className="form-control mt-6  w-full">
                                        <button className="btn btn-outline  hover:btn-primary " ><FaFacebookSquare className='me-3' /> facebook</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            }
        </>

    );
};

export default Login;