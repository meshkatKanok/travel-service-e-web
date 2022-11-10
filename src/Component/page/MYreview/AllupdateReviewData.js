import React, { useEffect, useState } from 'react';


const AllupdateReviewData = ({ review }) => {
    const [reviewdata, setReviewadd] = useState()
    const handleUpdate = (e) => {

        const from = e.target
        const servicesname = from.servicesname.value
        const message = from.servicesname.value;
        const info = {
            servicesname,
            message
        }
        console.log(info);

        fetch(`https://assignment-server-three.vercel.app/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),

        })
            .then(res => res.json())
            .then(data => {

                console.log(info);
                from.reset()
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        fetch(`https://assignment-server-three.vercel.app/review`)
            .then(res => res.json())
            .then(data => {
                setReviewadd(data)
                console.log(data);
            })
    }, [])

    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Edit Now</h3>
                    <div>
                        <form onSubmit={handleUpdate} className='max-w-screen-xl mx-auto mb-10'>
                            <div className='grid md:grid-cols-1 lg:grid-cols-2 py-10 gap-5'>
                                <input name='servicesname' type="text" className="input input-bordered   w-full" placeholder='Enter your Service Name' />
                            </div>
                            <textarea name='message' className="textarea textarea-bordered rounded-lg w-full h-25" placeholder="Enter a Review"></textarea>
                            <input className="btn bg-orange-600 border-none w-1/2  mb-5 mt-5" type="submit" value='Submit' />

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllupdateReviewData;