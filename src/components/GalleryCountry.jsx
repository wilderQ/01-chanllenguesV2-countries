

import { usecountries } from '../hooks'
import '../styles/gallerycountry.css'

export const GalleryCountry = ({countries=[]}) => {

    const {startEventActive} = usecountries();

    const handleSelectCard = (objeto) => {
        startEventActive(objeto, true)
    }

    return (
        <div className='galleryCountry'>
            {
            countries.map( country => (
                <div className="card" key={country.name.common} onClick={()=>handleSelectCard(country)}  >
                    <div className="card-img" >
                        <img src={country.flags[0] } alt={country.name.common} loading='lazy' />
                    </div>
                    <div className="card-text">
                        <h4>{country.name.common }</h4>
                        <p>Population: <span>{country.population} </span></p>
                        <p>Region: <span>{country.region} </span> </p>
                        <p>Capital: <span>{country.capital} </span> </p>
                    </div>
                </div>
            ))
            }    
            
        </div>
    )
}
