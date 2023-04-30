import React from 'react';
import { getJSON } from '../../../utility/data';
import { Link, useLoaderData } from 'react-router-dom';

export async function loader({ params }) {

    return await getJSON(`https://learning-point-server-ten.vercel.app/courses/${params?.courseID}`);
}

const Course = () => {

    const data = useLoaderData();
   


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={data?.img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{data?.title}</h1>
                    <p className="py-6">{data?.description}</p>
                    <p className="py-6"><span className='font-bold'>Price : </span>${data?.price}</p>
                    <ul className=" mx-2 list-outside list-disc mb-9">


                        {
                            data?.topics.map((topic, _idx) => <li key={_idx} className=" ">
                                {topic}
                            </li>)
                        }


                    </ul>

                    <Link to={`/course/checkout/${data?._id}`}>
                        <button className="btn btn-primary" >Buy Premium</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Course;