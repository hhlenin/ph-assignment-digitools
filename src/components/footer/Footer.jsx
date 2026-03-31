import React from 'react';
import footerImg from '../../assets/DigiTools-footer.png';
import {FaInstagram, FaX, FaFacebook} from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#101727] pt-15 ">
            <div className="container">
                <div className="md:grid grid-cols-7 gap-6 pb-10 text-white">
                    <div className="md:col-span-3 xl:col-span-2">
                        <img src={footerImg} alt="" className="mb-4"/>
                        <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className="col-span-4 grid grid-cols-3 sm:gap-12 pt-5">
                        <div className="md:pl-9">
                            <h4 className="text-xl font-medium mb-4">Product</h4>
                            <ul className="sm:space-y-4">
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Templates</li>
                                <li>Integrations</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-xl font-medium mb-4">Company</h4>
                            <ul className="sm:space-y-4">
                                <li>About</li>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Press</li>

                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-medium mb-4">Resources</h4>
                            <ul className="sm:space-y-4">
                                <li>Documentation</li>
                                <li>Help Center</li>
                                <li>Community</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>

                    <div className="md:col-span-7 xl:col-span-1 place-items-center pt-5">
                        <h4 className="text-center text-xl font-medium mb-4">Social Links</h4>
                        <div className="grid grid-cols-3 gap-2 md:gap-4 place-items-center">
                            <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                                <FaInstagram className="text-black h-5"></FaInstagram>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                                <FaFacebook className="text-black h-8"></FaFacebook>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                                <FaX className="text-black h-5"></FaX>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider before:bg-[#FAFAFA] after:bg-[#FAFAFA] opacity-40"></div>
                <div className="pb-8">
                    <div className="md:grid grid-cols-2 text-[#FAFAFA] opacity-40 space-between">
                        <p className="text-center sm:text-left">© 2026 Digitools. All rights reserved.</p>
                        <div className="sm:place-items-end">
                            <ul className="flex gap-5 justify-center">
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;