import React from 'react';
import { Helmet } from 'react-helmet-async';
import { toast, ToastContainer } from 'react-toastify';

const AddServices = () => {
    const tosty=()=>{
        toast("Successfully Added",{
            position:'top-center'
        })
    }
    const handleCheck=e=>{
        e.preventDefault()
        const form=e.target
        const ServiceName=form.ServiceName.value
        const serviceimage=form.serviceimage.value
        const serviceDis=form.serviceDis.value
        const price=form.price.value
        const postservice={
            ServiceName,
            serviceimage,
            serviceDis,
            price

        }

        fetch(' https://assignment-server-three.vercel.app/threeservices', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postservice),
})
  .then((response) => response.json())
  .then((data) => {
    form.reset()
    if(data.acknowledged){
       tosty()
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
    }
    return (
        <div>
            <Helmet>
        <title>AddServices</title>
        
      </Helmet>

<div>
                    <form onSubmit={handleCheck} className='max-w-screen-xl mx-auto bg-orange-200 px-10 py-10'>
                <div className='grid md:grid-cols-1 lg:grid-cols-2 py-10 gap-5 '>
                <input name='ServiceName'  type="text" placeholder="Enter a ServiceName" className="input input-bordered  w-full" />
                <input name='serviceimage' type="text" placeholder="Enter a serviceimage" className="input input-bordered  w-full" />
                <input name='serviceDis' type="text" placeholder="Enter a serviceDiscription" className="input input-bordered  w-full" />
                <input name='price' type="text" placeholder='Enter a price'  className="input input-bordered  w-full" />
                </div>
                <input className="btn bg-orange-600 text-white w-1/2 border-none mx-auto mb-5 mt-5" type="submit" value='Added Service' />
               
                    </form>
                </div>
            <ToastContainer/>
        </div>
    );
};

export default AddServices;