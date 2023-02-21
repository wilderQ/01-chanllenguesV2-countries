import { useUi } from '../hooks'
import { FaMoon } from 'react-icons/fa' 
import { FiMoon } from 'react-icons/fi' 

import '../styles/navbar.css'

export const Navbar = () => {

    const {theme, startToogleTheme} = useUi();

    const handleTheme = () => {
        startToogleTheme();
    }

    return (
        <div className='nav'>
            <div className="navbar">
                <div className="navbar-content">
                    <div className="navbar-content__left">
                        <h3>Where is the world?</h3>
                    </div>
                    <div className="navbar-content__rigth" onClick={handleTheme}>
                        {
                            theme
                            ?
                            <>
                                < FaMoon className='icon-color' />
                                <span>LigthMode</span>
                            </>
                            :
                            <>
                                < FiMoon className='icon-color' />
                                <span>DarkMode</span>
                            </>
                        }       
                    </div>
                </div>
            </div> 
        </div>
    )
}
