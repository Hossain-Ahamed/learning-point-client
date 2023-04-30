import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData();
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="h-2">
                You successfully purchased our <span className='font-bold'>'{data?.title}'</span>  course 
            </div>
        </div>
    );
};

export default Checkout;