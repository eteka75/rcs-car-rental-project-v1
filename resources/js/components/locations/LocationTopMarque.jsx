import React from 'react'

import v1 from "../../assets/images/vehicules/v1.jpg";
import v2 from "../../assets/images/vehicules/v2.jpg";
import v3 from "../../assets/images/vehicules/v3.jpg";
import v4 from "../../assets/images/vehicules/v4.jpg";
import v5 from "../../assets/images/vehicules/v5.jpg";
import v6 from "../../assets/images/vehicules/v6.jpg";
import { FaAngleRight } from 'react-icons/fa6';
export default function LocationTopMarque() {
    return (
        <>
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
        </>
    )
}
