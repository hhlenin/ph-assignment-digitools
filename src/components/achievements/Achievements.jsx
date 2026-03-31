import React from 'react';

const Achievements = () => {
    return (
        <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] p-16">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-around">
                    <div className="text-center">
                        <h2 className="text-white text-6xl font-extrabold">50K+</h2>
                        <p className="text-white text-2xl font-medium">Active User</p>
                    </div>
                    <div className="divider before:bg-white after:bg-white divider-horizontal"></div>
                    <div className="text-center">
                        <h2 className="text-white text-6xl font-extrabold">200+</h2>
                        <p className="text-white text-2xl font-medium">Premium Tools</p>
                    </div>
                    <div className="divider before:bg-white after:bg-white divider-horizontal"></div>
                    <div className="text-center">
                        <h2 className="text-white text-6xl font-extrabold">4.9+</h2>
                        <p className="text-white text-2xl font-medium">Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;