import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
   
    return (
        <div className="card w-80 glass m-1 md:m-3 lg:md-5 bg-base-100 shadow-xl ">
            <figure>
                <img
                    src={course?.img}
                    alt={course?.img}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{course?.title}</h2>
                <p className='my-1'>{course?.description}</p>
                <p className='my-1'><span className='font-bold'>Price : </span>${course?.price}</p>
                <ul className=" mx-2 list-outside list-disc">
                   

                        {
                            course?.topics.map((topic, _idx) => <li key={_idx} className=" ">
                                {topic}
                            </li>)
                        }

                  
                </ul>
                <div className="card-actions justify-end">
                   <Link to={`/course/${course._id}`}> <button className="btn btn-primary">See More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;

