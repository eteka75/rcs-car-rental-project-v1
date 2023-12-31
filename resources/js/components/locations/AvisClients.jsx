import { HTTP_FRONTEND_HOME } from "@/tools/constantes";
import { Carousel, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { useEffect } from "react";

export default function AvisClients({ avis }) {
  
  return (
    <>
      <div className="border-bborder-t">
        <div className="max-w-screen-lg mx-auto p-4">
          <div className="  relative grid grid-cols-1 overflow-hidden">
            {console.log(avis)}
            <Carousel
              loop={true}
              autoplay={true}
              autoplayDelay={10000}
              className="rounded-xl"
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="filled"
                  color="white"
                  size="lg"
                  type="text"
                  onClick={handlePrev}
                  className="!absolute hidden md:flex top-2/4 text-slate-500 border-slate-300 left-0 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="filled"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute hidden md:flex top-2/4 !right-0 -translate-y-2/4 border text-slate-500 border-slate-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}

              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 h-2  md:hidden bg-white" : "w-4  md:hidden h-2 bg-slate-400"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
             
            >
              {avis?.length > 0 && avis?.map(({ auteur, profession,nombre_etoile, message, photo, created_at }, index) => (
                <div key={index} className="w-full py-4 px-0 md:px-8 lg:px-20">

                  <div className="bg-white min-h-full shadow-sm border border-slate-100  rounded-lg px-10 py-8 shadow-lg_ hover:shadow-md transition duration-500">
                    <div className="mt-4">
                      <h1 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">{profession}</h1>
                      <ShowEtoiles nb={nombre_etoile}/>                   
                      </div>
                      <p className="mt-4 text-lg text-gray-600 ">{message}</p>
                      <div className="flex justify-between items-center">
                        <div className="mt-4 flex items-center space-x-4 py-6">
                          <div className="">
                            <img className="w-12 h-12 object-cover rounded-full" src={HTTP_FRONTEND_HOME + '' + photo} alt="" />
                          </div>
                          <div className="text-sm font-semibold">{auteur} </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}

            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}
function ShowEtoiles({nb}){
  const [etoiles,setEtoiles]=useState('')
  useEffect(()=>{
    let cmpt=0;
    let et=[];
    while(nb>cmpt){
      cmpt++;
      et.push(cmpt) 
    }
    setEtoiles(et);
  },[])
  return (
    <div className="flex">
      {etoiles && etoiles?.map((v,index)=>(
        <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      ))}
    </div>
  )
}
