import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from '../../Context/AuthProvider';
import Showreview from '../Showreview/Showreview';
import Addedrevdata from './Addedrevdata';

const Deatils = () => {
    const {user}=useContext(AuthContex)
    const [reviewadd,setReviewadd]=useState()
    const idData = useLoaderData()
   const {_id,ServiceName,serviceimage,serviceday,serviceDis,price,review
   }=idData;

const handleReview=(e)=>{
    e.preventDefault()
    const from=e.target
    const servicesname=from.servicesname.value
    const price=from.price.value
    const email=user?.email || 'undifined'
    const message=from.message.value
    const review={
service:_id,
servicesname:servicesname,
price,
email,
message,
    }
    fetch(`https://assignment-server-three.vercel.app/review`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),

    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        from.reset()
    })
    .catch(e=>console.log(e))

}

useEffect(()=>{
    fetch(`https://assignment-server-three.vercel.app/review`)
    .then(res=>res.json())
    .then(data=>{
        setReviewadd(data)
        console.log(data);
    })
    .catch(e=>console.error(e))
},[])
 
    return (
        <div>
              <Helmet>
        <title>Service Deatils</title>
        
      </Helmet>
            <h1 className='text-4xl text-orange-600 font-semibold text-center mt-20'>Our Services Document</h1>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='mt-20' src={serviceimage} alt="serviceimage" /></figure>
                <div className="card-body">
                    <h2 className="text-orange-600 text-2xl font-semibold">{ServiceName}</h2>
                    <h2 className="text-gray-600 text-xl font-semibold">{serviceday}</h2>
                    <h2 className="text-gray-600 text-xl font-semibold">{price}</h2>
                    <p>{serviceDis}</p>
                </div>
            </div>


            {/* review section---------------- */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-5'>
            <div className='mt-24'>
            {
                        reviewadd?.map(reviewData=><Addedrevdata  reviewData={reviewData}></Addedrevdata>)
                    }
            </div>

                <div className='mt-20'>
                    <h1 className='text-orange-600 text-2xl text-center font-semibold'>Review</h1>
                    {
                        review?.map((review,index)=><Showreview key={index} review={review}></Showreview>)
                    }
                   
                </div>
            <div>

                   
          
         
              <form onSubmit={handleReview} className='max-w-screen-xl mx-auto mb-10'>
          <p className='text-2xl text-orange-600 font-semibold text-center mt-10'>Review Now</p>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 py-10 gap-5'>
      <input name='servicesname'  type="text" defaultValue={ServiceName} className="input  bg-slate-300  w-full" />
      <input name='price' type="text" defaultValue={price} className="input bg-slate-300   w-full" />
      <input name='email' type="email" defaultValue={user?.email || "undefined"}  className="input bg-slate-300   w-full" readOnly />
      </div>
      <textarea name='message' className="textarea textarea-bordered rounded-lg w-full h-25" placeholder="Enter a Review"></textarea>
      <input className="btn bg-orange-600 border-none w-1/2  mb-5 mt-5" type="submit" value='Submit' />
     
          </form>
           
           {/* <p className='text-2xl text-black font-bold text-center mt-20'>Please Login to Added Review!<Link className='text-orange-600' to='/login'>Login Now</Link>
           </p> */}
          
           
        
      </div>
            </div>
        </div>
    );
};

export default Deatils;