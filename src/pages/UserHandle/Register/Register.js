import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoadingPage from '../../Shared/LoadingPage/LoadingPage';
const Register = () => {
    
    window.scrollTo(0,0);
    const [load,setLoad] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const {createUserByEmailPassword,varifyEmail,updateUserProfile,userSignOut} = useContext(AuthContext);
    const navigate = useNavigate();




    const onSubmit = (data) => {
        setLoad(true);

        const {Name,mail,password,confirmPassword,photoURL} = data;
        
      
        if(password!==confirmPassword){
            toast.error(`password didn't match`);
            setLoad(false);
            return;
        }

        createUserByEmailPassword(mail,password)
       .then(result=>{
        handleUpdateUserProfile(Name,photoURL);
        varifyEmail();
        toast.success('User Created successfully');


      
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
    };


    const handleUpdateUserProfile= (name,photoURL)=>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
        .then(()=>{

            userSignOut();
            
            navigate('/login')
            toast.success('please Log In ')

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
    }



    return (
        <>
        {
            load?
            <LoadingPage/>
            :
            <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content w-screen flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Name :</span>
                            </label>

                            <input type='text'
                                {...register("Name", { required: "Your Name is required" })}
                                aria-invalid={errors.Name ? "true" : "false"}
                                className="input input-bordered" 
                                placeholder="Name" 
                                
                            />
                            {errors.Name?.type === 'required' && <p role="alert">{errors.Name?.message}</p>}
                        </div>




                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>

                            <input 
                            type='email'
                                {...register("mail", { required: "Email Address is required" })}
                                aria-invalid={errors.mail ? "true" : "false"}
                                placeholder="E-mail" 
                                className="input input-bordered" 
                            />
                            {errors.mail && <p role="alert">{errors.mail?.message}</p>}
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your photo URL</span>
                            </label>
                            <input 
                            type='url'
                                {...register("photoURL", { required: "PhotoURL is required" })}
                                aria-invalid={errors.photoURL ? "true" : "false"}
                                placeholder="Photo URL" 
                                className="input input-bordered" 
                            />
                            {errors.photoURL && <p role="alert">{errors.photoURL?.message}</p>}
                        </div>

                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Password</span>
                            </label>
                            <input 
                            type='password'
                                {...register("password", { required: "password is required" })}
                                aria-invalid={errors.password ? "true" : "false"}
                                placeholder="password" 
                                className="input input-bordered" 
                            />
                            {errors.password && <p role="alert">{errors.password?.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Re-write Password</span>
                            </label>
                            <input 
                            type='password'
                                {...register("confirmPassword", { required: "Confirm password is required" })}
                                aria-invalid={errors.confirmPassword ? "true" : "false"}
                                placeholder="confirm Password" 
                                className="input input-bordered" 
                            />
                            {errors.confirmPassword && <p role="alert">{errors.confirmPassword?.message}</p>}



                            <div className='flex justify-end'>
                                          
                                            <label className="label label-text-alt ">
                                           Already have an Account? 
                                           <button className=" link link-hover font-semibold hover:text-blue-600" 
                                                onClick={()=>{navigate('/login')}} >
                                                    Login Now
                                                </button>
                                            </label>
                                        </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type='submit'>Register</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>

        }
        </>
        

    );
};

export default Register;

{/* <input
    {...register("firstName", { required: true })}
    aria-invalid={errors.firstName ? "true" : "false"}
/>
{ errors.firstName?.type === 'required' && <p role="alert">First name is required</p> }

<input
    {...register("mail", { required: "Email Address is required" })}
    aria-invalid={errors.mail ? "true" : "false"}
/>
{ errors.mail && <p role="alert">{errors.mail?.message}</p> }

<input type="submit" />  */}