import React from 'react';
import { getJSON } from '../../utility/data';
import { useLoaderData } from 'react-router-dom';


export async function loader() {
    const data = await getJSON('https://learning-point-server-ten.vercel.app/blog');
    return data;
}

const Blog = () => {
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div className='w-screen md:w-8/12 lg:w-6/12 mx-auto'>
        {
            blogs.map(blog=><div key={blog?._id} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
            <div className="collapse-title text-xl font-medium">
              {
                blog?.que
              }
            </div>
            <div className="collapse-content">
              <p>
                {
                    blog?.ans
                }
              </p>
            </div>
          </div>)
            
        }
        </div>
    );
};

export default Blog;