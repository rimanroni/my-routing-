import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
             <NavLink to="/home"> Home</NavLink>
             <NavLink to='topnews'>Top News </NavLink>
             <NavLink to='news'> News </NavLink>
             <NavLink to='cricket'>Cricket</NavLink>
             <NavLink to='fotball'>Fotball</NavLink>
             </nav>
        </div>
    );
};

export default Navbar;