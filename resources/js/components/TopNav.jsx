import React from 'react';
import { Link } from '@inertiajs/react';
import Logo from "../assets/images/logo-v0-min.png";
import { FiShoppingCart } from 'react-icons/fi';
import UserMenu from './UserMenu';
import { FaHome } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { FaCarOn } from 'react-icons/fa6';
import Translate from './Translate';
import i18n from 'i18next';
import "../i18n"


export default function TopNav({ auth = {}, mode='max-w-screen-xl'}) {
   // i18n.changeLanguage('en');
   
    
    const changeLang=(lang)=>{
        const langs= ['fr','en'];
        if(langs.indexOf(lang)>=0){
            i18n.changeLanguage(lang);
        }

    }
    return (
        <>
        <div className="top rounded-md bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-500 pt-[2px] transition-all duration-700"></div>
            <nav className={" mx-auto relative "+mode}>
                <div className=" flex flex-wrap items-center justify-between py-3 px-4">
                    <Link
                        href={"/"}
                        className="flex items-center  space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src={Logo}
                            className="h-10"
                            alt="Logo CRS Bénin"
                        />
                        <span className="self-center hidden sm:flex md:text-xl uppercase_ font-semibold whitespace-nowrap dark:text-white">
                            Rental Car Services
                        </span>
                    </Link>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-language"
                    >
                        <ul className="flex flex-col relative font-medium  md:p-0 mt-4 border rounded-lg  md:space-x-1 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            
                            <li>
                                        <Link
                                            href={route('home')}
                                            className="inline-flex items-center  border-slate-50 border-0 text-slate-200 font-medium justify-center px-2 lg:px-2 py-1.5 text-sm hover:text-yellow-500 transition-all duration-300 dark:text-white rounded-lg cursor-pointer  dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                             <Translate>Accueil</Translate>
                                        </Link>
                                    </li>
                            {!auth.user ? (
                                <>

                                    
                                    <li>
                                        <Link
                                            href={route('register')}
                                            className="inline-flex items-center  border-slate-50 border-0 text-slate-200 font-medium justify-center px-2 lg:px-2 py-1.5 text-sm hover:text-yellow-500 transition-all duration-300 dark:text-white rounded-lg cursor-pointer  dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                           <Translate>S'inscrire</Translate> 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route('login')}
                                            className="inline-flex items-center   text-slate-200 font-bold justify-center px-2 lg:px-2 py-1.5 text-sm hover:text-yellow-500 transition-all duration-300 dark:text-white rounded-lg cursor-pointer  dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            
                                           <Translate>Se connecter</Translate> 

                                        </Link>
                                    </li>

                                </>
                            ) : (
                                ''
                            )}
                            <li>
                                {i18n.language==='en' ?
                                <Link title='Français'
                                    onClick={()=>changeLang('fr')}
                                    className="inline-flex items-center  border-slate-50 border-0 text-blue-200 underline font-medium justify-center px-2 lg:px-2 py-1.5 text-sm hover:text-yellow-500 transition-all duration-300 dark:text-white rounded-lg cursor-pointer  dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Fr
                                </Link>
                                :
                                <Link title='English'
                                    onClick={()=>changeLang('en')}
                                    className="inline-flex items-center  border-slate-50 border-0 text-blue-200 underline font-medium justify-center px-2 lg:px-2 py-1.5 text-sm hover:text-yellow-500 transition-all duration-300 dark:text-white rounded-lg cursor-pointer  dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    En
                                </Link>}
                            </li>
                            
                            <li>
                               <Link  href={route('front.panier')}
                                    type="button"
                                    className="inline-flex  text-slate-50 hover:text-slate-300  items-center w-10 leading-10 py-2  justify-center  "
                                >
                                    <span className="bg-red-500 text-center items-center text-white text-[13px] rounded-full absolute ms-6 -mt-4 w-5 h-5 leading-5">3</span>
                                    <FiShoppingCart />
                                </Link>
                            </li>

                            {auth.user &&
                                (
                                    <>
                                <li className='hidden'>
                                    <button
                                        type="button"
                                        data-dropdown-toggle="language-dropdown-menu"
                                        className="inline-flex ms-2 items-center text-slate-900 border border-yellow-500 bg-yellow-500 font-medium justify-center px-4 py-1.5 text-sm hover:text-b  dark:text-white rounded-lg cursor-pointer hover:opacity-90 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <FaCarOn className="me-1 text-xl" /> Gérer mes locations
                                    </button>
                                </li>
                                <li>
                                    <UserMenu auth={auth} />
                                </li>
                                </>)}
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-sm md:hidden hover:bg-[rgba(255,255,255,.3)] focus:outline-none focus:ring-1 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </nav>
        </>
    )
}
