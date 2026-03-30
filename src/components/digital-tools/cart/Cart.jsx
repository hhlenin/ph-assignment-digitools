import React from 'react';
import randIng from "../../../../public/products/design-tool.png";

const Cart = () => {
    return (
        <div className="">
            <div className="card card-xl lg:w-[1200px] shadow-md">
                <div className="card-body">
                    <h2 className="card-title">Your Cart</h2>
                    <div className="card bg-base-100 shadow-sm">

                        <div className="card-body bg-[#f9fafc]">
                            <div className="flex items-center justify-between">
                                <div className="w-15 h-15 border border-[#627382] rounded-full flex justify-center items-center">
                                    <img src={randIng} alt="" className="w-8 h-8"/>
                                </div>
                                <div className="text-left">
                                    <h2 className="card-title">Card Title</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions
                                        parts</p>
                                </div>

                                <div className="card-actions">
                                    <button className="btn text-error">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='py-6 flex justify-between'>
                        <p className="text-[#627382]">Total :</p>
                        <p className="text-xl font-bold text-right">$23</p>
                    </div>

                    <div className="card-actions">
                        <button
                            className="btn text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] btn-block rounded-4xl">Proceed
                            To Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;