import React from 'react'

import v1 from "../../assets/images/vehicules/v1.jpg";
import v2 from "../../assets/images/vehicules/v2.jpg";
import v3 from "../../assets/images/vehicules/v3.jpg";
import v4 from "../../assets/images/vehicules/v4.jpg";
import v5 from "../../assets/images/vehicules/v5.jpg";
import v6 from "../../assets/images/vehicules/v6.jpg";
import { FaAngleRight } from 'react-icons/fa6';
import { HTTP_FRONTEND_HOME } from '@/tools/constantes';
import { Link } from '@inertiajs/react';
export default function LocationTopMarque({marques=[]}) {
    return (
        <>
        <div className="shadow-inner py-4">
            {console.log(marques)}
            <div className="max-w-screen-xl mx-auto px-4">

                <h2 className="font-bold text-2xl mt-4 flex">
                    Les marques disponibles
                </h2>
                <p className="text-slate-500 mb-4">
                Idéales pour vos vacances, sorties en famille
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-4">
                    {marques?.length>0 && marques.map((marque,index)=>(
                        <MiniCard key={index} nom={marque.nom} slug={marque.slug} id={marque.id} info={marque.voitures_count+' Voitures'} image={marque.logo} />
                    ))}                  
                    
                </div>
                <div className='my-6'>
                        <a href={route('front.cat_locations')} className='font-bold text-blue-600 flex'>Trouver d'autres marques<FaAngleRight className="ms-1 mt-1" /> </a>
                    </div>
            </div>
            </div>
        </>
    )
}

function MiniCard({nom,info,image,slug,id=0}){
    return(
        <div className="border shadow-sm hover:bg-zinc-50 flex justify-between border-slate-100 rounded-lg  h-min-20">
            <div className='p-4'>
               <Link href={route('front.marq_voiture',{'slug':slug,'id':id})}><h3 className='font-bold text-xl'>{nom}</h3></Link> 
                <small className='text-slate-500'>{info} </small>
            </div>
            <div className=''>
            {image && 
            <Link href={route('front.marq_voiture',{'slug':slug,'id':id})}> <img className='h-12 m-4' src={HTTP_FRONTEND_HOME+''+image} alt={nom} /></Link> 
            }
            </div>
        </div>
    )
}