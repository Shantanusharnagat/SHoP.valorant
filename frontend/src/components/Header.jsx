import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser, FaServicestack, FaDev, FaHome} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

const Header = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user}=useSelector((state)=> state.auth)

    const onLogout=()=>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>Valo-Shop</Link>
        </div>
        <ul>
            {user ? (<>
                <li>
                <Link to='/'>
                    <FaHome/> Home
                </Link>
             </li>
                <li>
                <Link to='/services'>
                    <FaServicestack/> Services
                </Link>
             </li>
             <li>
                <Link to='/developers'>
                    <FaDev/> Developers
                </Link>
             </li>
            <li>
                 <button className='btn' onClick={onLogout}>
                     <FaSignOutAlt/> Logout
                 </button>
             </li>
            
             </>
             
             
             
             ) : (<>
                 <li>
                 <Link to='/login'>
                     <FaSignInAlt/> Login
                 </Link>
             </li>
             <li>
                 <Link to='/register'>
                     <FaUser/> Register
                 </Link>
             </li>
            </>)}
           
        </ul>
    </header>
  )
}

export default Header