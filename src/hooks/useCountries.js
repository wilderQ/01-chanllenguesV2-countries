import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllCountrys, setCountrieActive, setIsSearch, setIsSelectRegion, setLoadingCountrys, setSearchBusqueda } from "../store/countrys/countrySlice";


export const usecountries = () => {

    const dispatch = useDispatch();
    const {isLoading,isActive,isSelectedRegion, isSearch, searchCountrys  , AllCountrys, countrieActive } = useSelector(state => state.countries);

    const dataView = useMemo(() =>{
        let data =[]
        if(isSelectedRegion === 'All'){
            return AllCountrys
        }
        AllCountrys.forEach( countrie => {
            if(countrie.region === isSelectedRegion){
                data.push(countrie)
            }
        });
        return data
    } , [isSelectedRegion])

    const bordersCountrie = ()=>{
        let countries = []
        AllCountrys.forEach(countrie => {
            if(!!countrieActive.borders){
                countrieActive.borders.map(obj => {
                    if(countrie.cca3 === obj){
                        countries.push(countrie)
                    }
                })
            }   
        })
        return countries
    }

    const startLoadingRegiones  = async() =>{
        dispatch(setLoadingCountrys(true))
        const response = await fetch(`https://restcountries.com/v3/all`);
        if (!response.ok) {
          throw json({ errorMsg: 'Could not load the country data' }, { status: 500, statusText: 'Could not load' });
        }
        const data = await response.json();
        dispatch(setAllCountrys(data));
        dispatch(setLoadingCountrys(false))
    }
    const startSetFilterSelectedRegion = (region="" ) => {
        dispatch(setIsSelectRegion(region))
    }

    const startEventActive = (countrie=null,active=false ) => {
        dispatch(setCountrieActive({
            isActive: active,
            countrieActive: countrie
        }))
        dispatch(setIsSearch(""));
    }

    const startFilterSearch = (search) => {
        dispatch(setIsSearch(search))
        const regex = new RegExp(search, "gi");
        const searchResults = AllCountrys.filter(item=> regex.test(item.name.common))
        dispatch(setSearchBusqueda(searchResults))
        
    }


    return {
        //*propiedades
        isLoading,
        isActive,
        isSelectedRegion,
        isSearch,
        AllCountrys,
        countrieActive,
        bordersCountrie,
        searchCountrys,
        //*metodos
        startLoadingRegiones,
        startSetFilterSelectedRegion,
        dataView,
        startEventActive,
        startFilterSearch
    }

}