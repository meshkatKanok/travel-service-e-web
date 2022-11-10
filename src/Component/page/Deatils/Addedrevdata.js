import React, { useContext } from 'react';
import { AuthContex } from '../../Context/AuthProvider';

const Addedrevdata = ({reviewData}) => {
    const {user}=useContext(AuthContex)
    const {message}=reviewData
  
    return (
        <div>
            <div className="overflow-x-auto w-full mt-5 mb-10">
        <table className="table w-full">
          <tbody>
            
                <div className="flex items-center space-x-3 mt-5 mx-20">
               
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                    <p className="badge badge-ghost badge-sm">{message}</p>
                </div>
          </tbody>
       
          
        </table>
      </div>
    
            
        </div>
    );
};

export default Addedrevdata;