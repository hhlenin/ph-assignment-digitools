import React from 'react';

const Pricing = () => {
    return (
        <div className="container">
            <div className="py-30 text-center">
                <h2 className="text-5xl font-extrabold pb-4">Simple, Transparent Pricing</h2>
                <p id="pricing" className=" pb-10">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body text-left">
                                <h2 className="text-2xl font-bold pb-0 -mb-2">Starter</h2>
                                <p className="text-[#627382] pt-0 mt-0 pb-6">Perfect for getting started</p>
                                <span className="text-4xl font-bold">$0<span className="text-[#627382] text-xl">/month</span></span>
                            <ul className="mt-6 flex flex-col flex-1 gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium text-[#627382]">Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium text-[#627382]">Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium text-[#627382]">Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium text-[#627382]">1 project per month</span>
                                </li>

                            </ul>
                            <div className="mt-6">
                                <button className="btn text-white btn-block bg-linear-to-r from-[#4f39f6] to-[#9514fa]">Get Started Free</button>
                            </div>
                        </div>
                    </div>
                    <div className="relative card bg-base-100 shadow-sm text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                        <span className="absolute badge badge-warning -top-2.5 left-[40%]">Most Popular</span>
                        <div className="card-body text-left">
                                <h2 className="text-2xl font-bold pb-0 -mb-2">Pro</h2>
                                <p className=" pt-0 mt-0 pb-6">Best for professionals</p>
                                <span className="text-4xl font-bold">$29<span className=" text-xl">/month</span></span>
                            <ul className="mt-6 flex flex-col flex-1 gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium ">Access to all premium tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium ">Unlimited templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium ">Priority support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium ">Unlimited projects</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium ">Cloud sync</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium ">Advanced analytics</span>
                                </li>

                            </ul>
                            <div className="mt-6">
                                <button className="btn text-white btn-block"><p className="text-primary">Start Pro Trial</p></button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body text-left">
                                <h2 className="text-2xl font-bold pb-0 -mb-2">Enterprise</h2>
                                <p className="text-[#627382] pt-0 mt-0 pb-6">For teams and businesses</p>
                                <span className="text-4xl font-bold">$99<span className="text-[#627382] text-xl">/month</span></span>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium text-[#627382]">Everything in Pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium text-[#627382]">Team collaboration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium text-[#627382]">Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium text-[#627382]">Dedicated support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium text-[#627382]">SLA guarantee</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium text-[#627382]">Custom branding</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="size-4 me-2 inline-block text-success" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="font-medium text-[#627382]">Contact Sales</span>
                                </li>


                            </ul>
                            <div className="mt-6">
                                <button className="btn text-white btn-block bg-linear-to-r from-[#4f39f6] to-[#9514fa]">Get Started Free</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;