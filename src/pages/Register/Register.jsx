import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgImg from '../../assets/others/authentication.png'
import authImg from '../../assets/others/authentication1.png'
import GoogleButton from 'react-google-button'
import { toast } from 'react-toastify';
import { auth, AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
const Register = () => {
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);
    const location = useLocation();
    const {createNewUser,setUser} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        console.log(name)
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regex.test(password)) {
           
            toast.error('password must be  6 characters long & at-least 1 upper and lower case letter.')


            return;

        }
        createNewUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                toast.success('User Registered Successfully')
               
                navigate(location?.state ? location.state : '/')
                console.log(registeredUser)
                const profile = {
                    displayName: name,
                   
                }
                
                updateProfile(auth.currentUser,profile)
                setUser({
                    ...registeredUser,
                    displayName: name,
                    
                });
                
            })
            .catch(err => {
               
                toast.error(err.message)

            })

    }
    return (
        <div className='p-10 h-full' style={{
            backgroundImage: `url(${bgImg})`,

            width: "100vw",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}>
            <div style={{
                boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.3)", // Bottom-right shadow

            }} className='md:flex justify-between gap-14 border-4  '>
                <div className='w-3/12 mx-auto'>

                    <div className='md:pt-36 pt-5'>
                        <img src={authImg} alt="" />
                    </div>




                </div>
                <div className='md:w-2/4 mx-auto '>
                    <h1 className='text-center font-bold text-xl md:text-5xl pt-12'>Register</h1>
                    <div className=''>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-mono">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="font-mono input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-mono">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="font-mono input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-mono">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="font-mono input input-bordered" required />


                               

                            </div>
                          

                            <div className="form-control mt-6">
                                <button  className="btn btn-primary border-none bg-[#dbb884] text-white text-xl font-mono">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className='flex justify-center  w-2/4 mx-auto'>
                        <h1 className='font-mono text-base mb-4'>Already have account? <Link to='/login' className='underline text-[#dbb884]'>Login Now</Link> </h1>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Register;