import React from 'react';
import Link from "next/link";
import {AiOutlineCheckCircle} from "react-icons/ai";

const PackageListItem = () => {
    return (<div className='flex flex-col py-4 px-3 shadow hover:shadow-md duration-150 gap-5'>
        <div className="package-header flex justify-between">
            <Link href='/package/2'
                  className="title font-medium  text-xl text-blue-600 hover:text-blue-500">theme_generator</Link>
            <div className='flex space-border footer-border h-10'>
                    <span className='p-3 flex flex-col justify-center items-center gap-2 border-black py-4'> <span>0</span> <span>LIKES</span></span>
                    <span className='p-3 flex flex-col justify-center items-center gap-2 border-black py-4'> <span>0</span> <span>LIKES</span></span>
                    <span className='p-3 flex flex-col justify-center items-center gap-2 border-black py-4'> <span>0</span> <span>LIKES</span></span>
                    <span className='p-3 flex flex-col justify-center items-center gap-2 border-black py-4'> <span>0</span> <span>LIKES</span></span>
                    <span className='p-3 flex flex-col justify-center items-center gap-2 border-black py-4'> <span>0</span> <span>LIKES</span></span>

            </div>
        </div>
        <div className="list-body flex gap-3 flex-col">
            <p>A command-line tool to generate Flutter theme files from Figma design tokens.</p>
            <div className='flex gap-3'>
                <span className='flex gap-3 items-center'>V<Link href='#' className='text-blue-500'>0.0.2</Link>(3 months ago)</span>
                <span className='flex items-center gap-3'><AiOutlineCheckCircle/> <Link href='#'
                                                                                        className='text-blue-500'>wive.be</Link></span>
            </div>
        </div>
        <div className="list-footer flex gap-5 ">
            <span className='bg-blue-200 text-blue-600 text-sm flex items-center rounded'>
                <span className='border-r text-xs font-medium border-solid border-blue-500 p-1.5'>SDK</span>
                <Link href='#' className=' text-xs p-1.5'>FLUTTER</Link>
            </span>
            <span className='bg-blue-200 text-blue-600 text-sm flex items-center rounded'>
                <span className='border-r text-xs font-medium border-solid border-blue-500 p-1.5'>SDK</span>
                <Link href='#' className=' text-xs p-1.5'>Android</Link>
                <Link href='#' className=' text-xs p-1.5'>IOS</Link>
                <Link href='#' className=' text-xs p-1.5'>MACOS</Link>
                <Link href='#' className=' text-xs p-1.5'>WEB</Link>
            </span>
        </div>
    </div>);
};
export default PackageListItem;