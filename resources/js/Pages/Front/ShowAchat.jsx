import FrontLayout from '@/Layouts/FrontLayout'
import ModaleImage from '@/components/ModaleImage';
import FrontBreadcrumbs from '@/components/front/FrontBreadcrumbs'
import PageTitle from '@/components/front/PageTitle'
import { ShowInfo } from '@/components/locations/LocaVoitureCard';
import i18n from '@/i18n';
import { HTTP_FRONTEND_HOME } from '@/tools/constantes';
import { formaterMontant, setTarif } from '@/tools/utils';
import { Link } from '@inertiajs/react';
import { Button, Card, CardBody, Carousel } from '@material-tailwind/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
export default function ShowAchat({vente}) {
    const [voiture,setVoiture]=useState(null);
    useEffect(()=>{
        const {voiture}=vente;
        setVoiture(voiture)
    },[])
    const {t}= useTranslation()
  return (
    <FrontLayout>
       <PageTitle title={vente?.voiture?.nom}>
        <FrontBreadcrumbs pages={[{ 'url': route("front.achats"), 'page': ("Ventes") },{ 'url': "", 'page': (vente?.voiture?.nom) }]} />

        </PageTitle>
        <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="grid grid-cols-12 gap-4 ">
                    <div className="col-span-12 hidden">
                        <h1 className='text-2xl font-extrabold'>{voiture?.nom}</h1>
                        <div className="text-xl font-normal text-slate-600 dark:text-white">{voiture?.marque?.nom}</div>

                    </div>
                    <div className="lg:col-span-8 col-span-12">

                        <div className="">
                            {(voiture?.medias && voiture?.medias?.length > 0) ?
                                <div className="relative">
                                    <div className="p  rounded-lg absolute h-32 lg:h-44 bottom-0 bg-gradient-to-t from-gray-800 z-10  w-full">
                                    </div>

                                    <Carousel
                                        className="carrousel rounded-xl "
                                        loop={true}
                                        transition= {{ type : "tween", duration: .65 }}
                                        //autoplay={true}
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
                                        <ModaleImage url={HTTP_FRONTEND_HOME + "" + voiture?.photo} title={voiture?.nom} >

                                            {voiture?.photo && <img src={HTTP_FRONTEND_HOME + "" + voiture?.photo} className='h-[550px] w-full max-w-full rounded-none border object-cover shadow-sm object-center' alt={voiture?.nom} />}
                                        </ModaleImage>
                                        {voiture?.medias?.map((media, index) => (
                                            <ModaleImage url={HTTP_FRONTEND_HOME + "" + media?.url} title={voiture?.nom} key={index}>
                                                <img src={HTTP_FRONTEND_HOME + "" + media?.url} className='h-[550px] w-full max-w-full rounded-none border object-cover shadow-sm object-center' alt={media?.nom} />
                                            </ModaleImage>
                                        ))}
                                    </Carousel>

                                </div>
                                :
                                <ModaleImage url={HTTP_FRONTEND_HOME + "" + voiture?.photo} title={voiture?.nom} >
                                    {voiture?.photo && <img src={HTTP_FRONTEND_HOME + "" + voiture?.photo} className='h-[550px] w-full max-w-full rounded-xl  border object-cover shadow-md object-center' alt={voiture?.nom} />}
                                </ModaleImage>
                            }
                            <div className='py-4'>

                                <ShowInfo
                                    nb_personne={voiture?.nombre_place}
                                    type_boite={voiture?.type_transmission}
                                    vitesse={voiture?.nombre_vitesse}
                                    nb_grande_valise={voiture?.nombre_grande_valise}
                                    nb_petite_valise={voiture?.nombre_petite_valise}
                                    volume_coffre={voiture?.volume_coffre}
                                    marque={voiture?.marque?.nom}
                                    dimenssions={voiture?.dimenssions}
                                    categorie={voiture?.categorie?.nom}
                                    np_portes={voiture?.nombre_portes}
                                    nom={voiture?.nom}
                                    consommation={voiture?.consommation}
                                    carburant={voiture?.type_carburant?.nom}
                                    photo={voiture?.photo}
                                    puissance={voiture?.puissance_moteur}
                                    emission_co2={voiture?.emission_co2}
                                    eclairage={voiture?.type_eclairage}
                                    suspenssion={voiture?.type_suspenssion}
                                    capacite={voiture?.capacite_reservoir}
                                    tarif={formaterMontant(vente?.prix_vente,i18n.language)}
                                />
                                {voiture?.systeme_securites?.length > 0 &&
                                    <div className=" py-8 pb-4 border-b  ">
                                        <h2 className="text-xl font-bold">Systèmes de sécurité à bord</h2>
                                        <p className="text-md py-4">
                                            <ul>
                                                {voiture?.systeme_securites?.map((system, index) => (
                                                    <li className='flex text-md pb-2'>
                                                        <AiOutlineCheck className='me-2' />
                                                        {system?.nom}
                                                    </li>
                                                ))}
                                            </ul>
                                        </p>
                                    </div>
                                }
                                {voiture?.technologies_a_bord != null &&
                                    <div className='py-6 border-b'>
                                        <h2 className="text-xl font-bold">Autres technologies </h2>
                                        {voiture?.technologies_a_bord}
                                    </div>
                                }
                                
                                {vente?.description &&
                                    <div className="py-8">
                                        <h2 className="text-xl font-bold">Description</h2>
                                        <p className="text-md">
                                            <div className='html' dangerouslySetInnerHTML={{ __html: vente?.description }}></div>
                                        </p>
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
                    <div className="col-span-4 pb-12">
                    <Card className="shadow-none border mb-6 rounded-lg">
                            <CardBody className="pb-2">
                            <div className="mb-4 border-b_">
                                <h1 className='text-2xl font-extrabold'>{voiture?.nom}</h1>
                                <div className="text-xl font-normal text-slate-600 dark:text-white">{voiture?.categorie?.nom}</div>

                            </div>
                            <div className="flex bg-zinc-50_shadow-sm justify-between py-4 border-b border-slate-100 flex-wrap bg gap-4  ">
                                    <div className=' w-1/4 font-bold'>
                                        {t('Marque')} 
                                    </div>
                                    <div >
                                      {voiture?.marque?.nom}
                                    </div>
                                </div>
                                {voiture?.annee_fabrication != "null" &&
                                    <div className="flex   py-4 border-b justify-between border-slate-100 flex-wrap gap-4  ">
                                        <div className='w-1/4 font-bold'>
                                            {t('Année')}
                                        </div>
                                        <div>
                                         {voiture?.annee_fabrication}
                                        </div>
                                    </div>}
                                {voiture?.kilometrage != "null" &&
                                    <div className="flex   py-4 border-b justify-between border-slate-100 flex-wrap gap-4  ">
                                        <div className='w-1/4 font-bold'>
                                            {t('Kilométrage')}
                                        </div>
                                        <div>
                                         {vente?.kilometrage}
                                        </div>
                                    </div>}
                                {voiture?.couleur != null &&
                                    <div className="flex justify-between py-4 border-b   flex-wrap gap-4  ">
                                        <div className='w-1/4 font-bold'>
                                            {t('Couleur')}
                                        </div>
                                        <div>
                                         {voiture?.couleur}
                                        </div>
                                    </div>
                                }
                                
                                {voiture?.couleur != null &&
                                    <div className="flex justify-between py-4 border-b   flex-wrap gap-4  ">
                                        <div className='w-1/4 font-bold'>
                                            {t('Prix')}
                                        </div>
                                        <div>
                                         {formaterMontant(vente?.prix_vente,i18n.language)}
                                        </div>
                                    </div>
                                }
                                
                                
                                <div className="">
                                    <Button color='black' v  className='w-full  x-6 my-4'>
                                        Commander
                                    </Button>                                    
                                </div>
                            </CardBody>
                        </Card>

                        <Card className=" bg-[#F2FFF7] border-[#39935d] border  shadow-none rounded-lg ">
                            <div className="p-4 rounded-t-md text-xl font-extrabol font-bold">Centre d'aide</div>
                            <div className="px-4 pb-4">
                                Pour réserver ou obtenir plus d'informations, contactez-nous par téléphone ou par e-mail. Nous sommes là pour vous aider ! 🚗✨
                            </div>
                            <div className="p-4 py-1 text-xl font-bold border-dashedt">
                                (+229) 44 17 77 44
                            </div>
                            <div className="p-4 font-bold text-blue-500 text-lg">
                                support@rentalcarbenin.com
                                <Link href={route('front.faqs')}><Button variant='text' color='white' className='w-full hover:bg-black bg-[#39935d] text-white mt-4 mt-4'>
                                    Consulter le FAQ
                                </Button>
                                </Link>
                            </div>

                        </Card>
                    </div>
                </div>
                
        </div>
  </FrontLayout>
  )
}
