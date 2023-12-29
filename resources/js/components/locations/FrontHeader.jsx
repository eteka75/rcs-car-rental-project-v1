import React from 'react';
import { useState } from 'react';;

import Logo from "../../assets/images/logo-v0-min.png";

import "../../Index.css"


/**Icones */
import { FiShoppingCart } from "react-icons/fi";
import { FaCarAlt } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdCarRental } from "react-icons/md";

/** fin Icones */

import { Link } from '@inertiajs/react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AiOutlineSearch } from 'react-icons/ai';
import TopNav from '../topNav';

export default function FrontHeader({ auth }) {
    const [time, setTime] = useState('12:34pm');
    const heures = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    const minutes = [0, 15, 30, 45];
    return (
        <>
            <div>

                <div className="bg-[#334155] overflow-hidden   bg-[url('@/_assets/images/design/bg-3.jpg')] bg-[left_calc(50%)_top_calc(22%)] bg-cover bg-no-repeat _bg-[#003b95] text-white  relativ">
                    <div className="bg-[#000] bg-gradient-to-t from-[rgba(0,0,0,.65)] bg-opacity-40">
                        <TopNav auth={auth} />

                        <div aria-hidden="true" className="hidden_  h-0 relative opacity-50">
                            <div className="blur-[56px] h-20 bg-gradient-to-br rotate-45 from-primary to-purple-800 dark:from-blue-700"></div>
                            <div className="blur-[56px] h-14 bg-gradient-to-r  from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
                        </div>


                    </div>

                </div>
                <div className="shadow bg-slate-50">

                    <div className="max-w-screen-xl mt-4 pb-4 flex flex-wrap items-center justify-start mx-auto px-4 relative">
                        <ul className="flex flex-wrap text-sm font-medium  text-center  border-gray-200 ">
                            <li className="me-2  text-lg">
                                <a
                                    href={route('front.locations')}
                                    aria-current="page"
                                    className="flex px-2 md:px-4 py-2 text-black text-sm md:text-lg   hover:opacity-100 opacity-95 border-yellow-500  bg-yellow-500 _bg-[rgba(255,255,255,.2)] rounded-full active"
                                >
                                    <MdCarRental className="md:text-2xl  me-1 mt-0.5 md:mt-1" />
                                    Location <span className='ms-1 hidden md:inline-block transition-all duration-100 '> de voitures</span>
                                </a>
                            </li>
                            <li className="me-2   text-lg">
                                <a
                                    href={route('front.achats')}
                                    className="flex flex-auto px-2 md:px-4 py-2 text-sm md:text-lg rounded-full hover:border-gray-900 hover:text-white  hover:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                                >
                                    <FaCarAlt className="text-sm md:text-xl  me-1 mt-0.5 md:mt-1" /> Achat
                                    <span className='ms-1 hidden md:inline-block transition-all duration-100 '> de voitures</span>
                                </a>
                            </li>
                            <li className="me-2   text-lg">
                                <a
                                    href={route('front.faq')}
                                    className="flex flex-auto px-2 md:px-4 py-2 text-sm md:text-lg rounded-full hover:border-gray-900 hover:text-white  hover:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                                >
                                    <IoMdHelpCircleOutline className="text-sm md:text-2xl  me-1 mt-0.5 md:mt-1" />{" "}
                                    Aides
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
};
