import React from 'react'
import v1 from "../assets/images/vehicules/v1.jpg";
import v2 from "../assets/images/vehicules/v2.jpg";
import v3 from "../assets/images/vehicules/v3.jpg";
import v4 from "../assets/images/vehicules/v4.jpg";
import v5 from "../assets/images/vehicules/v5.jpg";
import v6 from "../assets/images/vehicules/v6.jpg";
import vexpert from "../assets/images/design/v-expert.png";
import fleche from "../assets/images/design/fleche.png";
import { MdCarRental, MdChecklistRtl, MdOutlineCardTravel } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
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
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineUpdate } from "react-icons/md";


//import dayjs from 'dayjs';

import { useState } from 'react';;

import TimeKeeper from 'react-timekeeper';

import "../Index.css"
import LocationSteps from './locations/LocationSteps';
import LocationExpert from './locations/LocationExpert';
import LocationTop from './locations/LocationTop';
import LocationTopMarque from './locations/LocationTopMarque';
import LocationHelpSteps from './locations/LocationHelpSteps';
import LocationFaq from './locations/LocationFaq';
import FooterMega from './FooterMega';

function Header({ auth }) {
    const [time, setTime] = useState('12:34pm');
    const heures = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    const minutes = [0, 15, 30, 45];
    //const [today, setToday] = React.useState(dayjs(new Date()));

    return (
        <>
            {/*
      Color1 : 022B3A
      Color2 : 022B3A
      */}

            <div className="max-w-screen-xl mx-auto p-4 relative">

                <div className="w-full py-16 hidden border rounded-3xl shadow-sm mt-10 _flex flex-col items-center" data-v-b444fb2c=""><h2 data-aos="flip-down" className="text-3xl sm:text-4xl font-semibold text-center aos-init aos-animate" data-v-b444fb2c="">
                    La location se fait en 3 étapes :  <br />
                    <span className="text-slate-500 text-3xl">Simple, facile et sécurisé</span>
                </h2> <div data-aos="fade-up" className="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8 aos-init aos-animate" data-v-b444fb2c=""><div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center" data-v-b444fb2c="">
                    <img src={v1} alt="" className="max-w-[245px] mx-auto" />
                    <h3 className="text-xl text-neutral-800 font-semibold">Sign Up</h3> <p className="text-sm text-gray-700 leading-relaxed">
                        Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile
                    </p></div><div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center" data-v-b444fb2c="">
                            <img src={v4} alt="" className="max-w-[245px] mx-auto" />
                            <h3 className="text-xl text-neutral-800 font-semibold">Fund</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet
                            </p></div>
                        <div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center" data-v-b444fb2c="">
                            <img src={v2} alt="" className="max-w-[245px] mx-auto" /> <h3 className="text-xl text-neutral-800 font-semibold">Buy Crypto</h3> <p className="text-sm text-gray-700 leading-relaxed">
                                Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere
                            </p></div> <img src={fleche} alt="" className="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]" data-v-b444fb2c="" />
                        <img src={fleche} alt="" className="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]" data-v-b444fb2c="" /></div></div>
            </div>



            <LocationHelpSteps />

            <LocationFaq />
            



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
        </>
    );
}

export default Header