import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logimg from '../../../img/Login-pana.png'
import { AuthContex } from '../../Context/AuthProvider';
import './Login.css'

const Login = () => {
    const{login,GoogleSign,loading}=useContext(AuthContex)
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

    const handleLogin=(event)=>{
        event.preventDefault()
        const from=event.target
        const email=from.email.value 
        const password=from.password.value
        login(email,password)
        .then(res=>{
            const user=res.user
            navigate(form,{replace:true})
            console.log(user);
          
            from.reset()
        })
        .catch(e=>console.log(e))
            }

            if(loading){
              return <div className="loading"></div>
           
            }
    
    return (
        <div>
            <Helmet>
        <title>Login</title>
        
      </Helmet>
             <div className="hero py-10">
  <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    <div className="text-center w-80   lg:text-left">
        <img className=' px-5 me-10' src={logimg} alt="" />
     </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter your Email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" />
          <label className="label">
         <p className='text-black font-semibold'>New to Signup Travel Grue<Link className='text-orange-500 font-semibold' to='/signup'>Signup</Link></p>
          </label>
        </div>
        <button onClick={googleClick} className="btn"><FaGoogle className='text-white text-xl'/></button>
        <div className="form-control mt-6">
            <input className="btn bg-orange-600 border-none" type="submit" value="Login" />
          
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;