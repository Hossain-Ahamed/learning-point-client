import React, { useEffect } from 'react';
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { getJSON } from '../../../utility/data';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';


const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export async function loader() {
    const data = await getJSON('https://learning-point-server-ten.vercel.app/courses');
    return data;
}


const Courses = () => {
    const courses = useLoaderData();


    //loading
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if(courses){
            setLoading(false);
            return;
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        setLoading(true);

    },[courses]);



    return (

        <>
            {
                loading ?
                    <div className="sweet-loading h-screen flex items-center">
            
                        <ClipLoader
                            cssOverride={override}
                            size={100}
                            color={"#123abc"}
                            loading={loading}
                            speedMultiplier={1.5}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    :
                    <div className='block md:grid grid-cols-8 '>

                        <ul className="hidden md:block col-span-2 menu p-4 bg-base-100 text-base-content">
                            {
                                courses.map(item => <li
                                    key={item?._id}>
                                    <Link
                                        to={`/course/${item._id}`}
                                    >
                                        {item?.title}
                                    </Link>

                                </li>)
                            }
                        </ul>

                        <div className=" md:col-span-6 courses-container flex justify-center flex-wrap">
                            {
                                courses.map(item => <CourseCard
                                    key={item?._id}
                                    course={item}></CourseCard>)
                            }

                        </div>
                    </div>
            }
        </>

    );
};

export default Courses;