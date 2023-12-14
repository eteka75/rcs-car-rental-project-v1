import React from 'react'
import Logo from "../assets/images/logo-v0-min.png";
import v1 from "../assets/images/vehicules/v1.jpg";
import v2 from "../assets/images/vehicules/v2.jpg";
import v3 from "../assets/images/vehicules/v3.jpg";
import v4 from "../assets/images/vehicules/v4.jpg";
import v5 from "../assets/images/vehicules/v5.jpg";
import v6 from "../assets/images/vehicules/v6.jpg";
import vexpert from "../assets/images/design/v-expert.png";
import fleche from "../assets/images/design/fleche.png";
import { MdCarRental, MdChecklistRtl } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { ImUserTie } from "react-icons/im";
import { MdOutlineCardTravel } from "react-icons/md";
import { AiOutlineInfoCircle, AiOutlineMail, AiOutlineSearch } from "react-icons/ai";
import { FcAutomotive, FcCallback, FcCheckmark, FcCurrencyExchange, FcSearch, FcShipped } from "react-icons/fc";
import { FiShoppingCart } from "react-icons/fi";
import { FaCar, FaCarOn } from "react-icons/fa6";
import { MdManageHistory } from "react-icons/md";
import { FaCarAlt, FaSearch } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { TbCalculator, TbSettingsDollar } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { Link } from '@inertiajs/react';
import { MdKey } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineUpdate } from "react-icons/md";




import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import dayjs from 'dayjs';

import { useState } from 'react';;

import TimeKeeper from 'react-timekeeper';

import "../Index.css"

function Header({ auth }) {
    const [time, setTime] = useState('12:34pm');
    const heures= [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    const minutes= [0,15,30,45];
    //const [today, setToday] = React.useState(dayjs(new Date()));

    return (
        <>
            {/*
      Color1 : 022B3A
      Color2 : 022B3A
      */}
     
            <div className="bg-[#333] overflow-hidden  bg-[url('@/assets/images/design/bg-2.jpg')] bg-[left_calc(0%)_top_calc(50%)] bg-cover bg-no-repeat _bg-[#003b95] text-white  relativ">
            <div className="bg-[#000] bg-gradient-to-t from-[rgba(0,0,0,.65)] bg-opacity-40">
            
                <nav className="max-w-screen-xl mx-auto relative absolute_">
                    <div className="  flex flex-wrap items-center justify-between p-4">
                        <a
                            href={"/"}
                            className="flex items-center mb-4 space-x-3 rtl:space-x-reverse"
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
                <div aria-hidden="true" className="hidden_  h-0 relative opacity-50">
                    <div className="blur-[56px] h-20 bg-gradient-to-br rotate-45 from-primary to-purple-800 dark:from-blue-700"></div>
                    <div className="blur-[56px] h-14 bg-gradient-to-r  from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
                </div>

                <div className="max-w-screen-xl flex flex-wrap items-center justify-start mx-auto px-4 pb-4 relative">
                    <ul className="flex flex-wrap text-sm font-medium  text-center  border-gray-200 text-white">
                        <li className="me-2  text-lg">
                            <a
                                href="#"
                                aria-current="page"
                                className="flex px-4 py-2 text-black   hover:opacity-100 opacity-95 border-yellow-500  bg-yellow-500 _bg-[rgba(255,255,255,.2)] rounded-full active"
                            >
                                <MdCarRental className="text-2xl  me-1" />
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
                        className="in-message w-full h-10 lg:h-20"
                        id="message-top"
                    ></div>
                    <div className="text-center_ w-full" id="form-head">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                            Location de voiture pour tout type de voyage
                        </h1>
                        <h2 className="sm:text-md lg:text-2xl text-center_">
                            De super offres à des tarifs avantageux, proposées par
                            les plus grandes sociétés de location de voitures.
                        </h2>
                    </div>
                </div>
            
                <div className="max-w-screen-xl mx-auto  px-4 pb-10">
                <div className=" flex  rounded-md flex-wrap  bg-yellow-500 shadow  w-full  p-2">
                    <div className="grid grid-cols-12 w-full  gap-2">
                        <div className="col-span-12 lg:col-span-10 grid grid-cols-12 gap-2 lg:gap-0">
                            <div className="col-span-12 lg:col-span-4 flex">
                                <input
                                    type="text"
                                    className="border text-gray-800  inset-4 border-slate-100 focus:ring-0 text-xl rounded-sm w-full"
                                    placeholder="Saisir le lieu de location...."
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-8 lg:col-span-2 lg:ms-2 border-0  flex">
                                <LocalizationProvider className="" dateAdapter={AdapterDayjs}>
                                    <DatePicker className='w-full ' label="Date départ..." />
                                </LocalizationProvider>
                            </div>
                            <div className="col-span-12 md:ms-1 sm:col-span-4 text-black lg:col-span-2 grid grid-cols-2">
                              <select name='heur_debut' className='text-sm pe-0  rounded-sm border-0 rounded-0 bg-white'>
                                <option value=''>Heure</option>
                                {heures.map((v)=>
                                    <option key={v} value={v}>{v>9?v:'0'+v}H</option>

                                )}
                              </select>
                              <select name='min_debut' className='text-md border-slate-100  rounded-sm -ms-1 border-l-white'>
                                <option value=''>min</option>
                                {minutes.map((v)=>
                                    <option key={v} value={v}>{v>9?v:'0'+v}</option>
                                )}
                              </select>
                            </div>
                            <div className="col-span-12 sm:col-span-8 lg:col-span-2 flex lg:ms-2">
                            <LocalizationProvider className="bg-white" dateAdapter={AdapterDayjs}>
                                <DatePicker className=' w-full' label="Date arrivé..." />
                                </LocalizationProvider>
                            </div>
                            <div className="col-span-12 sm:col-span-4 md:ms-1 text-black lg:col-span-2 grid grid-cols-2">
                              <select name='heur_debut' className='text-sm  pe-0 border rounded-sm border-white bg-white '>
                                <option value=''>Heure</option>
                                {heures.map((v)=>
                                    <option>{v}H</option>
                                )}
                              </select>
                              <select name='min_debut' className='text-md border-slate-100 rounded-sm -ms-1 border-l-white'>
                                <option value=''>min</option>
                                {minutes.map((v)=>
                                    <option>{v>9?v:'0'+v}</option>
                                )}
                              </select>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-2 text-end">
                            <button className="px-4 mx-auto justify-center text-center py-3.5 items-center text-xl text-white bg-gray-800 flex rounded-sm w-full">
                             <AiOutlineSearch className='me-1'/>   Rechercher
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto p-4 relative">

                <div className="w-full py-16 hidden border rounded-3xl shadow-sm mt-10 _flex flex-col items-center" data-v-b444fb2c=""><h2 data-aos="flip-down" className="text-3xl sm:text-4xl font-semibold text-center aos-init aos-animate" data-v-b444fb2c="">
       La location se fait en 3 étapes :  <br/> 
       <span className="text-slate-500 text-3xl">Simple, facile et sécurisé</span>
      </h2> <div data-aos="fade-up" className="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8 aos-init aos-animate" data-v-b444fb2c=""><div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center" data-v-b444fb2c="">
        <img src={v1} alt="" className="max-w-[245px] mx-auto"/> 
        <h3 className="text-xl text-neutral-800 font-semibold">Sign Up</h3> <p className="text-sm text-gray-700 leading-relaxed">
    Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile
  </p></div><div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center" data-v-b444fb2c="">
    <img src={v4} alt="" className="max-w-[245px] mx-auto"/> 
    <h3 className="text-xl text-neutral-800 font-semibold">Fund</h3> 
    <p className="text-sm text-gray-700 leading-relaxed">
    Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet
  </p></div>
  <div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center" data-v-b444fb2c="">
    <img src={v2} alt="" className="max-w-[245px] mx-auto"/> <h3 className="text-xl text-neutral-800 font-semibold">Buy Crypto</h3> <p className="text-sm text-gray-700 leading-relaxed">
    Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere
  </p></div> <img src={fleche} alt="" className="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]" data-v-b444fb2c="" /> 
  <img src={fleche} alt="" className="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]" data-v-b444fb2c="" /></div></div>


                <div className="xl:px-10 mx-auto pb-6 grid grid-cols-12 gap-4 lg:gap-6">
                <div className="col-span-12 md:col-span-4 ">
                    
                    <div className="flex text-lg font-bold items-center">
                                <div className='text-blue-700_'>1- Recherche de voitures</div>
                                <FcSearch className='text-center justify-center leading-10 h-10 w-10 font-bold rounded-lg  text-sm  p-2' />
                    </div>
                    <div className="text-sm px-2 text-slate-600">
                        Renseignez votre localisation, la date de départ et d'arrivée à ce lieu
                    </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                    
                    <div className="flex text-lg font-bold items-center">
                                <div>2- Informations & payement</div>
                                <FcCurrencyExchange  className='text-center justify-center leading-10 h-10 w-10 font-bold rounded-lg  text-sm  p-2' />
                    </div>
                    <div className="text-sm px-2 text-slate-600">
                        Créez un compte ou connectez vous à votre compte puis validez la transaction
                    </div>
                </div>
                <div className="col-span-12 md:col-span-4  w-full">
                   
                    <div className="flex text-lg font-bold items-center">
                                <div>3- Récupérez votre voiture</div>
                                <FcAutomotive  className='text-center justify-center leading-10 h-10 w-10 font-bold rounded-lg  text-sm  p-2' />
                    </div>
                    <div className="text-sm px-2 text-slate-600 flex">
                     Suivez les indication qui vous sont envoyées pour passer récupéer votre voiture et c'est partie 
                    </div>
                </div>
                </div>
                
            </div>
            <div className="bg-slate-100 py-8 ">
                <div className="max-w-screen-xl mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <img src={vexpert} alt="h-auto max-w-full" />
                        </div>
                        <div className='py-10'>
                            <h1 className="text-4xl font-extrabold mb-4">Notre expertise à votre service</h1>
                            <div className="flex text-xl items-center mb-4">
                                <MdAttachMoney className='text-center justify-center leading-10 h-10 w-10 font-bold rounded-full me-2 text-sm bg-white shadow p-2' />
                                <div>Une analyse objective des prix</div>
                            </div>
                            <div className="flex text-xl items-center mb-4">
                                <MdChecklistRtl  className='text-center justify-center leading-10 h-10 w-10 font-bold rounded-full me-2 text-sm bg-white shadow p-2' />
                                <div>Une visibilité complète sur l'historique du véhicule</div>
                            </div>
                            <div className="flex text-xl items-center mb-4">
                            <TbCalculator  className='text-center justify-center leading-10 h-10 w-10 font-bold rounded-full me-2 text-sm bg-white shadow p-2' />
                                <div>Votre budget maîtrisé avec notre simulateur de financement</div>
                            </div>
                            <div className="flex text-xl items-center mb-4">
                            <TbSettingsDollar   className='text-center justify-center leading-10 h-10 w-10 font-bold rounded-full me-2 text-sm bg-white shadow p-2' />
                               <div>Une projection claire sur les futurs entretiens de votre voiture</div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="max-w-screen-xl mx-auto p-4">
                <h2 className="font-bold text-2xl  mb-4 mt-8 flex">
                  
                  Actuellement en location
                </h2>
                <div id='car' className="car-vehicules mt-6 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                    <div className=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={v1} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Peugeot 308</h5>
                            </a>
                            <div className="flex">
                                <div className="text-xs mb-2 font-bold text-blue-600 dark:text-white">Cotonou</div>

                            </div>
                            <div className="grid grid-cols-2 items-center mt-2.5 mb-5">

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
                                    <div className="flex items-center ">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-gray-600 dark:text-white">50.000 FCFA/Jours</span>
                                <a href="#" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Voir l'offre</a>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={v2} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Peugeot 308</h5>
                            </a>
                            <div className="flex">
                                <div className="text-xs mb-2 font-bold text-blue-600 dark:text-white">Cotonou</div>

                            </div>
                            <div className="grid grid-cols-2 items-center mt-2.5 mb-5">

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
                                    <div className="flex items-center ">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-gray-600 dark:text-white">50.000 FCFA/Jours</span>
                                <a href="#" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Voir l'offre</a>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={v3} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Peugeot 308</h5>
                            </a>
                            <div className="flex">
                                <div className="text-xs mb-2 font-bold text-blue-600 dark:text-white">Abomey-Calavi</div>

                            </div>
                            <div className="grid grid-cols-2 items-center mt-2.5 mb-5">

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
                                    <div className="flex items-center ">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-gray-600 dark:text-white">50.000 FCFA/Jours</span>
                                <a href="#" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Voir l'offre</a>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={v4} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Peugeot 308</h5>
                            </a>
                            <div className="flex">
                                <div className="text-xs mb-2 font-bold text-blue-600 dark:text-white">Cotonou</div>

                            </div>
                            <div className="grid grid-cols-2 items-center mt-2.5 mb-5">

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
                                    <div className="flex items-center ">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-gray-600 dark:text-white">50.000 FCFA/Jours</span>
                                <a href="#" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Voir l'offre</a>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={v5} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Peugeot 308</h5>
                            </a>
                            <div className="flex">
                                <div className="text-xs mb-2 font-bold text-blue-600 dark:text-white">Parakou</div>

                            </div>
                            <div className="grid grid-cols-2 items-center mt-2.5 mb-5">

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
                                    <div className="flex items-center ">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-gray-600 dark:text-white">50.000 FCFA/Jours</span>
                                <a href="#" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Voir l'offre</a>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={v6} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Peugeot 308</h5>
                            </a>
                            <div className="flex">
                                <div className="text-xs mb-2 font-bold text-blue-600 dark:text-white">Sèmè-Podji</div>

                            </div>
                            <div className="grid grid-cols-2 items-center mt-2.5 mb-5">

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
                                    <div className="flex items-center ">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-gray-600 dark:text-white">50.000 FCFA/Jours</span>
                                <a href="#" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Voir l'offre</a>
                            </div>
                        </div>
                        
                    </div>
                    

                </div>
                <div className='  mt-6'>
                <a href="#" className=' items-center px-0 mx-auto flex bg-white hover:opacity-70   text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold   text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'> 
                Consuter le catalogue 
                <FaAngleRight className="ms-1" /> 
                </a>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-4">

                <h2 className="font-bold text-2xl mt-4  mb-4 flex">
                    Les marques idéales pour vos vacances
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-6">
                    <div className="border border-slate-100 rounded-lg shadow-md h-min-20">
                        <div className='p-4'>
                        <h3 className='font-bold text-xl'>Peugeot</h3>
                        <small className='text-slate-500'>124 disponibles</small>
                        </div>           
                        <img src={v1} alt="" /> 
                    </div>
                    <div className="border border-slate-100 rounded-lg shadow-md h-min-20">
                        <div className='p-4'>
                        <h3 className='font-bold text-xl'>FIAT</h3>
                        <small className='text-slate-500'>08 disponibles</small>
                        </div>           
                        <img src={v2} alt="" /> 
                    </div>
                    <div className="border border-slate-100 rounded-lg shadow-md h-min-20">
                        <div className='p-4'>
                        <h3 className='font-bold text-xl'>Toyota</h3>
                        <small className='text-slate-500'>3 disponibles</small>
                        </div>           
                        <img src={v3} alt="" /> 
                    </div>
                    <div className="border border-slate-100 rounded-lg shadow-md h-min-20">
                        <div className='p-4'>
                        <h3 className='font-bold text-xl'>Hundai</h3>
                        <small className='text-slate-500'>16 disponibles</small>
                        </div>           
                        <img src={v3} alt="" /> 
                    </div>
                    <div className="border border-slate-100 rounded-lg shadow-md h-min-20">
                        <div className='p-4'>
                        <h3 className='font-bold text-xl'>Hundai</h3>
                        <small className='text-slate-500'>01 disponible</small>
                        </div>           
                        <img src={v6} alt="" /> 
                    </div>
                    <div className='mb-6'>
                        <a href="#" className='font-bold text-blue-600 flex'>Trouver d'autres marques<FaAngleRight className="ms-1 mt-1" /> </a>
                    </div>
                </div>
            </div>
            <div className=" md:py-4 mb-8 bg-slate-50 shadow">
                <div className=" rounded-lg  max-w-screen-xl mx-auto p-4 grid md:grid-cols-2 gap-2 lg:grid-cols-3">
                    <div className=" flex gap-4 md:items-center my-4">
                        <div className="w-20 h-20 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-10 h-10 m-auto text-indigo-500 dark:text-indigo-400"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div className="w-5/6 py-2">
                            <h3 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                                Nous sommes là pour vous aider
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Notre service client répond à toutes vos
                                préoccupations
                            </p>
                        </div>
                    </div>
                    <div className=" flex gap-4 md:items-center my-4">
                        <div className="w-20 h-20 flex gap-4 rounded-full bg-teal-200 dark:bg-indigo-900/20">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-10 h-10 m-auto text-teal-600 dark:text-teal-400"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div className="w-5/6 py-2">
                            <h3 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                                Nous sommes là pour vous aider
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Notre service client répond à toutes vos
                                préoccupations
                            </p>
                        </div>
                    </div>
                    <div className=" flex gap-4 md:items-center my-4">
                        <div className="w-20 h-20 flex gap-4 rounded-full bg-amber-500 dark:bg-indigo-900/20  justify-center items-center">
                            <MdOutlineUpdate className="h-10 w-10 mx-auto" />
                        </div>
                        <div className="w-5/6 py-2">
                            <h3 className="font-semibold text-lg text-gray-700 dark:text-red-100">
                                Nous sommes là pour vous aider
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Notre service client répond à toutes vos
                                préoccupations
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="max-w-screen-xl mx-auto px-4">

                <div className=" grid grid-flow-col md:gap-4 lg:gap-6 md:grid-cols-6">
                <div className="col-span-2 ">
                <div className="text-center p-6 border rounded-xl shadow mb-8">
                    <FcCallback className='text-8xl mx-auto mb-4' />
                    <h3 className="text-2xl font-extrabold">Servicles client</h3>
                    <div className='text-sm text-slate-500'>Nous sommes situé à Cotonou, Scoa-gbéto et ouvert du Lundi au Samedi de 9Heures à 17Heures</div>
                    <div className='mb-4'>
                        <a className='font-bold' href="tel:">(+229) 44 17 77 44</a>
                    </div>
                </div>
                </div>
                <div className="col-span-4 p-6 border rounded-xl shadow mb-8">
                    <h2 className="text-3xl font-bold"> Questions fréquentes</h2>
                    <small className="text-slate-600">Découvrez la réponse aux questions que la plupart de nos clients</small>
                    <div className="grid">                        
                        <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                            <span>What is Flowbite?</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                            <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                            </div>
                        </div>
                        <h2 id="accordion-flush-heading-2">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                            <span>Is there a Figma file available?</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                            <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                            </div>
                        </div>
                        <h2 id="accordion-flush-heading-3">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                            <span>What are the differences between Flowbite and Tailwind UI?</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="grid">                        
                        <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                            <span>What is Flowbite?</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                            <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                            </div>
                        </div>
                        <h2 id="accordion-flush-heading-2">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                            <span>Is there a Figma file available?</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                            <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                            </div>
                        </div>
                        <h2 id="accordion-flush-heading-3">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                            <span>What are the differences between Flowbite and Tailwind UI?</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
            
           

            <div id="solution" className='my-20 hidden'>
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-sky-500"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                            clipRule="evenodd"
                        ></path>
                        <path
                            fillRule="evenodd"
                            d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <div className="space-y-6  justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
                        <div className="md:5/12 lg:w-1/2"></div>
                        <div className="md:7/12 lg:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                                Nuxt development is carried out by passionate
                                developers
                            </h2>
                            <p className="my-8 text-gray-600 dark:text-gray-300">
                                Nobis minus voluptatibus pariatur dignissimos
                                libero quaerat iure expedita at? Asperiores nemo
                                possimus nesciunt dicta veniam aspernatur quam
                                mollitia. Vitae error, quaerat officia delectus
                                voluptatibus explicabo quo pariatur impedit, at
                                reprehenderit aliquam a ipsum quas voluptatem. Quo
                                pariatur asperiores eum amet.
                            </p>
                            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                                <div className="mt-8 flex gap-4 md:items-center my-4">
                                    <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="w-5/6">
                                        <h3 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                                            Chat Anytime
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Asperiores nemo possimus nesciunt quam
                                            mollitia.
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-4 flex gap-4 md:items-center my-4">
                                    <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="w-5/6">
                                        <h3 className="font-semibold text-lg text-gray-700 dark:text-teal-300">
                                            Real Time Location
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400">
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
                <footer className="bg-gray-950 dark:bg-gray-900">                    
                    <div className="mx-auto w-full max-w-screen-xl relative">                    
                        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 text-sm">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">La société</h2>
                                <ul className="text-blue-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">A propos</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Services</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Nous contacter</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">Help center</h2>
                                <ul className="text-blue-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Discord Server</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Twitter</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Facebook</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">Legal</h2>
                                <ul className="text-blue-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Licensing</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">Download</h2>
                                <ul className="text-blue-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">iOS</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Android</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Windows</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">MacOS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 ">
                        <div className='mx-auto max-w-screen-xl md:flex md:items-center md:justify-between'>
                            <span className="text-sm text-gray-500 dark:text-gray-300  sm:text-center">Copyright © {new Date().getFullYear()} Rental Car Services Bénin. Tous droits réservés.

                            </span>
                            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                    </svg>
                                    <span className="sr-only">Discord community</span>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                        <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">Twitter page</span>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">GitHub account</span>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">Dribbble account</span>
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