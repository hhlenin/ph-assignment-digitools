import React from 'react';
import {toast} from "react-toastify";

const Cart = ({cartItems, setCartItems, totalCartItems, setTotalCartItems, setDisableButton}) => {

    let cartTotalPrice = 0;
    cartItems.forEach((product) => {
        cartTotalPrice += parseInt(product.price);
    })
    function handleRemoveButtonClick(product) {
        const newCart = cartItems.filter((item) => {
            return item.id !== product.id;
        });
        setCartItems(newCart);
        setTotalCartItems(totalCartItems - 1)
        toast.warning(`${product.name} removed from the cart 👍`);
    }

    function handleCheckoutClick() {
        toast.success('Checking out Complete ❤️');
        setCartItems([])
        setTotalCartItems(0)
        setDisableButton([])
    }
    return (
        <div className="">

            <div className="card card-xl shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Your Cart</h2>
                            {
                                cartItems.map((item, index) => (
                                    <div key={index} className="card bg-base-100 shadow-sm">
                                    <div className="card-body bg-[#f9fafc]">
                                        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                                            <div className="w-15 h-15 border border-[#627382] rounded-full flex justify-center items-center mr-4">
                                                <img src={item.image} alt="" className="w-8 h-8"/>
                                            </div>
                                            <div className="text-left">
                                                <h2 className="card-title">{item.name}</h2>
                                                <p>{item.description}</p>
                                            </div>

                                            <div className="card-actions">
                                                <button onClick={() => handleRemoveButtonClick(item)} className="btn text-error">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                ))
                            }

                        <div className='py-6 flex justify-between'>
                            <p className="text-[#627382]">Total :</p>
                            <p className="text-xl font-bold text-right">${cartTotalPrice}</p>
                        </div>

                        <div className="card-actions">
                            <button onClick={() => handleCheckoutClick()}
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