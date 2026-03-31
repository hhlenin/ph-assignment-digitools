import React, {Suspense, useState} from 'react';
import Product from "./products/Product.jsx";
import Cart from "./cart/Cart.jsx";
import Empty from "./cart/Empty.jsx";

const fetchProductData = async () => {
    const response =  await fetch("/tools-data.json");
    return response.json();
}

const DigitalTools = () => {

    const [button, setButton] = useState(true);
    const [cart, setCart] = useState([]);

    const productDataPromise = fetchProductData();


    return (
        <main className="container">
            <div className="py-32 justify-center">
                <div className="space-y-4 flex flex-col justify-center items-center">
                    <div className="text-center space-y-4">
                        <h3 className="text-5xl font-extrabold">Premium Digital Tools</h3>
                        <p className="font-normal text-[#627382] lea">Choose from our curated collection of premium digital button designed <br/> to boost your productivity and creativity.</p>
                    </div>
                    <span className="flex w-fit justify-center gap-3 p-0.5 border border-[#627382] rounded-4xl">
                        <button onClick={() => setButton(!button)} className={`${button && 'text-white btn bg-linear-to-r from-[#4f39f6] to-[#9514fa]'} rounded-4xl`}>Products</button>
                        <button onClick={() => setButton(!button)} className={`${!button && 'text-white btn bg-linear-to-r from-[#4f39f6] to-[#9514fa]'} rounded-4xl`}>Cart (0)</button>
                    </span>
                    <div className="pt-10">
                        {
                          button ?
                              <Suspense fallback={
                                  <div>
                                      <span className="loading loading-ball loading-xs"></span>
                                      <span className="loading loading-ball loading-sm"></span>
                                      <span className="loading loading-ball loading-md"></span>
                                      <span className="loading loading-ball loading-lg"></span>
                                      <span className="loading loading-ball loading-xl"></span>
                                  </div>}>
                                  <Product productDataPromise={productDataPromise}></Product>
                              </Suspense> :
                              cart.length === 0 ?
                                  <Empty /> : <Cart></Cart>
                        }


                        {/*<Empty></Empty>*/}
                    </div>
                </div>
            </div>

        </main>
    );
};

export default DigitalTools;