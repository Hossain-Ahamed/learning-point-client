import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ForgetPassword = () => {
    
    window.scrollTo(0,0);
    const navigate = useNavigate();


    const {passwordResetEmail} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!event.target.email.value){
            toast.error("provide your Email");
            return;

        }


        passwordResetEmail(event.target.email.value)
        .then(() => {
            toast.custom((t) => (
                <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                    E-mail sent !!!
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    Check out your E-mail
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ));



        // Navigate to Home Page 
            navigate('/');
          })
          .catch((error) => {

            toast(
                `${ error.code}\n\n${error.message}`,
                {
                  duration: 6000,
                }
            )
          });





       

      
    }
    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content w-screen flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type='submit'>Get Varification E-Mail</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;