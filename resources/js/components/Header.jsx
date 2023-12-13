import React from 'react'
import Logo from "../assets/images/logo-v0-min.png";
import v1 from "../assets/images/vehicules/v1.jpg";
import v2 from "../assets/images/vehicules/v2.jpg";
import v3 from "../assets/images/vehicules/v3.jpg";
import v4 from "../assets/images/vehicules/v4.jpg";
import v5 from "../assets/images/vehicules/v5.jpg";
import v6 from "../assets/images/vehicules/v6.jpg";
import { MdCarRental } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { ImUserTie } from "react-icons/im";
import { MdOutlineCardTravel } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FaCar, FaCarOn } from "react-icons/fa6";
import { MdManageHistory } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { Link } from '@inertiajs/react';
import { MdKey } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineUpdate } from "react-icons/md";

function Header({ auth }) {
    return (
        <>
            {/*
      Color1 : 022B3A
      Color2 : 022B3A
      */}


            <div className="bg-[#0d1535] _bg-[#003b95] text-white relativ">

                <nav className=" text-white border-gray-200 relative absolute_">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a
                            href={"/"}
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <img
                                src={Logo}
                                className="h-8"
                                alt="Logo CRS Bénin"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Car Rental Services
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
                                                to="/login"
                                                className="inline-flex items-center border-slate-200 border-0 text-white font-medium justify-center px-2 py-2 text-sm hover:text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                            >
                                                Se connecter
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/register"
                                                className="inline-flex items-center border-slate-50 border-0 text-white font-medium justify-center px-2 py-2 text-sm hover:text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
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
                                        className="inline-flex items-center text-slate-200 border font-medium justify-center px-4 py-1.5 text-sm  dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
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
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 3900 3900"
                                        >
                                            <path
                                                fill="#b22234"
                                                d="M0 0h7410v3900H0z"
                                            />
                                            <path
                                                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                                stroke="#fff"
                                                stroke-width="300"
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
                                                                    xlink:href="#a"
                                                                    y="420"
                                                                />
                                                                <use
                                                                    xlink:href="#a"
                                                                    y="840"
                                                                />
                                                                <use
                                                                    xlink:href="#a"
                                                                    y="1260"
                                                                />
                                                            </g>
                                                            <use
                                                                xlink:href="#a"
                                                                y="1680"
                                                            />
                                                        </g>
                                                        <use
                                                            xlink:href="#b"
                                                            x="247"
                                                            y="210"
                                                        />
                                                    </g>
                                                    <use
                                                        xlink:href="#c"
                                                        x="494"
                                                    />
                                                </g>
                                                <use xlink:href="#d" x="988" />
                                                <use xlink:href="#c" x="1976" />
                                                <use xlink:href="#e" x="2470" />
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
                <div aria-hidden="true" className="hidden_  h-0 relative opacity">
                    <div className="blur-[56px] h-20 bg-gradient-to-br rotate-45 from-primary to-purple-800 dark:from-blue-700"></div>
                    <div className="blur-[56px] h-14 bg-gradient-to-r  from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
                </div>

                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pb-20 relative">
                    <ul className="flex flex-wrap text-sm font-medium text-center  border-gray-200 text-white">
                        <li className="me-2  text-lg">
                            <a
                                href="#"
                                aria-current="page"
                                className="flex px-4 py-2 text-yellow-500   hover:opacity-100 opacity-95 border-yellow-500 border bg-yellow-700_ bg-[rgba(255,255,255,.2)] rounded-full active"
                            >
                                <MdCarRental className="text-2xl  me-1" />{" "}
                                Location <span className='ms-1 hidden md:inline-block transition-all duration-100 '> de voitures</span>
                            </a>
                        </li>
                        <li className="me-2   text-lg">
                            <a
                                href="#"
                                className="flex flex-auto px-4 py-2 rounded-full hover:bg-[rgba(255,255,255,.2)] dark:hover:bg-gray-800 dark:hover:text-gray-300"
                            >
                                <FaCarAlt className="text-xl  me-1 mt-1" /> Achat
                                <span className='ms-1 hidden md:inline-block transition-all duration-100 '> de voitures</span>
                            </a>
                        </li>
                        <li className="me-2   text-lg">
                            <a
                                href="#"
                                className="flex flex-auto px-4 py-2 rounded-full hover:bg-[rgba(255,255,255,.2)] dark:hover:bg-gray-800 dark:hover:text-gray-300"
                            >
                                <IoMdHelpCircleOutline className="text-2xl  me-1" />{" "}
                                Aides
                            </a>
                        </li>
                    </ul>
                    <div
                        className="in-message w-full h-14"
                        id="message-top"
                    ></div>
                    <div className="text-center w-full" id="form-head">
                        <h1 className="text-5xl font-bold mb-2">
                            Location de voiture pour tout type de voyage
                        </h1>
                        <h2 className="text-2xl text-center">
                            De super offres à des tarifs avantageux, proposées par
                            les plus grandes sociétés de location de voitures.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto p-4">
                <div className="max-w-screen-xl flex -mt-10 rounded-sm flex-wrap mx-auto bg-white shadow-sm border-spacing-3 border border-slate-100 w-full p-2">
                    <div className="grid grid-cols-12 w-full  gap-2">
                        <div className="col-span-10 grid grid-cols-12 gap-2">
                            <div className="col-span-6 flex">
                                <input
                                    type="text"
                                    className="border border-slate-300 text-xl rounded-sm w-full"
                                    placeholder="Saisir le lieu de location...."
                                />
                            </div>
                            <div className="col-span-2 flex">
                                <input
                                    type="text"
                                    className="border border-slate-300 text-xl rounded-sm w-full"
                                />
                            </div>
                            <div className="col-span-1 flex">
                                <input
                                    type="text"
                                    className="border border-slate-300 text-xl rounded-sm w-full"
                                />
                            </div>
                            <div className="col-span-2 flex">
                                <input
                                    type="text"
                                    className="border border-slate-300 text-xl rounded-sm w-full"
                                />
                            </div>
                            <div className="col-span-1 flex">
                                <input
                                    type="text"
                                    className="border border-slate-300 text-xl rounded-sm w-full"
                                />
                            </div>
                        </div>
                        <div className="col-span-2 text-end">
                            <button className="p-4 text-xl text-white bg-blue-700 rounded-md w-full">
                                Rechercher
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border p-6 my-5 mt-10 shadow-sm rounded-lg w-full">
                    <h3 className="text-xl font-bold">
                        Connectez-vous pour bénéficier de plusieurs avantages
                    </h3>
                    <p className="text-gray-500 mb-4">
                        Vous pouvez bénéficier de réductions sur certaines
                        locations de voiture.
                    </p>
                    <a href="/" className="text-blue-600 py-2 font-light mt-">
                        Se connecter
                    </a>
                </div>
            </div>
            <div className="bg-gray-100 md:py-10">
                <div className="max-w-screen-xl mx-auto p-4 grid md:grid-cols-2 gap-2 lg:grid-cols-3">
                    <div class=" flex gap-4 md:items-center my-4">
                        <div class="w-20 h-20 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-10 h-10 m-auto text-indigo-500 dark:text-indigo-400"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div class="w-5/6 py-2">
                            <h3 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                                Nous sommes là pour vous aider
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">
                                Notre service client répond à toutes vos
                                préoccupations
                            </p>
                        </div>
                    </div>
                    <div class=" flex gap-4 md:items-center my-4">
                        <div class="w-20 h-20 flex gap-4 rounded-full bg-teal-200 dark:bg-indigo-900/20">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-10 h-10 m-auto text-teal-600 dark:text-teal-400"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div class="w-5/6 py-2">
                            <h3 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                                Nous sommes là pour vous aider
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">
                                Notre service client répond à toutes vos
                                préoccupations
                            </p>
                        </div>
                    </div>
                    <div class=" flex gap-4 md:items-center my-4">
                        <div class="w-20 h-20 flex gap-4 rounded-full bg-amber-500 dark:bg-indigo-900/20  justify-center items-center">
                            <MdOutlineUpdate className="h-10 w-10 mx-auto" />
                        </div>
                        <div class="w-5/6 py-2">
                            <h3 class="font-semibold text-lg text-gray-700 dark:text-red-100">
                                Nous sommes là pour vous aider
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400">
                                Notre service client répond à toutes vos
                                préoccupations
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto p-4">
                <h2 className="font-bold text-2xl mt-8 flex">
                    <MdKey className="me-2 text-yellow-600 mt-1 " /> Top des
                    locations
                </h2>
                <div id='car' className="car-vehicules mt-10 mb-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8">
                    <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src={v1} alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Peugeot 308</h5>
                            </a>
                            <div className="flex">
                                <div class="text-xs mb-2 font-bold text-blue-600 dark:text-white">Cotonou</div>

                            </div>
                            <div class="grid grid-cols-2 items-center mt-2.5 mb-5">

                                <div className="flex mb-2">
                                    <LuUsers className='me-1' />
                                    <div className='text-sm font-light'>5 personnes</div>
                                </div>
                                <div className="flex mb-2">
                                    <div>
                                        <img className='h-4 me-1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO2U4QqAIAyE790yaPT+/6of2XsYA4tJsFQWVPjBYHDHjiEOaBQyAtgAeABkpCWwIcRajbSEWRgnIy3BCWNnpF04jJbaTwNCZb0n4Ptv8EiAE0buJb2iZQfIL8+9ZFG07IDag+ZutjuhOIgHDAWatrkJPvdc10LKdg2o7ExWkc4uK+5nAAAAAElFTkSuQmCC" />
                                    </div>
                                    <div className='text-sm font-light'>Manuelle</div>
                                </div>
                                <div className="flex mb-2">
                                    <div>
                                        <MdOutlineCardTravel className='me-1' />
                                    </div>
                                    <div className='text-sm font-light'>1 Grande valise</div>
                                </div>
                                <div className="flex mb-2">
                                    <ImUserTie className='me-1' />
                                    <div className='text-sm font-light'>1 Chauffeur</div>
                                </div>
                                <div className="flex mb-2">
                                    <div >
                                        <svg className='h-4 w-4 me-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                                        </svg>
                                    </div>
                                    <div className='text-sm font-light'>3 petites valises</div>
                                </div>
                            </div>
                            <div className='py-4 grid grid-cols-2 border-1 border-b mb-4 border-t'>
                                <div>
                                    <a className=' text-sm font-bold text-blue-500 flex' href="">
                                        <AiOutlineInfoCircle className="me-1 text-xl" /> Infos importantes</a>
                                </div>
                                <div>
                                    <div class="flex items-center ">
                                        <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-bold text-gray-600 dark:text-white">50.000 FCFA/Jours</span>
                                <a href="#" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Voir l'offre</a>
                            </div>
                        </div>
                    </div>
                    <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src={v2} alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Peugeot 308</h5>
                            </a>
                            <div className="flex">
                                <div class="text-xs mb-2 font-bold text-blue-600 dark:text-white">Cotonou</div>

                            </div>
                            <div class="grid grid-cols-2 items-center mt-2.5 mb-5">

                                <div className="flex mb-2">
                                    <LuUsers className='me-1' />
                                    <div className='text-sm font-light'>5 personnes</div>
                                </div>
                                <div className="flex mb-2">
                                    <div>
                                        <img className='h-4 me-1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO2U4QqAIAyE790yaPT+/6of2XsYA4tJsFQWVPjBYHDHjiEOaBQyAtgAeABkpCWwIcRajbSEWRgnIy3BCWNnpF04jJbaTwNCZb0n4Ptv8EiAE0buJb2iZQfIL8+9ZFG07IDag+ZutjuhOIgHDAWatrkJPvdc10LKdg2o7ExWkc4uK+5nAAAAAElFTkSuQmCC" />
                                    </div>
                                    <div className='text-sm font-light'>Manuelle</div>
                                </div>
                                <div className="flex mb-2">
                                    <div>
                                        <MdOutlineCardTravel className='me-1' />
                                    </div>
                                    <div className='text-sm font-light'>1 Grande valise</div>
                                </div>
                                <div className="flex mb-2">
                                    <ImUserTie className='me-1' />
                                    <div className='text-sm font-light'>1 Chauffeur</div>
                                </div>
                                <div className="flex mb-2">
                                    <div >
                                        <svg className='h-4 w-4 me-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                                        </svg>
                                    </div>
                                    <div className='text-sm font-light'>3 petites valises</div>
                                </div>
                            </div>
                            <div className='py-4 grid grid-cols-2 border-1 border-b mb-4 border-t'>
                                <div>
                                    <a className=' text-sm font-bold text-blue-500 flex' href="">
                                        <AiOutlineInfoCircle className="me-1 text-xl" /> Infos importantes</a>
                                </div>
                                <div>
                                    <div class="flex items-center ">
                                        <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-bold text-gray-600 dark:text-white">50.000 FCFA/Jours</span>
                                <a href="#" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Voir l'offre</a>
                            </div>
                        </div>
                    </div>
                    <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src={v3} alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Peugeot 308</h5>
                            </a>
                            <div className="flex">
                                <div class="text-xs mb-2 font-bold text-blue-600 dark:text-white">Abomey-Calavi</div>

                            </div>
                            <div class="grid grid-cols-2 items-center mt-2.5 mb-5">

                                <div className="flex mb-2">
                                    <LuUsers className='me-1' />
                                    <div className='text-sm font-light'>5 personnes</div>
                                </div>
                                <div className="flex mb-2">
                                    <div>
                                        <img className='h-4 me-1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO2U4QqAIAyE790yaPT+/6of2XsYA4tJsFQWVPjBYHDHjiEOaBQyAtgAeABkpCWwIcRajbSEWRgnIy3BCWNnpF04jJbaTwNCZb0n4Ptv8EiAE0buJb2iZQfIL8+9ZFG07IDag+ZutjuhOIgHDAWatrkJPvdc10LKdg2o7ExWkc4uK+5nAAAAAElFTkSuQmCC" />
                                    </div>
                                    <div className='text-sm font-light'>Manuelle</div>
                                </div>
                                <div className="flex mb-2">
                                    <div>
                                        <MdOutlineCardTravel className='me-1' />
                                    </div>
                                    <div className='text-sm font-light'>1 Grande valise</div>
                                </div>
                                <div className="flex mb-2">
                                    <ImUserTie className='me-1' />
                                    <div className='text-sm font-light'>1 Chauffeur</div>
                                </div>
                                <div className="flex mb-2">
                                    <div >
                                        <svg className='h-4 w-4 me-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                                        </svg>
                                    </div>
                                    <div className='text-sm font-light'>3 petites valises</div>
                                </div>
                            </div>
                            <div className='py-4 grid grid-cols-2 border-1 border-b mb-4 border-t'>
                                <div>
                                    <a className=' text-sm font-bold text-blue-500 flex' href="">
                                        <AiOutlineInfoCircle className="me-1 text-xl" /> Infos importantes</a>
                                </div>
                                <div>
                                    <div class="flex items-center ">
                                        <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-bold text-gray-600 dark:text-white">50.000 FCFA/Jours</span>
                                <a href="#" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Voir l'offre</a>
                            </div>
                        </div>
                    </div>
                    <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src={v4} alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Peugeot 308</h5>
                            </a>
                            <div className="flex">
                                <div class="text-xs mb-2 font-bold text-blue-600 dark:text-white">Cotonou</div>

                            </div>
                            <div class="grid grid-cols-2 items-center mt-2.5 mb-5">

                                <div className="flex mb-2">
                                    <LuUsers className='me-1' />
                                    <div className='text-sm font-light'>4 personnes</div>
                                </div>
                                <div className="flex mb-2">
                                    <div>
                                        <img className='h-4 me-1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO2U4QqAIAyE790yaPT+/6of2XsYA4tJsFQWVPjBYHDHjiEOaBQyAtgAeABkpCWwIcRajbSEWRgnIy3BCWNnpF04jJbaTwNCZb0n4Ptv8EiAE0buJb2iZQfIL8+9ZFG07IDag+ZutjuhOIgHDAWatrkJPvdc10LKdg2o7ExWkc4uK+5nAAAAAElFTkSuQmCC" />
                                    </div>
                                    <div className='text-sm font-light'>Manuelle</div>
                                </div>
                                <div className="flex mb-2">
                                    <div>
                                        <MdOutlineCardTravel className='me-1' />
                                    </div>
                                    <div className='text-sm font-light'>1 Grande valise</div>
                                </div>
                                <div className="flex mb-2">
                                    <ImUserTie className='me-1' />
                                    <div className='text-sm font-light'>1 Chauffeur</div>
                                </div>
                                <div className="flex mb-2">
                                    <div >
                                        <svg className='h-4 w-4 me-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                                        </svg>
                                    </div>
                                    <div className='text-sm font-light'>2 petites valises</div>
                                </div>
                            </div>
                            <div className='py-4 grid grid-cols-2 border-1 border-b mb-4 border-t'>
                                <div>
                                    <a className=' text-sm font-bold text-blue-500 flex' href="">
                                        <AiOutlineInfoCircle className="me-1 text-xl" /> Infos importantes</a>
                                </div>
                                <div>
                                    <div class="flex items-center ">
                                        <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-bold text-gray-600 dark:text-white">50.000 FCFA/Jours</span>
                                <a href="#" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Voir l'offre</a>
                            </div>
                        </div>
                    </div>
                    <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src={v5} alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Peugeot 308</h5>
                            </a>
                            <div className="flex">
                                <div class="text-xs mb-2 font-bold text-blue-600 dark:text-white">Parakou</div>

                            </div>
                            <div class="grid grid-cols-2 items-center mt-2.5 mb-5">

                                <div className="flex mb-2">
                                    <LuUsers className='me-1' />
                                    <div className='text-sm font-light'>5 personnes</div>
                                </div>
                                <div className="flex mb-2">
                                    <div>
                                        <img className='h-4 me-1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO2U4QqAIAyE790yaPT+/6of2XsYA4tJsFQWVPjBYHDHjiEOaBQyAtgAeABkpCWwIcRajbSEWRgnIy3BCWNnpF04jJbaTwNCZb0n4Ptv8EiAE0buJb2iZQfIL8+9ZFG07IDag+ZutjuhOIgHDAWatrkJPvdc10LKdg2o7ExWkc4uK+5nAAAAAElFTkSuQmCC" />
                                    </div>
                                    <div className='text-sm font-light'>Manuelle</div>
                                </div>
                                <div className="flex mb-2">
                                    <div>
                                        <MdOutlineCardTravel className='me-1' />
                                    </div>
                                    <div className='text-sm font-light'>1 Grande valise</div>
                                </div>
                                <div className="flex mb-2">
                                    <ImUserTie className='me-1' />
                                    <div className='text-sm font-light'>1 Chauffeur</div>
                                </div>
                                <div className="flex mb-2">
                                    <div >
                                        <svg className='h-4 w-4 me-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                                        </svg>
                                    </div>
                                    <div className='text-sm font-light'>3 petites valises</div>
                                </div>
                            </div>
                            <div className='py-4 grid grid-cols-2 border-1 border-b mb-4 border-t'>
                                <div>
                                    <a className=' text-sm font-bold text-blue-500 flex' href="">
                                        <AiOutlineInfoCircle className="me-1 text-xl" /> Infos importantes</a>
                                </div>
                                <div>
                                    <div class="flex items-center ">
                                        <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-bold text-gray-600 dark:text-white">50.000 FCFA/Jours</span>
                                <a href="#" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Voir l'offre</a>
                            </div>
                        </div>
                    </div>
                    <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src={v6} alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Peugeot 308</h5>
                            </a>
                            <div className="flex">
                                <div class="text-xs mb-2 font-bold text-blue-600 dark:text-white">Sèmè-Podji</div>

                            </div>
                            <div class="grid grid-cols-2 items-center mt-2.5 mb-5">

                                <div className="flex mb-2">
                                    <LuUsers className='me-1' />
                                    <div className='text-sm font-light'>5 personnes</div>
                                </div>
                                <div className="flex mb-2">
                                    <div>
                                        <img className='h-4 me-1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO2U4QqAIAyE790yaPT+/6of2XsYA4tJsFQWVPjBYHDHjiEOaBQyAtgAeABkpCWwIcRajbSEWRgnIy3BCWNnpF04jJbaTwNCZb0n4Ptv8EiAE0buJb2iZQfIL8+9ZFG07IDag+ZutjuhOIgHDAWatrkJPvdc10LKdg2o7ExWkc4uK+5nAAAAAElFTkSuQmCC" />
                                    </div>
                                    <div className='text-sm font-light'>Manuelle</div>
                                </div>
                                <div className="flex mb-2">
                                    <div>
                                        <MdOutlineCardTravel className='me-1' />
                                    </div>
                                    <div className='text-sm font-light'>1 Grande valise</div>
                                </div>
                                <div className="flex mb-2">
                                    <ImUserTie className='me-1' />
                                    <div className='text-sm font-light'>1 Chauffeur</div>
                                </div>
                                <div className="flex mb-2">
                                    <div >
                                        <svg className='h-4 w-4 me-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                                        </svg>
                                    </div>
                                    <div className='text-sm font-light'>3 petites valises</div>
                                </div>
                            </div>
                            <div className='py-4 grid grid-cols-2 border-1 border-b mb-4 border-t'>
                                <div>
                                    <a className=' text-sm font-bold text-blue-500 flex' href="">
                                        <AiOutlineInfoCircle className="me-1 text-xl" /> Infos importantes</a>
                                </div>
                                <div>
                                    <div class="flex items-center ">
                                        <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-bold text-gray-600 dark:text-white">50.000 FCFA/Jours</span>
                                <a href="#" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Voir l'offre</a>
                            </div>
                        </div>
                        
                    </div>
                    

                </div>
                <div className=' max-w-[250px] _mx-auto my-8'>
                <a href="#" className='text-white justify-center items-center mx-auto flex bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'> 
                Consuter le catalogue 
                <FaAngleRight className="ms-1" /> 
                </a>
                </div>
                <h2 className="font-bold text-2xl mt-8 flex">
                    <MdKey className="me-2 text-green-600 mt-1" /> En vente en ce
                    moment
                </h2>
            </div>

            <div id="solution" className='my-20'>
                <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6 text-sky-500"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                            clip-rule="evenodd"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <div class="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
                        <div class="md:5/12 lg:w-1/2"></div>
                        <div class="md:7/12 lg:w-1/2">
                            <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                                Nuxt development is carried out by passionate
                                developers
                            </h2>
                            <p class="my-8 text-gray-600 dark:text-gray-300">
                                Nobis minus voluptatibus pariatur dignissimos
                                libero quaerat iure expedita at? Asperiores nemo
                                possimus nesciunt dicta veniam aspernatur quam
                                mollitia. Vitae error, quaerat officia delectus
                                voluptatibus explicabo quo pariatur impedit, at
                                reprehenderit aliquam a ipsum quas voluptatem. Quo
                                pariatur asperiores eum amet.
                            </p>
                            <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                                <div class="mt-8 flex gap-4 md:items-center my-4">
                                    <div class="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div class="w-5/6">
                                        <h3 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                                            Chat Anytime
                                        </h3>
                                        <p class="text-gray-500 dark:text-gray-400">
                                            Asperiores nemo possimus nesciunt quam
                                            mollitia.
                                        </p>
                                    </div>
                                </div>
                                <div class="pt-4 flex gap-4 md:items-center my-4">
                                    <div class="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div class="w-5/6">
                                        <h3 class="font-semibold text-lg text-gray-700 dark:text-teal-300">
                                            Real Time Location
                                        </h3>
                                        <p class="text-gray-500 dark:text-gray-400">
                                            Asperiores nemo possimus nesciunt quam
                                            mollitia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id='footer'>


                <footer class="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r bg-gradient-to-r_from-blue-900_to-cyan-950 bg-gray-200 text-white mt-10 border-t dark:bg-gray-900">
                    <div class="mx-auto w-full max-w-screen-xl">
                        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 text-sm">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">La société</h2>
                                <ul class="text-blue-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">A propos</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Services</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Nous contacter</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">Help center</h2>
                                <ul class="text-blue-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Discord Server</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Twitter</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Facebook</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">Legal</h2>
                                <ul class="text-blue-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Licensing</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">Download</h2>
                                <ul class="text-blue-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">iOS</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Android</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Windows</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">MacOS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 ">
                        <div className='mx-auto max-w-screen-xl md:flex md:items-center md:justify-between'>
                            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">Copyright © {new Date().getFullYear()} Rental Car Services Bénin. Tous droits réservés.

                            </span>
                            <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                                <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Facebook page</span>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                    </svg>
                                    <span class="sr-only">Discord community</span>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                        <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Twitter page</span>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">GitHub account</span>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Dribbble account</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    );
}

export default Header