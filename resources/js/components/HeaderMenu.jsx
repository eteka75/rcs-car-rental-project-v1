import { Link } from '@inertiajs/react'
import Logo from "../assets/images/logo-v0-min.png";
import React from 'react';
import { FaCarOn } from 'react-icons/fa6';
import { FiShoppingCart } from 'react-icons/fi';


export default function HeaderMenu({ auth = {} }) {
    return (
        <>
            <div className="shadow-sm  border-bborder-slate-100 bg-gradient-to-b from-gray-800 to-gray-900 text-white ">
                <nav className="max-w-screen-xl mx-auto relative absolute_ ">
                <div className="  flex flex-wrap items-center justify-between px-4 py-3">
                            <a
                                href={"/"}
                                className="flex items-center mb-4 space-x-3 rtl:space-x-reverse"
                            >
                                <img
                                    src={Logo}
                                    className="h-10"
                                    alt="Logo CRS Bénin"
                                />
                                <span className="self-center hidden sm:flex md:text-xl uppercase_ font-semibold whitespace-nowrap dark:text-white">
                                    Rental Cars Services
                                </span>
                            </a>
                            <div
                                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                                id="navbar-language"
                            >
                                <ul className="flex flex-col relative font-medium  md:p-0 mt-4 border rounded-lg  md:space-x-1 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                                    {!auth.user ? (
                                        <>
                                            <li>
                                                <Link
                                                    href={route('login')}
                                                    className="inline-flex items-center border-slate-200 border-0 text-white font-medium justify-center px-2 lg:px-3 py-1.5 text-sm hover:text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    Se connecter
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href={route('register')}
                                                    className="inline-flex items-center me-2 border-slate-50 border-0 text-white font-medium justify-center px-2 lg:px-3 py-1.5 text-sm hover:text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    S'inscrire
                                                </Link>
                                            </li>
                                        </>
                                    ) : (
                                        ""
                                    )}
                                    <li>
                                        <button
                                            type="button"
                                            data-dropdown-toggle="language-dropdown-menu"
                                            className="inline-flex items-center text-slate-900 border border-yellow-500 bg-yellow-500 font-medium justify-center px-4 py-1.5 text-sm hover:text-b  dark:text-white rounded-md cursor-pointer hover:opacity-90 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            <FaCarOn className="me-1 text-xl" /> Mes locations
                                        </button>
                                    </li>
                                    <li>
                                        <button className="inline-flex bg-slate-200 items-center font-medium justify-center h-10 w-10 lg:w-auto lg:h-auto lg:px-2 py-2 text-sm text-gray-900 dark:text-white lg:rounded-md rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white mx-2">
                                            <svg
                                                className="w-5 h-5 rounded-full lg:me-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 3900 3900"
                                            >
                                                <path
                                                    fill="#b22234"
                                                    d="M0 0h7410v3900H0z"
                                                />
                                                <path
                                                    d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                                    stroke="#fff"
                                                    strokeWidth="300"
                                                />
                                                <path
                                                    fill="#3c3b6e"
                                                    d="M0 0h2964v2100H0z"
                                                />
                                                <g fill="#fff">
                                                    <g id="d">
                                                        <g id="c">
                                                            <g id="e">
                                                                <g id="b">
                                                                    <path
                                                                        id="a"
                                                                        d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                                                    />
                                                                    <use
                                                                        xlinkHref="#a"
                                                                        y="420"
                                                                    />
                                                                    <use
                                                                        xlinkHref="#a"
                                                                        y="840"
                                                                    />
                                                                    <use
                                                                        xlinkHref="#a"
                                                                        y="1260"
                                                                    />
                                                                </g>
                                                                <use
                                                                    xlinkHref="#a"
                                                                    y="1680"
                                                                />
                                                            </g>
                                                            <use
                                                                xlinkHref="#b"
                                                                x="247"
                                                                y="210"
                                                            />
                                                        </g>
                                                        <use
                                                            xlinkHref="#c"
                                                            x="494"
                                                        />
                                                    </g>
                                                    <use xlinkHref="#d" x="988" />
                                                    <use xlinkHref="#c" x="1976" />
                                                    <use xlinkHref="#e" x="2470" />
                                                </g>
                                            </svg>
                                            <span className='hidden lg:flex'>English (US)</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="inline-flex text-gray-900 bg-slate-200 hover:bg-slate-50 items-center h-10 w-10 text-sm font-medium justify-center rounded-full  "
                                        >
                                            <FiShoppingCart />
                                        </button>
                                    </li>
                                    {auth.user  && 
                                    (<li>
                                    <button type="button" class="flex text-sm  rounded-full md:me-0 p-1 bg-slate-200 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                        <span class="sr-only">Open user menu</span>
                                        <img class="w-8 h-8 rounded-full" src={Logo} alt="user photo"/>
                                    </button>
                                    <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                        <div class="px-4 py-3">
                                        <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                        <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                                        </div>
                                        <ul class="py-2" aria-labelledby="user-menu-button">
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                        </li>
                                        </ul>
                                    </div>
                                    </li>)}
                                </ul>
                            </div>
                            <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-sm md:hidden hover:bg-[rgba(255,255,255,.3)] focus:outline-none focus:ring-1 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                                </svg>
                            </button>
                        </div>
                </nav>
            </div>
        </>
    )
}
