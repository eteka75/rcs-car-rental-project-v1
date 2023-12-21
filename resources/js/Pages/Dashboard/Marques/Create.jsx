import DashboardLayout from '@/Layouts/DashboardLayout'
import DashHeadTitle from '@/components/dashboard/DashHeadTitle'
import { Head, Link } from '@inertiajs/react'
import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/ai';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
  CardBody,
  Input,
  Alert,
  Avatar,
  Breadcrumbs,
} from "@material-tailwind/react";
import Breadcrumb from '@/components/Breadcrumb';
import VoitureForm from './MarqueForm';
import MarqueForm from './MarqueForm';


export default function Index({ auth, page_id,pays, page_subid, page_title, page_subtitle }) {

  return (
    <DashboardLayout auth={auth} page_id={page_id} page_subid={page_subid}>
      <Breadcrumb>
        <Link href={route('dashboard.marques')} className="opacity-60">
          <span>Marques</span>
        </Link>
        <Link href='#'>
          <span>Nouveau</span>
        </Link>
      </Breadcrumb>

      <Head title={page_title} />
      <DashHeadTitle title={page_title} subtitle={page_subtitle} >
        <Link className='px-4 font-bold flex items-center py-2 bg-white shadow-sm  rounded-md'
          href={route('dashboard.marques')}>
          <AiOutlineArrowLeft className='me-1' />    Retour
        </Link>

      </DashHeadTitle>

      <Card className='lg:max-w-xl'>
        <CardBody>
          <div className="App w-full md:m-auto">
            <MarqueForm pays={pays}/>
          </div>
        </CardBody>
      </Card>
    </DashboardLayout>
  )
}
