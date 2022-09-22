import React from 'react';
import{ FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({title, width}) => {

  return (
    <Link to="/">
    <header className='Header'>

        <h1>{title}</h1>
        {width < 768 ? <FaMobileAlt/>
          : width < 992 ? <FaTabletAlt/>
            : <FaLaptop/>}   
    </header>
    </Link>   
  )
}

export default Header