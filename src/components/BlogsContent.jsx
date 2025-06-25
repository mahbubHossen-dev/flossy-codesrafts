import React from 'react';
import { blogsData } from '@/data/blogsData';
const BlogsContent = () => {

    console.log(blogsData)

    return (
        <div className='space-y-6'>
            {
                blogsData.map((blog, idx) => (
                    <div key={idx} className=' space-y-3'>
                        <div>
                            <img src={blog.image} className='w-full' alt="" />
                        </div>
                        <div className=' space-y-3'>
                            <div className='flex gap-6'>
                                <p className='bg-[#0e6efd] px-2 w-fit rounded-xl'>{blog.author}</p>
                                <p className='text-gray-500'>{blog.readTime}</p>
                                <p className='text-gray-500'>{blog.comments} comments</p>
                            </div>
                            <div>
                                <h2 className='text-2xl'>{blog.title}</h2>
                                <p className='mt-3'>{blog.description}</p>
                            </div>
                            <div>
                                <button className='bg-[#0e6efd] py-2 px-4 text-white font-medium rounded-md'>Learn More</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogsContent;