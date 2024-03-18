import React, { useContext } from 'react'
import { IoSearch } from "react-icons/io5";
import { MainContext } from '../MainContext';

export const Search = () => {

  const {search, setSearch} = useContext(MainContext)

  return (
    <div className='search'>
        <div className="icon">
        <IoSearch />
        </div>
        <input type="text" 
        placeholder='Search Brands'
        onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}