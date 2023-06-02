'use client'
import React, {useState} from 'react'
import {BiSearchAlt} from "react-icons/bi";
import {useRouter} from "next/navigation";
import FilterMenu from "@/components/Packages/FilterMenu";
import PackageLists from "@/components/Packages/PackageLists";

const Page = () => {
    const [searchText, setSearchText] = useState('')
    const router = useRouter()
    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }
    const handleSearchFind = () => {
        router.push(`/packages/?q=${searchText}`)
    }
    const keyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchFind()
        }
    }
    return (
        <>
            <main>
            <section className='search-bar w-full   bg-[#132030]  py-4 text-white flex flex-col gap-8 items-center justify-center'>
                <div className=' px-12 py-1 bg-[#35404d] flex gap-1 rounded-full items-center justify-center '>
                    <span className="search-button text-gray-500 cursor-pointer" onClick={handleSearchFind}>
                        <BiSearchAlt className='w-10 h-10'/>
                    </span>
                    <input type="text" placeholder='Search packages' value={searchText} onChange={handleSearch}
                           onKeyDown={keyPress}
                           className='bg-none  h-16 placeholder:text-gray-500 focus:border-none focus:outline-none text-3xl  placeholder:text-2xl bg-[#35404d]'/>
                </div>
            </section>
                <div className='container mx-auto flex min-h-screen'>
                    <FilterMenu searchText={searchText} setSearchText={setSearchText} />
                    <PackageLists/>
                </div>
            </main>

        </>
    )
}

export default Page