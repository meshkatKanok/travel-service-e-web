import React, {useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Review from './Review';

const Myreview = () => {
    const [deletereview,setDelete]=useState([])
    const notify = () => toast("Delete Successfully",{
        position:'top-center'
    });

    const handleDelete=(id)=>{
        
            fetch(`https://assignment-server-three.vercel.app/review/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount === 1){
                   notify()
                    const reamaing=deletereview.filter(reviw=>reviw._id!==id)
                    setDelete(reamaing)
                }
            })
            }

useEffect(()=>{
    fetch(`https://assignment-server-three.vercel.app/review`)
    .then(res=>res.json())
    .then(data=>{
        setDelete(data)
      
    })
    .catch(e=>console.error(e))
},[])


    return (
        <div>
              <Helmet>
        <title>My Review</title>
        
      </Helmet>
                 <h1 className='text-5xl text-orange-500  text-center font-semibold mt-10'>MY Review</h1>
                 <ToastContainer/>
            {
                deletereview.length===0?<p className='text-black text-4xl font-bold pb-5 mx-10'>
            No Review Were Added
                </p>  :
            <div>
                     {
                        deletereview?.map(review=><Review key={review._id}  review={review} handleDelete={handleDelete}>
                    
                        </Review>)
                         }
                     </div>

                        }
                
              
               
        </div>
    );
};

export default Myreview;