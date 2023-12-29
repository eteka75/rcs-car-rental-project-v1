import React from 'react'
import { FcCallback } from 'react-icons/fc'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}
export default function LocationFaq({faqs}) {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>

            <div className="max-w-screen-xl mx-auto px-4 mb-16">
                <div className=" grid grid-cols-1 md:gap-4 lg:gap-6 md:grid-cols-6">
                    <div className="md:col-span-2 ">
                        <div className="text-center p-4 md:p-6 border rounded-xl font-normalmb-8">
                            <FcCallback className='text-8xl mx-auto mb-4' />
                            <h3 className="text-2xl font-extrabold">Services client</h3>
                            <div className='text-sm text-slate-500'>Nous sommes situé à Cotonou, Scoa-gbéto et ouvert du Lundi au Samedi de 9Heures à 17Heures</div>
                            <div className='mb-4'>
                                <a className='font-bold' href="tel:">(+229) 44 17 77 44</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 p-6 border rounded-xl font-normalmb-8">
                        <h2 className="text-3xl font-bold"> Questions fréquentes</h2>
                        <small className="text-slate-600">Découvrez la réponse aux questions que la plupart de nos clients</small>
                        {faqs?.length > 0 && faqs.map(({ question, reponse,id }, index) =>{
                            let class_last =((index+1)===faqs.length)?'border-b-0':'';
                           return (
                           <Accordion key={index} open={open === id} icon={<Icon id={id} open={open} />}>
                            <AccordionHeader className={'font-normal '+class_last} onClick={() => handleOpen(id)}>{question}</AccordionHeader>
                            <AccordionBody>
                            <div className='text-lg text-gray-800 bg-slate-100 p-4 rounded-md' dangerouslySetInnerHTML={{__html:reponse}}></div>

                            </AccordionBody>
                        </Accordion>
                        )
                        })}
                    </div>
                </div>
            </div >
        </>
    )
}
