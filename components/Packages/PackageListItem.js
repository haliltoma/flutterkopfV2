import React from 'react';
import Link from "next/link";

const PackageListItem = () => {
    return (
        <div className='flex flex-col py-4 px-3 shadow hover:shadow-md duration-150'>
            <div className="package-header flex justify-between">
                <Link href='/package/2' className="title font-medium  text-2xl text-blue-600 hover:text-blue-500">theme_generator</Link>
                <div className='flex space-border footer-border '>
                    <span className='p-3 flex flex-col justify-center items-center gap-2 border-black'> <span>0</span> <span>LIKES</span></span>
                    <span className='p-3 flex flex-col justify-center items-center gap-2 border-black'> <span>0</span> <span>LIKES</span></span>
                    <span className='p-3 flex flex-col justify-center items-center gap-2 border-black'> <span>0</span> <span>LIKES</span></span>
                    <span className='p-3 flex flex-col justify-center items-center gap-2 border-black'> <span>0</span> <span>LIKES</span></span>
                </div>
            </div>
        </div>
    );
};

export default PackageListItem;