import React from 'react';

const TransformWorkFlow = () => {
    return (
        <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-30">
            <div className="container text-white flex flex-col justify-center items-center text-center">
                <h2 className="pb-4 text-4xl font-extrabold">Ready to Transform Your Workflow?</h2>
                <p className="">Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.</p>
                <div className="mt-10 mb-2">
                    <a href="#products" className="mr-4 btn bg-white text-[#9514fa] rounded-4xl">Explore Products</a>
                    <a href="#pricing" className="btn bg-transparent text-white border-white border-2 rounded-4xl">View Pricing</a>

                </div>
                <p className="">14-day free trial • No credit card required • Cancel anytime</p>
            </div>

        </div>
    );
};

export default TransformWorkFlow;