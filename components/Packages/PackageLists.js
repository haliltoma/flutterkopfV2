import React from 'react';
import PackageListItem from "@/components/Packages/PackageListItem";

const PackageLists = () => {
    return (
        <div className='w-full'>
            <div className='info flex justify-between w-full p-2 border-b border-solid'>
                <p><span className='font-bold'>Results</span> 8 Packages</p>
                <span className='font-bold'>
                    Sort By <span className='text-blue-400'>Search Relevance</span>
                </span>
            </div>
            <div className='w-full flex-col gap-4 flex min-h-[500px] '>
                <PackageListItem />
                <PackageListItem />
                <PackageListItem />
                <PackageListItem />
                <PackageListItem />
            </div>
        </div>
    );
};

export default PackageLists;