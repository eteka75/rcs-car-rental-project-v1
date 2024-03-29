import FrontLayout from '@/Layouts/FrontLayout'
import FrontBreadcrumbs from '@/components/front/FrontBreadcrumbs'
import PageTitle from '@/components/front/PageTitle'
import React from 'react'

export default function Marques() {
    return (
        <FrontLayout>
    <PageTitle title={"Marques"}>
     <FrontBreadcrumbs pages={[{ 'url': route("front.locations"), 'page': ("Locations") },{ 'url': "", 'page': ("Marques") }]} />

     </PageTitle>
 <div className="bg-slate-50_ shadow-inner mt-[1px]">
   <div className="max-w-screen-xl mx-auto px-4 ">
    
   </div>
 </div>
</FrontLayout>
    )
}
