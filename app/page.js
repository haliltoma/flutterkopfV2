'use client'
import {BsCheck2Circle} from "react-icons/bs";
import Link from "next/link";
import {BiSearchAlt} from "react-icons/bi";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
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
            <main className="flex min-h-screen justify-center bg-gray-50 w-full flex-col">
                <section
                    className='search-bar w-full   bg-[#132030]  py-40 text-white flex flex-col gap-8 items-center justify-center'>
                    <h3 className='text-5xl'>FlutterKopf</h3>
                    <div className=' px-12 py-3 bg-[#35404d] flex gap-1 rounded-full items-center justify-center '>
                    <span className="search-button text-gray-500 cursor-pointer" onClick={handleSearchFind}>
                        <BiSearchAlt className='w-10 h-10'/>
                    </span>
                        <input type="text" placeholder='Search packages' value={searchText} onChange={handleSearch}
                               onKeyDown={keyPress}
                               className='bg-none  h-16 placeholder:text-gray-500 focus:border-none focus:outline-none text-3xl  placeholder:text-2xl bg-[#35404d]'/>
                    </div>
                    <div className="info flex justify-center text-center flex-col gap-2">
                        <p className='text-sm text-gray-300'>The official repository for Dart and Flutter app.</p>
                        <p className='text-sm text-gray-400 '>Supported by LaserKopf</p>
                    </div>
                </section>
                <div className="container flex flex-col">
                    <section className='py-6 items-center flex flex-col gap-3 '>
                        <h3 className='text-3xl text-blue-900'>Flutter Favorites</h3>
                        <p>Some of the packages that demonstrate the highest levels of quality, selected by the Flutter
                            Ecosystem Committee</p>
                        <div className='flex justify-center items-center flex-wrap gap-10'>
                            <div
                                className="favorite-packages w-60 h-52 flex flex-col bg-white shadow hover:shadow-lg  duration-100 rounded-xl p-4 justify-center  gap-3">
                                <Link href='#'
                                      className='font-medium text-blue-600 hover:text-blue-500  text-xl'>path_provider</Link>
                                <p className='line-clamp-3'>Flutter plugin for getting commonly used locations on host
                                    platform file systems,
                                    such</p>
                                <small
                                    className='flex gap-2 items-center cursor-pointer hover:text-blue-800 duration-300'><BsCheck2Circle/>flutter.dev</small>
                            </div>
                            <div
                                className="favorite-packages w-60 h-52 flex flex-col bg-white shadow hover:shadow-lg  duration-100 rounded-xl p-4 justify-center  gap-3">
                                <Link href='#'
                                      className='font-medium text-blue-600 hover:text-blue-500  text-xl'>path_provider</Link>
                                <p className='line-clamp-3'>Flutter plugin for getting commonly used locations on host
                                    platform file systems,
                                    such</p>
                                <small
                                    className='flex gap-2 items-center cursor-pointer hover:text-blue-800 duration-300'><BsCheck2Circle/>flutter.dev</small>
                            </div>
                            <div
                                className="favorite-packages w-60 h-52 flex flex-col bg-white shadow hover:shadow-lg  duration-100 rounded-xl p-4 justify-center  gap-3">
                                <Link href='#'
                                      className='font-medium text-blue-600 hover:text-blue-500  text-xl'>path_provider</Link>
                                <p className='line-clamp-3'>Flutter plugin for getting commonly used locations on host
                                    platform file systems,
                                    such</p>
                                <small
                                    className='flex gap-2 items-center cursor-pointer hover:text-blue-800 duration-300'><BsCheck2Circle/>flutter.dev</small>
                            </div>
                            <div
                                className="favorite-packages w-60 h-52 flex flex-col bg-white shadow hover:shadow-lg  duration-100 rounded-xl p-4 justify-center  gap-3">
                                <Link href='#'
                                      className='font-medium text-blue-600 hover:text-blue-500  text-xl'>path_provider</Link>
                                <p className='line-clamp-3'>Flutter plugin for getting commonly used locations on host
                                    platform file systems,
                                    such</p>
                                <small
                                    className='flex gap-2 items-center cursor-pointer hover:text-blue-800 duration-300'><BsCheck2Circle/>flutter.dev</small>
                            </div>
                        </div>
                    </section>
                    <section className='py-6 items-center flex flex-col gap-3'>
                        <h3 className='text-3xl text-blue-900'>Flutter Favorites</h3>
                        <p>Some of the packages that demonstrate the highest levels of quality, selected by the Flutter
                            Ecosystem Committee</p>
                        <div className='flex justify-center items-center flex-wrap gap-10'>
                            <div
                                className="favorite-packages w-60 h-52 flex flex-col bg-white shadow hover:shadow-lg  duration-100 rounded-xl p-4 justify-center  gap-3">
                                <Link href='#'
                                      className='font-medium text-blue-600 hover:text-blue-500  text-xl'>path_provider</Link>
                                <p className='line-clamp-3'>Flutter plugin for getting commonly used locations on host
                                    platform file systems,
                                    such</p>
                                <small
                                    className='flex gap-2 items-center cursor-pointer hover:text-blue-800 duration-300'><BsCheck2Circle/>flutter.dev</small>
                            </div>
                            <div
                                className="favorite-packages w-60 h-52 flex flex-col bg-white shadow hover:shadow-lg  duration-100 rounded-xl p-4 justify-center  gap-3">
                                <Link href='#'
                                      className='font-medium text-blue-600 hover:text-blue-500  text-xl'>path_provider</Link>
                                <p className='line-clamp-3'>Flutter plugin for getting commonly used locations on host
                                    platform file systems,
                                    such</p>
                                <small
                                    className='flex gap-2 items-center cursor-pointer hover:text-blue-800 duration-300'><BsCheck2Circle/>flutter.dev</small>
                            </div>
                            <div
                                className="favorite-packages w-60 h-52 flex flex-col bg-white shadow hover:shadow-lg  duration-100 rounded-xl p-4 justify-center  gap-3">
                                <Link href='#'
                                      className='font-medium text-blue-600 hover:text-blue-500  text-xl'>path_provider</Link>
                                <p className='line-clamp-3'>Flutter plugin for getting commonly used locations on host
                                    platform file systems,
                                    such</p>
                                <small
                                    className='flex gap-2 items-center cursor-pointer hover:text-blue-800 duration-300'><BsCheck2Circle/>flutter.dev</small>
                            </div>
                            <div
                                className="favorite-packages w-60 h-52 flex flex-col bg-white shadow hover:shadow-lg  duration-100 rounded-xl p-4 justify-center  gap-3">
                                <Link href='#'
                                      className='font-medium text-blue-600 hover:text-blue-500  text-xl'>path_provider</Link>
                                <p className='line-clamp-3'>Flutter plugin for getting commonly used locations on host
                                    platform file systems,
                                    such</p>
                                <small
                                    className='flex gap-2 items-center cursor-pointer hover:text-blue-800 duration-300'><BsCheck2Circle/>flutter.dev</small>
                            </div>
                        </div>
                    </section>
                    <section className='py-6 items-center flex flex-col gap-3'>
                        <h3 className='text-3xl text-blue-900'>Flutter Favorites</h3>
                        <p>Some of the packages that demonstrate the highest levels of quality, selected by the Flutter
                            Ecosystem Committee</p>
                        <div className='flex justify-center items-center flex-wrap gap-10'>
                            <div
                                className="favorite-packages w-60 h-52 flex flex-col bg-white shadow hover:shadow-lg  duration-100 rounded-xl p-4 justify-center  gap-3">
                                <Link href='#'
                                      className='font-medium text-blue-600 hover:text-blue-500  text-xl'>path_provider</Link>
                                <p className='line-clamp-3'>Flutter plugin for getting commonly used locations on host
                                    platform file systems,
                                    such</p>
                                <small
                                    className='flex gap-2 items-center cursor-pointer hover:text-blue-800 duration-300'><BsCheck2Circle/>flutter.dev</small>
                            </div>
                            <div
                                className="favorite-packages w-60 h-52 flex flex-col bg-white shadow hover:shadow-lg  duration-100 rounded-xl p-4 justify-center  gap-3">
                                <Link href='#'
                                      className='font-medium text-blue-600 hover:text-blue-500  text-xl'>path_provider</Link>
                                <p className='line-clamp-3'>Flutter plugin for getting commonly used locations on host
                                    platform file systems,
                                    such</p>
                                <small
                                    className='flex gap-2 items-center cursor-pointer hover:text-blue-800 duration-300'><BsCheck2Circle/>flutter.dev</small>
                            </div>
                            <div
                                className="favorite-packages w-60 h-52 flex flex-col bg-white shadow hover:shadow-lg  duration-100 rounded-xl p-4 justify-center  gap-3">
                                <Link href='#'
                                      className='font-medium text-blue-600 hover:text-blue-500  text-xl'>path_provider</Link>
                                <p className='line-clamp-3'>Flutter plugin for getting commonly used locations on host
                                    platform file systems,
                                    such</p>
                                <small
                                    className='flex gap-2 items-center cursor-pointer hover:text-blue-800 duration-300'><BsCheck2Circle/>flutter.dev</small>
                            </div>
                            <div
                                className="favorite-packages w-60 h-52 flex flex-col bg-white shadow hover:shadow-lg  duration-100 rounded-xl p-4 justify-center  gap-3">
                                <Link href='#'
                                      className='font-medium text-blue-600 hover:text-blue-500  text-xl'>path_provider</Link>
                                <p className='line-clamp-3'>Flutter plugin for getting commonly used locations on host
                                    platform file systems,
                                    such</p>
                                <small
                                    className='flex gap-2 items-center cursor-pointer hover:text-blue-800 duration-300'><BsCheck2Circle/>flutter.dev</small>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

