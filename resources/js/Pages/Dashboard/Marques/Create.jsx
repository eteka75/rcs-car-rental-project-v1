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
import VoitureForm from './VoitureForm';


export default function Index({ auth, page_id, page_title, page_subtitle }) {

  const [open, setOpen] = React.useState(1);



  return (
    <DashboardLayout auth={auth} page_id={page_id}>
      <Breadcrumb>
        <Link href={route('dashboard.voitures')} className="opacity-60">
          <span>Voitures</span>
        </Link>
        <Link href='#'>
          <span>Nouveau</span>
        </Link>
      </Breadcrumb>

      <Head title={page_title} />
      <DashHeadTitle title={page_title} subtitle={page_subtitle} >
        <Link className='px-4 font-bold flex items-center py-2 bg-white shadow-sm  rounded-md'
          href={route('dashboard.voitures')}>
          <AiOutlineArrowLeft className='me-1' />    Retour
        </Link>

      </DashHeadTitle>

      <Card className='lg:max-w-3xl'>
        <CardBody>
          <div className="App w-full md:w-4/5 md:m-auto">
           <VoitureForm />
            <div className="hidden">
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello from CKEditor&nbsp;5!</p>"
              onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event) => {
                console.log(event);
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </div>
            </div>
        </CardBody>
      </Card>
    </DashboardLayout>
  )
}
