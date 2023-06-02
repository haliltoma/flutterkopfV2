import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className='w-full bg-[#27323a] flex h-12'>
            <ul className='footer-border  flex  justify-center w-full items-center'>
                <li className='px-4 text-white hover:text-gray-400 text-gray-200 duration-150 '><Link href='#'>Dart language</Link></li>
                <li className='px-4 text-white hover:text-gray-400 text-gray-200 duration-150 '><Link href='#'>Policy</Link></li>
                <li className='px-4 text-white hover:text-gray-400 text-gray-200 duration-150 '><Link href='#'>Terms</Link></li>
                <li className='px-4 text-white hover:text-gray-400 text-gray-200 duration-150 '><Link href='#'>Api Terms</Link></li>
                <li className='px-4 text-white hover:text-gray-400 text-gray-200 duration-150 '><Link href='#'>Security</Link></li>
                <li className='px-4 text-white hover:text-gray-400 text-gray-200 duration-150 '><Link href='#'>Privacy</Link></li>
                <li className='px-4 text-white hover:text-gray-400 text-gray-200 duration-150 '><Link href='#'>Help</Link></li>
            </ul>
        </footer>
    );
};

export default Footer;