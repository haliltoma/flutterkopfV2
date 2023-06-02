import React, {useState} from 'react';
import {BsFillArrowDownCircleFill} from "react-icons/bs";

const FilterMenu = ({searchText,setSearchText}) => {
    return (
        <div className='w-[260px]  flex py-5 flex-col gap-3'>
            <FilterItem key={'deneme1'} name={'deneme1'} title={'title1'} setSearchText={setSearchText}  searchText={{searchText}} />
            <FilterItem key={'deneme2'} name={'deneme2'} title={'title2'} setSearchText={setSearchText}  searchText={{searchText}} />
            <FilterItem key={'deneme3'} name={'deneme3'} title={'title3'} setSearchText={setSearchText}  searchText={{searchText}} />
            <FilterItem key={'deneme4'} name={'deneme4'} title={'title4'} setSearchText={setSearchText}  searchText={{searchText}} />
            <FilterItem key={'deneme5'} name={'deneme5'} title={'title5'} setSearchText={setSearchText}  searchText={{searchText}} />
            <FilterItem key={'deneme6'} name={'deneme6'} title={'title6'} setSearchText={setSearchText}  searchText={{searchText}} />


        </div>
    );
};

const FilterItem = ({name,title,searchText,setSearchText})=>{
const [isOpen,setIsOpen]=useState(false)
    const handleSearchChange=(e)=>{
    console.log(e)
       if(e.target.checked){
           setSearchText(()=>{
               const prev = searchText;
               const change = prev.searchText+name
               return change;
           })
       }else{
           setSearchText(()=>{
               const prev = searchText;
               console.log(prev)
               const change = prev.searchText.replace(`${name}`,'')
               return change;
           })
       }
    }
    return (
        <div className='filterItem-list flex flex-col w-full px-3 gap-3'>
            <h6 className='cursor-pointer font-bold text-lg flex justify-between items-center px-2' onClick={()=>setIsOpen(!isOpen)}>baslik <BsFillArrowDownCircleFill className={`${isOpen ? 'arrowOpen' : 'arrowClose'} w-4 h-4`}/></h6>
            <ul className={`${isOpen ? 'listOpen' : 'listClose'} bg-gray-50 w-full`}>
                <li className='flex gap-3 hover:bg-gray-200 p-3 rounded cursor-pointer'><input id={`${title}/${name}`} onChange={handleSearchChange} className={'cursor-pointer'} type="checkbox"/> <label className={'cursor-pointer'} htmlFor={`${title}/${name}`}>{name}</label></li>
            </ul>
        </div>
    )
}


export default FilterMenu;