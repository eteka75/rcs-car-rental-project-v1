import React from 'react';
import { Link } from '@inertiajs/react';


export default function DashHeadTitle({title,subtitle}) {
  return (
    <>
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6">
            <h1 className="text-xl lg:text-3xl font-semibold mb-2">{title}</h1>
            <h2 className="text-gray-600 ml-0.5">{subtitle}</h2>
        </div>
        <div className="flex flex-wrap md:items-start md:justify-end md:-mb-3">
            
            <Link href={route('dashboard')} className="inline-flex whitespace-nowrap items-center text-sm sm:text-md px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 rounded-md md:ml-6 md:mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nouvelle voiture
            </Link>
        </div>
    </div>
    </>
  )
}
