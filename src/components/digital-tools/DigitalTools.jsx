import React, {useState} from 'react';
import Product from "./products/Product.jsx";

const DigitalTools = () => {

    const [products, setProducts] = useState(true);

    return (
        <main className="container">
            <div className="p-32 justify-center">
                <div className="space-y-4 flex flex-col justify-center items-center">
                    <div className="text-center space-y-4">
                        <h3 className="text-5xl font-extrabold">Premium Digital Tools</h3>
                        <p className="font-normal text-[#627382] lea">Choose from our curated collection of premium digital products designed <br/> to boost your productivity and creativity.</p>
                    </div>
                    <span className="flex w-fit justify-center gap-3 p-0.5 border border-[#627382] rounded-4xl">
                        <button onClick={() => setProducts(!products)} className={`${products && 'text-white btn bg-linear-to-r from-[#4f39f6] to-[#9514fa]'} rounded-4xl`}>Products</button>
                        <button onClick={() => setProducts(!products)} className={`${!products && 'text-white btn bg-linear-to-r from-[#4f39f6] to-[#9514fa]'} rounded-4xl`}>Cart (0)</button>
                    </span>
                    <div className="pt-10">
                        <Product></Product>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default DigitalTools;