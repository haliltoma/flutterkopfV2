import React from 'react'
import FilterMenu from "@/components/Packages/FilterMenu";
import PackageLists from "@/components/Packages/PackageLists";

const Page = () => {
  return (
    <main className='flex w-full '>
      <FilterMenu/>
        <PackageLists/>
    </main>
  )
}

export default Page