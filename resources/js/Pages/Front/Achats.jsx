import FrontLayout from '@/Layouts/FrontLayout'
import FrontBreadcrumbs from '@/components/front/FrontBreadcrumbs'
import PageTitle from '@/components/front/PageTitle'
import { Carousel } from '@material-tailwind/react'
import React from 'react'
export default function Achats() {
  return (
    <FrontLayout>
      <div className="bg-slate-50_ shadow-inner mt-[1px]">
        <PageTitle title={"Achats"} >
          <FrontBreadcrumbs pages={[{ 'url': "", 'page': ('Achats') }]} />
        </PageTitle>
        <div className="max-w-screen-xl mx-auto px-4 ">
          <div className="slider relative  mt-4 mb-4 h-[400px] overflow-hidden">
            <div className="bg-gradient-to-t from-slate-800 to-[rgba(0,0,0,.02)] bottom-0 rounded-lg w-full z-10  left-0 h-52 absolute">
              
            </div>
            <Carousel
              className="carrousel rounded-xl "
              loop={true}
              transition={{ type: "tween", duration: .65 }}
              autoplay={true}
              autoplayDelay={10000}
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
                />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
          <div className="grid grid-cols-12 gap-4 py-4">
            <div className="col-span-3">
            <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-fullw-full h-auto w-full object-cover"
              />
            </div>
            <div className="col-span-9">
                    <h1 className="text-xl">Voitures neuves ou d'occassion</h1> 
                    <h3 className="text-md text-slate-500">Sélectionnez la marque qui correspond à vos recherches</h3>
            </div>
          </div>
        </div>
      </div>
    </FrontLayout>
  )
}
