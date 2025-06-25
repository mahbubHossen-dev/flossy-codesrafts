import BlogsContent from '@/components/BlogsContent';
import BlogSidebar from '@/components/BlogSidebar';
import React from 'react';

const Blog = () => {
    return (
        <div className='w-full px-5 lg:px-8 xl:px-[8%] grid md:grid-cols-12 pt-24 gap-8'>
            <div className='md:col-span-8'>
                <BlogsContent />
            </div>
            <div className='md:col-span-4'>
                <BlogSidebar />
            </div>
        </div>
    );
};

export default Blog;