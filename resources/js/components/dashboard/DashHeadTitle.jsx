import React, { Children } from 'react';
import { Link } from '@inertiajs/react';


export default function DashHeadTitle({children, title,subtitle}) {
  return (
    <>
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6">
            <h1 className="text-xl lg:text-3xl font-semibold mb-1">{title}</h1>
            <h2 className="text-gray-600 ml-0.5">{subtitle}</h2>
        </div>
        <div className="flex flex-wrap md:items-start md:justify-end md:-mb-3">
            
            {children}
        </div>
    </div>
    </>
  )
}
