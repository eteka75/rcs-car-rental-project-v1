import FrontLayout from '@/Layouts/FrontLayout'
import FrontBreadcrumbs from '@/components/front/FrontBreadcrumbs'
import PageTitle from '@/components/front/PageTitle'
import React from 'react'

export default function Services() {
  return (
    <FrontLayout>
      <PageTitle title={"Services"} head={true}>
          <FrontBreadcrumbs pages={[{ 'url': "", 'page': ('Services') }]} />
      </PageTitle>
      <div className="bg-slate-50_ shadow-inner mt-[1px]">
        <div className="max-w-screen-xl mx-auto px-4 ">
        </div>
      </div>
    </FrontLayout>
  )
}
