import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgImg from '../../assets/others/authentication.png'
import authImg from '../../assets/others/authentication1.png'
import GoogleButton from 'react-google-button'
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const {userLogin,setUser,googleSignIn} = useContext(AuthContext);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = e => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) === true) {
            setDisabled(false);


        }

    }
    const handleGoogleSignIn = () =>{
        googleSignIn();
        toast.success('Login Successful');

        navigate(location?.state ? location.state : '/')


    }


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
        .then(result => {
            const user = result.user;
            toast.success("Login Successful")
            setUser(user);
            navigate(location?.state ? location.state : '/')
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
                    <h1 className='text-center font-bold text-xl md:text-5xl pt-12'>Login</h1>
                    <div className=''>
                        <form onSubmit={handleLogin} className="card-body">
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


                                <label className="label">
                                    <span
                                        className="label-text-alt font-mono link link-hover text-xl cursor-pointer"
                                    // onClick={() => {
                                    //     const email = emailRef.current.value;
                                    //     navigate('/forgetPassword', { state: { email } });
                                    // }}
                                    >
                                        Forgot password?
                                    </span>
                                </label>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text"  name='captcha' placeholder="type the captcha above" className="font-mono input input-bordered" required />
                                


                            </div>

                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn btn-primary border-none bg-[#dbb884] text-white text-xl font-mono">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className='flex justify-center w-2/4 mx-auto'>
                        <h1 className='font-mono text-base'>New to Bistro Boss? <Link to='/register' className='underline text-[#dbb884]'>Register Now</Link> </h1>
                    </div>
                    <div className='flex justify-center mt-1 mb-4'>
                        <GoogleButton
                            onClick={handleGoogleSignIn}
                        />
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Login;