import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Homethree from './Homethree';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    const data=useLoaderData()
    return (
        
        <div>
           <Helmet>
        <title>Home</title>
        
      </Helmet>
            <h1 className='text-4xl font-bold text-center mt-10 mb-10 text-orange-600'>Our Most Popular Services</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-10 max-w-screen-xl mx-auto 0 mt-10'>
            {
              data.map(item=><Homethree key={item._id} item={item}>
              </Homethree>)  
            }
            
        </div>
        {
           <Link to={`/service`}><button className="btn border-none rounded-none px-5 bg-orange-600 mx-auto flex justify-center mt-8">See All</button></Link>
            
  
           
        }

         {/* new section----------start */}

         <section>
            <div  className='grid lg:grid-cols-2 md:grid-cols-2 max-w-screen-xl mx-auto p-6 mt-20 mb-20'>
                <div>
                    <img  className="h-96" src='https://www.naturecamptravels.com/images/side-image.jpg'/>
                </div>
                <div>
                    <h1  className='text-orange-600  text-5xl mb-3'>NATURECAMP TRAVELS</h1>
                    <h2 className='text-blue-700 font-semibold text-4xl mb-3'>THE BEST TOUR PACKAGES AND MEMORIES</h2>
                    <p>Nature Camp Travels was established with the aim of creating tailor-made holidays and unrivalled escorted journeys. We work as a team and try to cover the entire north-east region of the country with different tour packages. We genuinely care for customer's choice and hence have been successful in satisfying them from our ends. We are committed to offering travel services of the highest quality, combining our energy and enthusiasm, with our years of experience.Our greatest satisfaction comes in serving large numbers of satisfied clients who have experienced the joys and inspiration for travel. The dedication that we have in our team will leave you completely at peace once you head on with us.Our passion in travelling has led us to profession. And, when your passion meets your profession the magic that it creates leaves no wonders. Similarly when we travel with you, we feel that you should get everything that we might need in the journey. That's how we plan our trips.This individuality of our organisation has made us the leading adventure Travel Company from North East and Eastern India.</p>

                </div>
            </div>
        </section>
        {/* section -------------------------end */}


{/* section One---------------- */}

<section className='mt-20 mb-20'>
    <h1 className='text-center text-gray-600'>SIMPLY AMAZING PLACES</h1>
    <h1 className='text-center font-semibold text-3xl text-black'>POPULAR DESTINATIONS</h1>
<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-screen-xl mx-auto mt-20'>
<div className="card  h-96">
  <figure><img className='h-80' src="https://www.naturecamptravels.com/nav_pics/north-sikkim-tour.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" text-black text-lg font-semibold text-center">NORTH SIKKIM</h2>
    <div className="card-actions justify-end">
    <button className="btn btn-primary mx-auto  bg-orange-600 border-none rounded-none">Read more</button>
    </div>
  </div>
</div>
<div className="card   h-96">
  <figure><img className='h-80' src="https://www.naturecamptravels.com/nav_pics/kashmir2_2393438b.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className="text-black text-lg font-semibold text-center">KASHMIR</h2>
    <div className="card-actions justify-end">
    <button className="btn btn-primary mx-auto  bg-orange-600 border-none rounded-none">Read more</button>
    </div>
  </div>
</div>

<div className="card   h-96">
  <figure><img src="https://www.naturecamptravels.com/nav_pics/IMG_20151106_085738.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className="text-black text-lg font-semibold text-center">JUNGLE CAMPS</h2>
    <div className="card-actions justify-end">
    <button className="btn btn-primary mx-auto  bg-orange-600 border-none rounded-none">Read more</button>
    </div>
  </div>
</div>


<div className="card  h-96">
  <figure><img className='h-80' src="https://www.naturecamptravels.com/nav_pics/sillery_gaon_heaven_valley.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className="text-black text-lg font-semibold text-center">HIMALAYAN HOMESTAY</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary mx-auto  bg-orange-600 border-none rounded-none">Read more</button>
    </div>
  </div>
</div>
</div>

</section>

{/* section One End--------------------- */}

        </div>
    );
};

export default Home;