import {} from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="shadow-md p-8">
        <div className="container ">
            <ul className='flex items-center justify-center gap-6'>
                <NavLink className="text-3xl" to={"/"}>
                    <span>Recepies</span>
                </NavLink>
                <NavLink className="text-3xl" to={"/saved"}>
                    <span>Saved</span>
                </NavLink>
            </ul>
        </div>
    </header>
  )
}

export default Header