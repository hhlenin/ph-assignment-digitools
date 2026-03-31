import React from 'react';
import userImg from '../../assets/user.png';
import productImg from '../../assets/package.png';
import rocketImg from '../../assets/rocket.png';

const GetStarted = () => {
    return (
        <div className="bg-[#f9fafc] p-29">
            <div className="container">
                <div className="text-center pb-10 space-y-4">
                    <h2 className="text-5xl font-extrabold">Get Started in 3 Steps</h2>
                    <p className="text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className="grid grid-cols-3 gap-7">
                    <div className="card shadow-md">
                        <div className="card-body space-y-4 text-center">
                            <div className="flex justify-end">
                                <span className="text-right badge text-white h-10 w-10 rounded-full bg-linear-to-r from-[rgb(79,57,246)] to-[rgb(149,20,250)] font-bold">01</span>
                            </div>
                            <div className="flex justify-center">
                                <div className="bg-linear-to-r from-[rgba(79,57,246,0.1)] to-[rgba(149,20,250,0.1)] w-25 h-25 rounded-full flex justify-center items-center">
                                    <img src={userImg} alt="" className=""/>
                                </div>
                            </div>

                            <h4 className="text-2xl font-bold">Create Account</h4>
                            <p className="pb-22 text-[#627382]">Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className="card shadow-md">
                        <div className="card-body space-y-4 text-center">
                            <div className="flex justify-end">
                                <span className="text-right badge text-white h-10 w-10 rounded-full bg-linear-to-r from-[rgb(79,57,246)] to-[rgb(149,20,250)] font-bold">02</span>
                            </div>
                            <div className="flex justify-center">
                                <div className="bg-linear-to-r from-[rgba(79,57,246,0.1)] to-[rgba(149,20,250,0.1)] w-25 h-25 rounded-full flex justify-center items-center">
                                    <img src={productImg} alt="" className=""/>
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold">Choose Products</h4>
                            <p className="pb-22 text-[#627382]">Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>
                    <div className="card shadow-md">
                        <div className="card-body space-y-4 text-center">
                            <div className="flex justify-end">
                                <span className="text-right badge text-white h-10 w-10 rounded-full bg-linear-to-r from-[rgb(79,57,246)] to-[rgb(149,20,250)] font-bold">03</span>
                            </div>
                            <div className="flex justify-center">
                                <div className="bg-linear-to-r from-[rgba(79,57,246,0.1)] to-[rgba(149,20,250,0.1)] w-25 h-25 rounded-full flex justify-center items-center">
                                    <img src={rocketImg} alt="" className=""/>
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold">Start Creating</h4>
                            <p className="pb-22 text-[#627382]">Download and start using your premium tools immediately.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GetStarted;