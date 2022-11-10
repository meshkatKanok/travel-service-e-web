import React from 'react';
import { FaArrowAltCircleRight} from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Homethree.css'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Homethree = ({ item }) => {
    const { ServiceName, serviceDis, serviceimage, price, _id
    } = item
    return (

        <div>
            <div className="card card-compact bg-base-100 shadow-xl h-96 mt-10">
           
                <PhotoProvider>
          <PhotoView src={serviceimage}>
          <figure><img src={serviceimage} alt="serviceimage" /></figure>
          </PhotoView>
    </PhotoProvider>

                <div className="card-body">
                    <h2 className="card-title text-2xl font-semibold mt-2 text-orange-600">{ServiceName}</h2>
                    {
                        serviceDis.length > 200 ? <>{serviceDis.slice(0, 100) + '...'}
                        </> : <p className='mt-4'>{serviceDis}</p>
                    }
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="card-actions justify-end mt-1 cardfooter">
                        <p className='text-lg font-semibold'>{price}</p>
                        <Link to={`/services/${_id}`}><button className="btn btn-warning bg-orange-600"><FaArrowAltCircleRight className='text-white'></FaArrowAltCircleRight></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homethree;