import React, { useContext} from 'react';
import { AuthContex } from '../../Context/AuthProvider';

const Review = ({review,handleDelete,handleUpdate}) => {
    const {user}=useContext(AuthContex)
    const {
        servicesname,
        _id,
        message}=review

  
       
    return (
       <div>
         <div className='flex justify-center items-center max-w-screen-xl mx-auto '> 
          <div className=" mt-5 mb-10">
          <div className="flex justify-between items-center grid lg:grid-cols-3 mx-0  mt-5 max-w-screen-xl mx-auto  ">
              <div className="" style={{width:'200px'}}>
                <img className='' src={user?.photoURL} alt="" />
              </div>
              <div>
              <h1 className='text-lg'>{servicesname}</h1>
              <p>
                {message}</p>  
              </div>
              <button onClick={()=>handleDelete(_id)} className='btn border-none bg-orange-400 w-1/2 mx-5'>Delete</button> 
            
          </div>        
</div> 
{/* The button to open modal */}
<label  onClick={()=>handleUpdate(_id)} htmlFor="my-modal-3"  className="btn border-none bg-orange-400 w-32 mx-5">Edit</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Edit Now</h3>
    <div>    
      <form onSubmit='' className='max-w-screen-xl mx-auto mb-10'>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 py-10 gap-5'>
      <input name='servicesname'  type="text"  className="input input-bordered   w-full" placeholder='Enter your Service Name' />
      </div>
      <textarea name='message' className="textarea textarea-bordered rounded-lg w-full h-25" placeholder="Enter a Review"></textarea>
      <input className="btn bg-orange-600 border-none w-1/2  mb-5 mt-5" type="submit" value='Submit' />
     
          </form>
                </div>
  </div>
</div>
        </div>
       </div>
    );
};

export default Review;