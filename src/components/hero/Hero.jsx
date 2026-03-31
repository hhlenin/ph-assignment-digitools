import React from 'react';
import {RxTarget} from "react-icons/rx";
import heroImg from "../../assets/banner.png"
import {CiPlay1} from "react-icons/ci";

const Hero = () => {
    return (
        <div className="hero my-14">
            <div className="container flex flex-col-reverse gap-1 md:gap-0 md:flex-row justify-between items-center">
                <div className="flex-2 hero-text space-y-4">
                    <div className="badge badge-soft badge-primary  flex items-center gap-1">
                        <RxTarget></RxTarget>
                        <p className="font-medium bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">New: AI-Powered Tools Available</p>
                    </div>
                    <div>
                        <h1 className="text-7xl font-extrabold"><span className="text-5xl sm:text-7xl">Supercharge</span> Your <br/>Digital Workflow</h1>
                    </div>
                    <p className="text-[#627382]">Access premium AI tools, design assets, templates, and productivity <br/>
                        software—all in one place. Start creating faster today. <br/>
                        Explore Products</p>

                    <div className="flex gap-2">
                        <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-4xl">Explore Products</button>
                        <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] p-px rounded-4xl">
                            <div className="bg-white rounded-4xl">
                                <button className="btn btn-outline bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent"> <CiPlay1 className="text-[#4f39f6]"></CiPlay1> Watch Demo</button>

                            </div>
                        </span>
                    </div>

                </div>
                <div className=" flex-1 hero-image">
                    <img src={heroImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Hero;