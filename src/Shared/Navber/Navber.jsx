import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-md lg:px-20 ">
                <div className="flex-1">
                    <Link className='text-xl font-semibold' to='/'>Supper Shop</Link>
                </div>

                <div className="flex-none">
                    <div className="form-control hidden lg:flex ">
                        <input type="text" placeholder="Search for Products,Brands and More" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="data:image/jpeg;base64,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" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;