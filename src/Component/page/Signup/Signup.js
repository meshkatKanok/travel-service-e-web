import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../img/Sign up-pana.png'
import { AuthContex } from '../../Context/AuthProvider';
import './../Login/Login.css'


const Signup = () => {
    const { signup,GoogleSign,loading } = useContext(AuthContex)
    const location=useLocation();
    const navigate=useNavigate();
    const form=location.state?.from?.pathname || '/myreview';
    const googleClick=()=>{
        GoogleSign()
        .then(result=>{
            const user=result.user
            navigate(form,{replace:true})
            console.log(user);
        })
        .catch(e=>console.log(e))
    }
    const handleSignup = (event) => {
        event.preventDefault()
        const from = event.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value
        console.log(name, email, password);
        signup(email, password)
            .then(result => {
                const user = result.user
                navigate(form,{replace:true})
                console.log(user);
                from.reset()
            })
            .catch(error => console.error(error))
    }

    if(loading){
        return <div className="loading"></div>
    }
    return (
        <div className="hero py-10">
              <Helmet>
        <title>SignUp</title>
        
      </Helmet>
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="text-center w-80   lg:text-left">
                    <img className=' px-5' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-5xl font-bold text-center">SignUp Now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name " name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <p className='text-black font-semibold'>You have all ready creat acount <Link className='text-orange-500 font-semibold' to='/login'>Login</Link></p>
                            </label>
                        </div>
                        <button onClick={googleClick} className="btn"><FaGoogle className='text-white text-xl'/></button>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-600 border-none" type="submit" value="SignUp" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;