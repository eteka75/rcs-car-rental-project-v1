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

import { Link, usePage } from '@inertiajs/react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AiOutlineSearch } from 'react-icons/ai';
import TopNav from '../topNav';
import { useEffect } from 'react';
import { setActive } from '@material-tailwind/react/components/Tabs/TabsContext';
import Top3Links from './Top3Links';

export default function FrontHeader({ auth }) {
    const [time, setTime] = useState('12:34pm');
    const { page_id } = usePage().props;
    return (
        <>
            <div  className='shadow bg-white'>

                <div className="bg-[#334155] overflow-hidden    bg-[left_calc(50%)_top_calc(22%)] bg-cover bg-no-repeat _bg-[#003b95] text-white  relativ">
                    <div className="bg-[#000] bg-gradient-to-t from-[rgba(0,0,0,.65)] bg-opacity-40">
                        <TopNav auth={auth} />
                        <div aria-hidden="true" className="hidden_  h-0 relative opacity-50">
                            <div className="blur-[56px] h-20 bg-gradient-to-br rotate-45 from-primary to-purple-800 dark:from-blue-700"></div>
                            <div className="blur-[56px] h-14 bg-gradient-to-r  from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Top3Links page={page_id} />
                </div>
            </div>
        </>
    )
};
