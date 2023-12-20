import React from 'react';
import { Breadcrumbs } from '@material-tailwind/react'
import { VscDashboard } from 'react-icons/vsc';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from '@inertiajs/react';
import { MdOutlineArrowRight } from "react-icons/md";

export default function Breadcrumb({children}) {
  return (
    <>
     <Breadcrumbs className='px-0' separator={<MdOutlineArrowRight className='opacity-60 w-2' />} >
     <Link href={route('home')} className="opacity-60">
       <AiOutlineHome
        className='h-4  w-5 opacity-60'/>
      </Link>
      <Link href={route('dashboard')} className="opacity-60">
       Tableau de bord
      </Link>
      {children}
    </Breadcrumbs>
    </>
  )
}
