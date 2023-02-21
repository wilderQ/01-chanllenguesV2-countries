import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "../store/ui/uiSlice"

export const useUi = () => {

    const {theme} = useSelector(state => state.ui)
    const dispatch = useDispatch()

    const startToogleTheme = () => {
        dispatch(setTheme())
    }

    return {
        ///propiedades
        theme,

        //metodos
        startToogleTheme
    }

}
