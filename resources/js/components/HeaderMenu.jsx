import { Link } from '@inertiajs/react'
import Logo from "../assets/images/logo-v0-min.png";
import React from 'react';
import { FaCarOn } from 'react-icons/fa6';
import { FiShoppingCart } from 'react-icons/fi';


export default function HeaderMenu({ auth = {} }) {
    return (
        <>
            <div className="shadow-sm bg-white ">
                <nav className="max-w-screen-xl mx-auto relative absolute_ ">
                    <div className="flex flex-wrap items-center justify-between p-4">
                        <a
                            href={"/"}
                            className="flex items-center  space-x-3 rtl:space-x-reverse"
                        >
                            <img
                                src={Logo}
                                className="h-8"
                                alt="Logo CRS Bénin"
                            />
                            <span className="self-center text-xl uppercase font-semibold whitespace-nowrap dark:text-white">
                                Rental Cars Services
                            </span>
                        </a>
                        <div
                            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-language"
                        >
                            <ul className="flex flex-col relative font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                                {!auth.user ? (
                                    <>
                                        <li>
                                            <Link
                                                href={route('login')}
                                                className="inline-flex items-center border-slate-200 border-0 font-medium justify-center px-2 py-2 text-sm hover:text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                            >
                                                Se connecter
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href={route('register')}
                                                className="inline-flex items-center border-slate-50 border-0 font-medium justify-center px-2 py-2 text-sm hover:text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
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
                                        className="inline-flex items-center text-slate-900 border border-yellow-500 bg-yellow-500 font-medium justify-center px-4 py-1.5 text-sm hover:text-b  dark:text-white rounded-lg cursor-pointer hover:opacity-90 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <FaCarOn className="me-1 text-xl" /> Gérer mes locations
                                    </button>
                                </li>
                                <li>
                                    <button className="inline-flex bg-slate-200 items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white mx-2">
                                        <svg
                                            className="w-5 h-5 rounded-full me-3"
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
                                        English (US)
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="inline-flex text-gray-900 bg-slate-200 hover:bg-slate-50 items-center px-4 py-3 text-sm font-medium justify-center rounded-lg  "
                                    >
                                        <FiShoppingCart />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
