import FrontLayout from '@/Layouts/FrontLayout'
import FrontBreadcrumbs from '@/components/front/FrontBreadcrumbs'
import PageTitle from '@/components/front/PageTitle'
import LocationExpert from '@/components/locations/LocationExpert'
import LocationTopMarque from '@/components/locations/LocationTopMarque'
import TopVentes from '@/components/locations/TopVentes'
import { HTTP_FRONTEND_HOME } from '@/tools/constantes'
import { truncateString } from '@/tools/utils'
import { Link } from '@inertiajs/react'
import { Button, Carousel, Typography } from '@material-tailwind/react'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
export default function Achats({en_ventes,vente_marques}) {
  return (
    <FrontLayout>
      <div className="bg-slate-50_ shadow-inner mt-[1px]">
        {console.log(en_ventes)}
        <PageTitle title={"Vente de voitures"} >
          <FrontBreadcrumbs pages={[{ 'url': "", 'page': ("Vente de voitures neuves ou d'occasion") }]} />
        </PageTitle>
        <TopVentes ventes={en_ventes}/>

        <div className="max-w-screen-xl mx-auto px-4 ">
          <div className="slider relative  mt-4 mb-4 h-[350px] overflow-hidden">
           
            <Carousel
              className="carrousel rounded-xl bg-gray-500"
              loop={true}
              transition={{ type: "tween", duration: .65 }}
              autoplay={true}
              autoplayDelay={10000}
              navigation={null}
            >
              {en_ventes?.length>0 && en_ventes?.map(({id,voiture},index)=>(
                <div key={index} className="relative h-full w-full">
                <img 
                src={HTTP_FRONTEND_HOME+''+voiture?.photo}
                alt={voiture?.nom}
                className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      {voiture?.nom}
                    </Typography>
                   
                      <div dangerouslySetInnerHTML={{__html:truncateString(voiture.description,150)??''}}></div>

                    <div className="flex justify-center gap-2">
                        <Button size="md"  color="white">
                      <Link className='flex items-center' href={route('front.achat',id)}>
                        En savoir plus <BiChevronRight className='h-5 w-5'/>
                      </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              ))}
           
            </Carousel>
            <div className="bg-gradient-to-t hidden from-slate-800 to-[rgba(0,0,0,.02)] bottom-0 rounded-lg w-full   left-0 h-36 absolute">
              
              </div>
          </div>
        </div>
        <LocationTopMarque marques={vente_marques}/>

        <LocationExpert/>

      </div>
    </FrontLayout>
  )
}
