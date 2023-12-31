import { Link } from '@inertiajs/react'
import React from 'react'

export default function TopLieux(lieux) {
    return (
        <>
         {//lieux?.lenght>0 && 
            <div className="max-w-screen-xl mx-auto p-4">
                <h2 className="font-bold text-2xl  mt-8 flex">
                    Lieux prisés pour les locations de voiture
                </h2>
                {console.log("LIEUX",lieux)}
                <p className="text-slate-600">Découvrez plus d'options pour louer une voiture pas cher  </p>
                <div className="py-4">
                    <div className="md:grid md:grid-cols-5 xl:grid-flow-row-dense lg:grid-cols-6 md:gap-6 py-4 space-y-4">
                        {lieux?.lenght>0 && lieux?.map((lieu,index)=>{
                            <div className="">
                                <Link className='text-md font-semibold text-blue-600__ border_px-6 py-2 rounded-md'> • {lieu.nom}</Link>
                            </div>
                        })}
                        <div className="">
                            <Link className='text-md font-semibold text-blue-600__ border_px-6 py-2 rounded-md'>
                                •  Cotonou
                            </Link>
                        </div>
                        <div className="">
                            <Link className='text-md font-semibold text-blue-600__ border_px-6 py-2 rounded-md'>
                                •  Ouidah
                            </Link>
                        </div>
                        <div className="">
                            <Link className='text-md font-semibold text-blue-600__ border_px-6 py-2 rounded-md'>
                                •  Dangbo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}
