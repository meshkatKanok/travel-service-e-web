import React, { useContext} from 'react';
import { AuthContex } from '../../Context/AuthProvider';
import AllupdateReviewData from './AllupdateReviewData';
 

const Review = ({handleDelete,review}) => {
    const {user}=useContext(AuthContex)
    const {
        servicesname,
        _id,
        message}=review;

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
<label  htmlFor="my-modal-3"  className="btn border-none bg-orange-400 w-32 mx-5">Edit</label>
{/* Put this part before </body> tag */}
<AllupdateReviewData review={review} handleDelete={handleDelete}></AllupdateReviewData>
        </div>
       </div>
    );
};

export default Review;