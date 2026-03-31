import React from 'react';
import logoImg from '../../assets/digitools.png';
import {IoCartOutline} from "react-icons/io5";

const Navbar = ({totalCartItems}) => {
    return (
        <nav className="navbar bg-base-100 shadow-sm p-4">
            <div className="container flex">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Login</a></li>
                            <li><a className="btn"><IoCartOutline></IoCartOutline><span className="badge badge-sm badge-secondary">{totalCartItems}</span></a></li>
                            <li><a className="btn">Get Started</a></li>
                        </ul>
                    </div>
                    <img src={logoImg} alt=""/>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>

                    </ul>
                </div>
                <div className="navbar-end gap-4 font-semibold hidden lg:flex">
                    <button className="btn bg-white border-none"><IoCartOutline></IoCartOutline><div className="badge badge-sm badge-secondary">{totalCartItems}</div></button>
                    <a href="">Login</a>
                    <a className="btn">Get Started</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;