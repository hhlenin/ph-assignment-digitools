import React from 'react';
import {MdShoppingCartCheckout} from "react-icons/md";

const Empty = () => {
    return (
        <div className="">
            <div className="card card-xl lg:w-[1200px] shadow-md">
                <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="text-3xl">Cart is Empty</h2>
                    <p className="text-[#627382]">Add Products From Products Page</p>
                    <MdShoppingCartCheckout className="text-7xl text-[#4f39f6]"></MdShoppingCartCheckout>
                </div>
            </div>
        </div>
    );
};

export default Empty;