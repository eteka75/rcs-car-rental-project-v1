import DashboardLayout from '@/Layouts/DashboardLayout'
import DashHeadTitle from '@/components/dashboard/DashHeadTitle'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import { AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/ai'

export default function Index({ auth, page_name, page_title, page_subtitle }) {
  return (
    <DashboardLayout auth={auth} page_name={page_name}>
      <Head title={page_title} />
      <DashHeadTitle title={page_title} subtitle={page_subtitle} >
        <Link className='px-4 font-bold flex items-center py-2 bg-white shadow-sm  rounded-md'
          href={route('dashboard.voitures')}>
          <AiOutlineArrowLeft className='me-1' />    Retour
        </Link>
        <div>
          
        </div>
      </DashHeadTitle>
    </DashboardLayout>
  )
}
