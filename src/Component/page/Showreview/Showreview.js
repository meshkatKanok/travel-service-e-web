import React from 'react';

const Showreview = ({review}) => {
    const {reviewdata,reviewimg}=review
    return (
        <div className="overflow-x-auto w-full mt-5 mb-10">
        <table className="table w-full">
          <tbody>
            
                <div className="flex items-center space-x-3 mt-5 mx-20">
               
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={reviewimg} alt="Avatar Tailwind CSS Component" />
                    </div>
                    <p className="badge badge-ghost badge-sm">{reviewdata}</p>  
                </div>
          </tbody>
       
          
        </table>
      </div>
    );
};

export default Showreview;