import React, { useEffect } from 'react'
import { useState, createContext, useContext, Fragment } from 'react';
import { Link } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

const DropDownContext = createContext();

const Menudropdown = ({ children, is_open=false }) => {
    const [open, setOpen] = useState(false);
    
    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen, is_open }}>
            <div className="relative">{children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger = ({ children }) => {
    const { open, setOpen, toggleOpen, is_open } = useContext(DropDownContext);

    return (
        <>
            <div className='hover:bg-gray-200 rounded-sm' onClick={toggleOpen}>{children}</div>

            {open && <div className="relative inset-0 z-40" onClick={() => setOpen(false)}></div>}
        </>
    );
};

const Content = ({ align = 'right', width = '48', contentClasses = 'py-1 font-bold w-full dark:bg-gray-700', children }) => {
    const { open, setOpen, is_open } = useContext(DropDownContext);

    let alignmentClasses = 'origin-top';

    if (align === 'left') {
        alignmentClasses = 'ltr:origin-top-left rtl:origin-top-right start-0';
    } else if (align === 'right') {
        alignmentClasses = 'ltr:origin-top-right rtl:origin-top-left end-0';
    }

    let widthClasses = '';

    if (width === '48') {
        widthClasses = 'w-48';
    }
    useEffect(()=>{
        if(is_open===true){
            setOpen(true)
        }
    },[]);

    return (
        <>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div
                    className={`relative z-50 mt-0 ms-4 rounded-md_shadow-lg ${alignmentClasses} ${widthClasses}`}
                    onClick={() => setOpen(false)}
                >
                    <div onClick={() => setOpen(true)} className={`rounded-md_ring-1_ring-black_ring-opacity-5  ` + contentClasses}>{children}</div>
                </div>
            </Transition>
        </>
    );
};

const DropdownLink = ({ className = '', children, ...props }) => {
    return (
        <Link
            {...props}
            className={
                'block py-2 hover:bg-gray-200 rounded-sm ms-5 px-2 leading-4 font-light text-sm w-full w-full_px-4_py-2_text-start text-sm_leading-5_text-gray-700 dark:text-gray-300  dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out ' +
                className
            }
        >
            {children}
        </Link>
    );
};

Menudropdown.Trigger = Trigger;
Menudropdown.Content = Content;
Menudropdown.Link = DropdownLink;

export default Menudropdown;
