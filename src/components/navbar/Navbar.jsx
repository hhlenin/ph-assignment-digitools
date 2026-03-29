import React from 'react';
import logoImg from '../../assets/digitools.png';
import {IoCartOutline} from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 shadow-sm">
            <div className="container flex">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <img src={logoImg} alt=""/>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
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
                <div className="navbar-end gap-5 font-semibold">
                    <button className="btn bg-white border-none"><IoCartOutline></IoCartOutline><div className="badge badge-sm badge-secondary">+99</div></button>
                    <a href="">Login</a>
                    <a className="btn">Get Started</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;