import {use, useState} from 'react';

const Product = ({productDataPromise, setCartData, totalCartItems, setTotalCartItems}) => {
    const products = use(productDataPromise)
    const [disableButton, setDisableButton] = useState([]);

    function handleBuyNowButton(btnID, product) {
        setCartData(product);
        setTotalCartItems(totalCartItems + 1);
        setDisableButton([...disableButton, btnID]);
        console.log(btnID, product);
    }

    return (
        <div className="grid grid-cols-3 gap-7">
            {
                products.map((product, index) => (
                    <div key={index} className="card bg-base-100 shadow-sm">
                        <div className="card-body space-y-4">
                            <div className="text-right">
                                <span className={`text-right badge badge-soft capitalize ${product.category === 'best seller' ? 'badge-warning' : product.category === 'popular' ? 'badge-primary' : 'badge-success'} `}>{product.category}</span>
                            </div>
                            <div className="w-15 h-15 border border-[#627382] rounded-full flex justify-center items-center">
                                <img src={product.image} alt="" className="w-8 h-8"/>
                            </div>
                            <h2 className="text-2xl font-bold">{product.name}</h2>
                            <p>{product.description}</p>

                            <span className="text-xl font-bold">${product.price}<span className="text-[#627382] capitalize">/{product.recurrence}</span></span>
                            <ul className=" flex flex-col gap-2 text-xs">

                                {
                                    product.features.map((feature, index) => (
                                        <li key={index}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))
                                }

                            </ul>
                            <div className="mt-6">
                                <button disabled={disableButton.includes(index)} onClick={() => handleBuyNowButton(index, product)} className={`text-white ${!disableButton.includes(index) ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa]' : 'btn-disabled'} btn btn-block rounded-4xl`}>{!disableButton.includes(index)? "Buy Now" : "Added"}</button>
                            </div>
                        </div>
                    </div>
                ))
            }


        </div>
    );
};

export default Product;