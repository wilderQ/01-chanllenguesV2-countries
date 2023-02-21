import { useEffect } from "react"
import { Navbar } from "./components"
import { HomeCountrys, SelectCountrie } from "./views"
import {usecountries, useUi} from './hooks'

export const CountrysApp = () => {
    
    const {theme} = useUi();
    const {isLoading, isActive ,startLoadingRegiones } = usecountries();
    
    useEffect(() => {
        startLoadingRegiones()
    }, [])

    return (
        <div className={`App ${theme? 'dark-mode':'ligth-mode' }` } >
            <Navbar />
            {
                (isLoading)
                ? <h1>Cargando...</h1>
                :(!isActive)
                ? <HomeCountrys/>
                : <SelectCountrie /> 
            }
        </div>
    )
}
