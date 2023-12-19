import DashboardLayout from '@/Layouts/DashboardLayout'
import DashHeadTitle from '@/components/dashboard/DashHeadTitle'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import { AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/ai'

export default function Index({auth, page_name}) {
  return (
    <DashboardLayout  auth={auth} page_name={page_name}>
        <Head title='Nouvelle voiture'/>
        <DashHeadTitle title='Nouvelle voiture' subtitle="Ajouter une nouvelle voiture" >
            <Link className='px-4 flex items-center py-2 bg-white shadow-sm  rounded-md'
            href={route('dashboard.voitures')}>
            <AiOutlineArrowLeft className='me-1'/>    Retour
                </Link>
        </DashHeadTitle>
    </DashboardLayout>
  )
}
