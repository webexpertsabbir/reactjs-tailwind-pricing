import React, { useState } from 'react';
import Link from './Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false);


    const routes = [
        {id: 1, name: 'Home', path: '/home'},
        {id: 2, name: 'Products', path: '/products'},
        {id: 3, name: 'Order', path: '/order'},
        {id: 4, name: 'Contact', path: '/contact'},
        {id: 5, name: 'About', path: '/about'},
    ]
    
    return (
        <nav className=' bg-yellow-300'>

            <div onClick={() => setOpen(!open)} class="h-8 w-8 md:hidden  bg-yellow-300 ">
                {
                    open ? <Bars3Icon/> : <XMarkIcon/>
                }
            </div>

            {/* {
                open ? <Bars3Icon onClick={() => setOpen(!open)} class="h-8 w-8 "/> : <XMarkIcon onClick={() => setOpen(!open)} class="h-8 w-8 "/> 
 
            } */}

            {/* <Bars3Icon onClick={() => setOpen(!open)} class="h-8 w-8 "/> */}
            {/* <span>{open ? 'open' : 'close'}</span> */}
            <ul className={`md:flex bg-yellow-300 w-full justify-center absolute duration-500 ease-in md:static  ${open ? 'top-8' : 'top-[-140px]'}`}>
                {
                    routes.map(route => <Link
                    key={route.id}
                    route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;