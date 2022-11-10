import React, { useContext } from 'react';
import './Header.css';
import headimg from '../../../img/Capture-removebg-preview.png'
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Context/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const {user,logout}=useContext(AuthContex)
    const handleOut=()=>{
        logout()
        .then(()=>{})
        .then(e=>console.error(e))
      }
    const menuItems=<>
    <li className=' hover:bg-slate-400 rounded-md'><Link to='/home'>Home</Link> </li>
   {
    user?.email ?<>
    <li className=' hover:bg-slate-400 rounded-md'><Link to='/myreview'>My Review</Link></li>
     <li className=' hover:bg-slate-400 rounded-md'><Link to='/addservices'>Add Services</Link></li>
     <li className=' hover:bg-orange-500 rounded-md' onClick={handleOut}><Link>Logout</Link></li>
   
    </>:
    <>
     <li className=' hover:bg-slate-400 rounded-md'><Link to='/login'>Login</Link></li>
     <li className=' hover:bg-orange-500 rounded-md'><Link to='/signup'>Signup</Link></li>
     </>

   }
    <li className=' hover:bg-slate-400 rounded-md'><Link to='/blog'>Blog</Link> </li>
    </>
    return (
        <div>
<div className="navbar bg-slate-900">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
        
          <ul className="p-2">
           
          </ul>
      
      </ul>
    </div>
  <img className='h-20' src={headimg}/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 text-white">
     {menuItems}
        <ul className="p-2">
         
        </ul>
  
     
    </ul>
  </div>
  <div className="navbar-end">
    {
        user?.photoURL?<>
         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </label></>:<>
      <FaUser className='text-white text-2xl mx-32'></FaUser>
      </>
    }
 
  </div>
</div>
 
            {/* carusel----------------------------- */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-96"> 
                <div className='carousel-caption'>
                    <h3 className='text-2xl'>Travel Grue</h3>
                    <h4 className='text-5xl'>Traveling Services</h4>
                    </div>
                  <img src="https://www.naturecamptravels.com/images/special-tour-packages.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-slate-900">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-slate-900">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-96">
                <div className='carousel-caption'>
                    <h3 className='text-2xl'>Travel Grue</h3>
                    <h4 className='text-5xl'>Traveling Services</h4>
                    </div>
                    <img src="https://images.yourstory.com/production/document_image/mystoryimage/3ks4f7ym-Book-Online-Hotels-at-affordable-price.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-slate-900">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-slate-900">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-96">
                <div className='carousel-caption'>
                    <h3 className='text-2xl'>Travel Grue</h3>
                    <h4 className='text-5xl'>Traveling Services</h4>
                    </div>
                    <img src="https://theriseeast.com/wp-theme/1347665823.jpeg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-slate-900">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-slate-900">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-96">
                <div className='carousel-caption'>
                    <h3 className='text-2xl'>Travel Grue</h3>
                    <h4 className='text-5xl'>Traveling Services</h4>
                    </div>
                    <img src="https://image.shutterstock.com/image-photo/tour-packages-concept-collage-travel-260nw-641820484.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-slate-900">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-slate-900">❯</a>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Header;