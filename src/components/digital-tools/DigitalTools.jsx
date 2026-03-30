import React, {useState} from 'react';

const DigitalTools = () => {

    const [products, setProducts] = useState(true);
    const setProductButtonActive = () => {
        !products && (setProducts(!products), setCart(true));
    }
    const [cart, setCart] = useState(false);
    const setCartButtonActive = () => {
        setCart(!cart)

    }
    return (
        <div className="container">
            <div className="p-32">
                <div className="text-center space-y-4">
                    <h3 className="text-5xl font-extrabold">Premium Digital Tools</h3>
                    <p className="font-normal text-[#627382] lea">Choose from our curated collection of premium digital products designed <br/> to boost your productivity and creativity.</p>
                </div>
                <div>
                    <button onClick={() => setProductButtonActive()} className={products && 'btn btn-primary'}>Products</button>
                    <button onClick={() => setCartButtonActive()} className={cart && 'btn btn-primary'}>Cart (0)</button>
                </div>
            </div>

        </div>
    );
};

export default DigitalTools;