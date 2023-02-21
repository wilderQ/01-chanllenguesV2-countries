import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { usecountries } from '../hooks'
import '../styles/selectsearch.css'

export const SelectSearch = () => {

    const {startSetFilterSelectedRegion, startFilterSearch  } = usecountries();

    const [search, setSearch] = useState("")
    
    const handleSelect = ({target}) => {
        startSetFilterSelectedRegion(target.value)
    }
    const handleSearch = ({target}) => {
        setSearch(target.value)
        startFilterSearch(target.value)
    }

    const handleSumit = (event) => {
        event.preventDefault();
        startFilterSearch(search)
        setSearch("")
    }
    return (
    <div className='selectBusqueda'>
        <form className="busqueda" onSubmit={handleSumit}>
            <div className="busqueda-form">
                <FiSearch className='icon-color' />
                <input 
                    onChange={handleSearch}
                    type="text"
                    name='search' 
                    value={search}
                    placeholder='Search for a country'
                />
                <input type="submit" style={{display:'none'}}  value="" />
            </div>
        </form>
        <select name='select'  onChange={handleSelect} >
            <option value="All">All to Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>

    </div>
  )
}
