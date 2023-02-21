import { GalleryCountry, SelectSearch } from '../components'
import { usecountries } from '../hooks';
import '../styles/homecountrys.css'
export const HomeCountrys = () => {


  const { dataView, isSearch, searchCountrys} = usecountries();

  return (
    <div className='homeCountrys'>
      <SelectSearch />
      {
        (isSearch.length === 0)
        ? <GalleryCountry countries={dataView}/>
        : <GalleryCountry countries={searchCountrys}/>
      }
     
    </div>
  )
}
