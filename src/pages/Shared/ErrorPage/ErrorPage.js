import React from 'react';

const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="h-2">
                <h2 className='text-center font-semibold text-lg'>OOPS!!</h2>
                <p  className='text-center'>some error occured</p>
                <p className='text-center'>404 not found </p>
            </div>
        </div>
    );
};

export default ErrorPage;