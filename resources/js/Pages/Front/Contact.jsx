import FrontLayout from '@/Layouts/FrontLayout'
import FrontBreadcrumbs from '@/components/front/FrontBreadcrumbs'
import PageTitle from '@/components/front/PageTitle'
import React from 'react'
export default function Contact() {
  return (
    <FrontLayout>
    <div className="bg-slate-50_ shadow-inner mt-[1px]">
      <div className="max-w-screen-xl mx-auto px-4 ">
        <FrontBreadcrumbs pages={[{ 'url': "", 'page': ('Contact') }]} />
        <PageTitle title={"Contactez-nous"} />
      </div>
    </div>
  </FrontLayout>
  )
}
