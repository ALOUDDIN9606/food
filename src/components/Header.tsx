import { NavLink } from 'react-router-dom'
import { FaHome, FaBookmark, FaUtensils } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg p-6">
        <div className="container mx-auto flex items-center justify-between">
            {/* Logo ikonkasi chap tomonda */}
            <div className="flex items-center gap-3">
                <FaUtensils className="text-4xl text-white" />
                <span className="text-4xl font-bold text-white">Recipes</span>
            </div>

            {/* NavLink */}
            <ul className='flex items-center gap-8'>
                <li>
                    <NavLink 
                        className="text-2xl font-bold text-white hover:text-yellow-300 flex items-center gap-2 transition-colors duration-300 ease-in-out"
                        to={"/"}
                    >
                        <FaHome className="text-xl" />
                        <span>Recipes</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className="text-2xl font-bold text-white hover:text-yellow-300 flex items-center gap-2 transition-colors duration-300 ease-in-out"
                        to={"/saved"}
                    >
                        <FaBookmark className="text-xl" />
                        <span>Saved</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header
