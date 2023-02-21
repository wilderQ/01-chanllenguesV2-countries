import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { usecountries } from "../hooks"
import '../styles/selectcountrie.css'
export const SelectCountrie = () => {

    const { startEventActive, countrieActive, bordersCountrie} = usecountries();    
    const [currencies, setCurrencies] = useState("")
    const [languages, setLanguages] = useState("")
    const [bordersCountr, setBordersCountr] = useState([])

    const handleClick = () => {
        startEventActive(null, false)  
    }
    const handleClickBorder = (objeto) => {
        startEventActive(objeto, true)
    }

    const arreglarDatos = () => {
        Object.entries(countrieActive.currencies).forEach(([key, value]) => {
            setCurrencies(value.name)
        });
        Object.entries(countrieActive.languages).forEach(([key, value]) => {
            setLanguages(value)
        });
    }

    useEffect(() => {
        window.scrollTo(0,0)
        arreglarDatos()
        setBordersCountr(bordersCountrie())
    }, [countrieActive])
    


    return (
        <div className="homeCountrys" >
            <div className="button" onClick={handleClick}>
                <FaArrowLeft className="icon-color" />
                <span className="btn-text" >Atras</span>
            </div>
            <div className="contenido">
                <div className="contenido-img">
                    <img src={countrieActive.flags[0]} alt={countrieActive.name.common} />
                </div>
                <div className="contenido-text">
                    <h2>{countrieActive.name.common }</h2>
                    <div className="contenido-text__column">
                        <div className="column-parrafo">
                            <p>Native Name: <span>{countrieActive.nativeName} </span></p>
                            <p>Population: <span>{countrieActive.population.toLocaleString('es-MX')} </span> </p>
                            <p>Region: <span>{countrieActive.region} </span> </p>
                            <p>Sub Region: <span>{countrieActive?.subregion} </span> </p>
                            <p>Capital: <span>{countrieActive.capital} </span> </p>
                        </div>
                        <div className="column-parrafo">
                            <p>Top Level Domain: <span>{countrieActive.tld[0]} </span></p>
                            <p>Currencies: <span>{currencies} </span> </p>
                            <p>Languages:  <span>{languages} </span> </p>
                        </div> 
                    </div>
                    <div className="items-borders">
                        <span className="span-border">Borders: </span>
                        <div className="items">
                        {
                            (!countrieActive.borders)
                            ? <span className="span-border" >No cuenta con Borders</span>
                            :bordersCountr.map(border => (
                                <span key={border.name.common} onClick={()=> handleClickBorder(border) } className="border-item" >{border.name.common} </span> 
                            ))                
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
