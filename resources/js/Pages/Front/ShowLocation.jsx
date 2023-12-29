import FrontLayout from '@/Layouts/FrontLayout'
import { HTTP_FRONTEND_HOME } from '@/tools/constantes';
import { setTarif } from '@/tools/utils';
//import { Breadcrumbs, Carousel } from '@material-tailwind/react';
import { t } from 'i18next';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BsEvStation, BsTaxiFront } from 'react-icons/bs';
import { IoLogoCapacitor } from 'react-icons/io5';
import { LuUsers } from 'react-icons/lu';
import { MdOutlineCardTravel } from 'react-icons/md';
import { TbCircuitCapacitorPolarized } from 'react-icons/tb';
import { Carousel } from 'react-responsive-carousel';
export default function ShowLocation({ location }) {

    const data = [
        {
            imgelink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
    ];

    const [active, setActive] = React.useState(
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    );

    const [datas, setData] = useState('');
    const [voiture, setVoiture] = useState();
    const {tarif_location_heure,tarif_location_journalier,tarif_location_hebdomadaire,tarif_location_mensuel}=location;
    useEffect(() => {
        setData(location);
        setVoiture(location?.voiture)
    }, [])
    return (
        <FrontLayout>
            {console.log("LOOOOOOO", location)}
            <div className="max-w-screen-xl mx-auto px-4 ">
                <Breadcrumbs className='px-0'>
                    <a href="#" className="opacity-60">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </a>
                    <a href="#" className="opacity-60">
                        <span>Components</span>
                    </a>
                    <a href="#">Breadcrumbs</a>
                </Breadcrumbs>
                <div className="grid grid-cols-12 gap-4 ">
                    <div className="col-span-8">
                        <div className=" min-h-[500px] py-2 rounded-sm">
                            <h1 className='text-2xl font-extrabold'>{voiture?.nom}</h1>
                    <div className="text-sm___ mb-2 font-normal text-slate-600 dark:text-white">{voiture?.marque?.nom}</div>

                            <div className="inner-voiture py-3">
                                <Carousel
                                    className="rounded-xl"
                                    navigation={({ setActiveIndex, activeIndex, length }) => (
                                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                            {new Array(length).fill("").map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
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
                        </div>
                    </div>
                    <div className="col-span-4">
                    <ShowInfo                         
                        ville ={'Cotonou'}
                        nb_personne={voiture?.nombre_place}
                        type_boite ={voiture?.type_transmission} 
                        vitesse={voiture?.nombre_vitesse}
                        nb_grande_valise={voiture?.nombre_grande_valise}
                        nb_petite_valise={voiture?.nombre_petite_valise}
                        volume_coffre={voiture?.volume_coffre}
                        marque={voiture?.marque?.nom}
                        categorie ={voiture?.nombre_petite_valise}
                        nom={voiture?.nom} 
                        carburant={voiture?.type_carburant?.nom} 
                        photo={voiture?.photo} 
                        puissance={voiture?.puissance_moteur} 
                        tarif={setTarif(tarif_location_heure,tarif_location_journalier,tarif_location_hebdomadaire,tarif_location_mensuel)} 
                        />
                    </div>
                </div>
            </div>
        </FrontLayout>
    )
}
function ShowInfo({ id=0, nom, photo, tarif, nb_personne,puissance, type_boite, carburant, nb_grande_valise, nb_petite_valise, vitesse, volume_coffre, marque, categorie }) 
{
    return (
        <div >
            
            <div className="px-4 mt-24 border p-4 rounded-md">
               
                <div className="grid grid-cols-2 items-center mt-2.5 mb-5">
                    {nb_personne > 0 &&
                        <div title={t('Nombre places')} className="flex mb-2">
                            <LuUsers className='me-1 dark:text-white' />
                            <div className='text-sm___ font-normal'>{nb_personne} personnes</div>
                        </div>
                    }
                    {carburant != null && carburant != '' &&
                        <div className="flex mb-2">
                            <div title={t('Type de carburant')}>
                                <BsEvStation className='h-5 leading-5 me-1  dark:text-white' />
                            </div>
                            <div className='text-sm___ font-normal'>{carburant}</div>
                        </div>
                    }
                    {puissance != null && puissance != '' &&
                        <div className="flex mb-2">
                            <div title={t('Puissance du moteur')}>
                                <IoLogoCapacitor className='h-5 leading-5 me-1  dark:text-white' />
                            </div>
                            <div className='text-sm___ font-normal'>{puissance}</div>
                        </div>
                    }

                    {type_boite != null &&
                        <div className="flex mb-2">
                            <div title={t('Type de boite')}>
                                <TbCircuitCapacitorPolarized className='h-5 leading-5 me-1  dark:text-white' />
                            </div>
                            <div className='text-sm___ font-normal'>{type_boite}</div>
                        </div>
                    }


                    {vitesse > 0 &&
                        <div className="flex mb-2">
                            <div title={t('Nombre vitesses')}>
                                <img className='h-5 leading-5 me-1  dark:text-white' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO2U4QqAIAyE790yaPT+/6of2XsYA4tJsFQWVPjBYHDHjiEOaBQyAtgAeABkpCWwIcRajbSEWRgnIy3BCWNnpF04jJbaTwNCZb0n4Ptv8EiAE0buJb2iZQfIL8+9ZFG07IDag+ZutjuhOIgHDAWatrkJPvdc10LKdg2o7ExWkc4uK+5nAAAAAElFTkSuQmCC" />

                            </div>
                            <div className='text-sm___  font-normal'>{vitesse} Vitesse{vitesse > 1 ? 's' : null}</div>
                        </div>
                    }

                    {volume_coffre != null &&
                        <div title={t('Volume du coffre')} className="flex mb-2">
                            <div>
                                <BsTaxiFront className='me-1 dark:text-white' />
                            </div>
                            <div className='text-sm___  font-normal'>{volume_coffre}</div>
                        </div>
                    }
                    {nb_grande_valise > 0 &&
                        <div className="flex mb-2">
                            <div title={t('Nombre de grandes valises')}>
                                <MdOutlineCardTravel className=' h-5 leading-5 me-1 dark:text-white' />
                            </div>
                            <div className='text-sm___  font-normal'>{nb_grande_valise} Grande{nb_petite_valise > 1 ? 's' : null} valise{nb_grande_valise > 1 ? 's' : null}</div>
                        </div>
                    }
                    {nb_petite_valise > 0 &&

                        <div className="flex mb-2">
                            <div title={t('Nombre de petites valises')}>
                                <svg className='h-4 w-4 me-1 dark:text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                                </svg>
                            </div>
                            <div className='text-sm___ font-normal'>{nb_petite_valise} petite{nb_petite_valise > 1 ? 's' : null} valise{nb_petite_valise > 1 ? 's' : null}</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
