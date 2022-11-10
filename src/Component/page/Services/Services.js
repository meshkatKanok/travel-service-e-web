import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesItem from './ServicesItem';

const Services = () => {
    const netServices=useLoaderData();
    console.log(netServices);
    return (
        <div>
             <h1 className='text-4xl font-bold text-center mt-20 mb-10 text-orange-600'>Our Most Popular Services</h1>
             <div className='max-w-screen-xl m-auto grid md:grid-cols-3 lg:grid-cols-3 gap-10 mb-20'>
            {
                netServices.map(service=><ServicesItem key={service._id} service={service}></ServicesItem>)
            }
        </div>
        </div>
       
    );
};

export default Services;