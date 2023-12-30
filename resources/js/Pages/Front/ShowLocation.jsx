import FrontLayout from '@/Layouts/FrontLayout'
import ModaleImage from '@/components/ModaleImage';
import i18n from '@/i18n';
import { HTTP_FRONTEND_HOME } from '@/tools/constantes';
import { formaterMontant, setTarif } from '@/tools/utils';
import { Head } from '@inertiajs/react';
import {
    Breadcrumbs, Button, ButtonGroup, Card, CardBody, Carousel, Tooltip
} from '@material-tailwind/react';
import { t } from 'i18next';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsEvStation, BsTaxiFront } from 'react-icons/bs';
import { FaLightbulb, FaSmoking } from 'react-icons/fa';
import { GiSuspensionBridge } from 'react-icons/gi';
import { IoLogoCapacitor } from 'react-icons/io5';
import { LuUsers } from 'react-icons/lu';
import { MdOutlineCardTravel } from 'react-icons/md';
import { TbCircuitCapacitorPolarized } from 'react-icons/tb';
//import { Carousel } from 'react-responsive-carousel';
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
    const { tarif_location_heure, tarif_location_journalier, tarif_location_hebdomadaire, tarif_location_mensuel } = location;
    useEffect(() => {
        setData(location);
        setVoiture(location?.voiture)
    }, [])
    return (
        <FrontLayout>
            <Head title={voiture?.nom} />
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
                        <span>Locations</span>
                    </a>
                    <a href="#">{voiture?.nom}</a>
                </Breadcrumbs>
                <div className="grid grid-cols-12 gap-4 ">
                    <div className="col-span-12 hidden">
                        <h1 className='text-2xl font-extrabold'>{voiture?.nom}</h1>
                        <div className="text-xl font-normal text-slate-600 dark:text-white">{voiture?.marque?.nom}</div>

                    </div>
                    <div className="lg:col-span-8 col-span-12">

                        <div className="">
                            {(voiture?.location_medias && voiture?.location_medias?.length > 0) ?
                                <div className="relative">
                                    <div className="p  rounded-md absolute h-32 lg:h-44 bottom-0 bg-gradient-to-t from-gray-800 z-10  w-full">
                                    </div>

                                    <Carousel
                                        className="carrousel rounded-xl "
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
                                        {voiture?.location_medias?.map((media, index) => (
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
                                    ville={'Cotonou'}
                                    nb_personne={voiture?.nombre_place}
                                    type_boite={voiture?.type_transmission}
                                    vitesse={voiture?.nombre_vitesse}
                                    nb_grande_valise={voiture?.nombre_grande_valise}
                                    nb_petite_valise={voiture?.nombre_petite_valise}
                                    volume_coffre={voiture?.volume_coffre}
                                    marque={voiture?.marque?.nom}
                                    categorie={voiture?.nombre_petite_valise}
                                    nom={voiture?.nom}
                                    carburant={voiture?.type_carburant?.nom}
                                    photo={voiture?.photo}
                                    puissance={voiture?.puissance_moteur}
                                    emission_co2={voiture?.emission_co2}
                                    eclairage={voiture?.type_eclairage}
                                    suspenssion={voiture?.type_suspenssion}
                                    capacite={voiture?.capacite_reservoir}
                                    tarif={setTarif(tarif_location_heure, tarif_location_journalier, tarif_location_hebdomadaire, tarif_location_mensuel)}
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
                                <div className="py-6 ">
                                    <h2 className="text-xl font-bold">Conditions de location</h2>
                                    <p className="text-md py-4">
                                        <div className='html' dangerouslySetInnerHTML={{ __html: location?.conditions }}></div>

                                    </p>
                                </div>
                                {location?.description &&
                                    <div className="py-4 border-t">
                                        <h2 className="text-xl font-bold">Description</h2>
                                        <p className="text-md">
                                            <div className='html' dangerouslySetInnerHTML={{ __html: location?.description }}></div>
                                        </p>
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
                    <div className="col-span-4">

                        <Card className=' bg-zinc-200 rounded-md shadow-inner '>
                            <div className="p-6 border-b">
                                <h1 className='text-2xl font-extrabold'>{voiture?.nom}</h1>
                                <div className="text-xl font-normal text-slate-600 dark:text-white">{voiture?.marque?.nom}</div>

                            </div>
                            <CardBody className='p-0'>

                                <div className="flex bg-zinc-50 shadow-sm px-6 py-4  flex-wrap bg gap-4  ">
                                    <div className='font-bold'>
                                        {t('Marque')} :
                                    </div>
                                    <div>
                                        {voiture?.marque?.nom}
                                    </div>
                                </div>
                                {voiture?.annee_fabrication != null &&
                                    <div className="flex  px-6 py-4   flex-wrap gap-4  ">
                                        <div className='font-bold'>
                                            {t('Année')} :
                                        </div>
                                        <div>
                                            {voiture?.annee_fabrication}
                                        </div>
                                    </div>}
                                {voiture?.couleur != null &&
                                    <div className="flex bg-zinc-50 shadow-sm px-6 py-4   flex-wrap gap-4  ">
                                        <div className='font-bold'>
                                            {t('Couleur')} :
                                        </div>
                                        <div>
                                            {voiture?.couleur}
                                        </div>
                                    </div>
                                }
                                <div className="px-6 pt-4">
                                    <div className="grid grid-cols-2 gap-3">
                                        {location?.tarif_location_heure!=null && location.tarif_location_heure>0 &&
                                        <div className="tjour bg-zinc-900 text-white p-4 rounded-lg shadow-sm">
                                            <h1 className="text-l font-extrabold">{formaterMontant(location?.tarif_location_heure??'0',i18n.language)}</h1>
                                            <small>Heure</small>
                                        </div>
                                        }
                                        {location?.tarif_location_journalier!=null && location?.tarif_location_journalier>0 &&
                                        <div className="tjour bg-zinc-50  p-4 rounded-lg shadow-sm">
                                            <h1 className="text-l font-extrabold">{formaterMontant(location?.tarif_location_journalier??'0',i18n.language)}</h1>
                                            <small>Jour</small>
                                        </div>
                                        }
                                        {location?.tarif_location_hebdomadaire!=null && location?.tarif_location_hebdomadaire>0 &&
                                        <div className="tjour bg-zinc-50  p-4 rounded-lg shadow-sm">
                                            <h1 className="text-l font-extrabold">{formaterMontant(location?.tarif_location_hebdomadaire??'0',i18n.language)}</h1>
                                            <small>Semaine</small>
                                        </div>
                                        }
                                        {location?.tarif_location_mensuel!=null && location.tarif_location_mensuel>0 &&
                                        <div className="tjour bg-zinc-900 text-white   p-4 rounded-lg shadow-sm">
                                            <h1 className="text-l font-extrabold">{formaterMontant(location.tarif_location_mensuel??'0',i18n.language)}</h1>
                                            <small>Mois</small>
                                        </div>
                                        }
                                    </div>
                                </div>
                                <div className="px-6">

                                    <Button color='yellow'  className='w-full  x-6 my-4'>
                                        Réserver
                                    </Button>
                                    
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="border text-center rounded-md my-6">
                            <div className="p-4 rounded-t-md text-xl font-extrabold bg-zinc-200">Centre d'aide</div>
                            <div className="p-4">
                                Pour réserver ou obtenir plus d'informations, contactez-nous par téléphone ou par e-mail. Nous sommes là pour vous aider ! 🚗✨
                            </div>
                            <div className="p-4 text-2xl font-bold border-dotted border-b border-t">
                                (+229) 44 17 77 44
                            </div>
                            <div className="p-4 font-bold text-center text-lg">
                                support@rentalcarbenin.com
                                <Button color='black' className='w-full text-yellow-500 mt-4'>
                                    Consulter le FAQ
                                </Button>
                            </div>

                        </Card>
                    </div>
                </div>
                </div>
        </FrontLayout>
    )
}
function ShowInfo({ id = 0, nom, photo, tarif, dimenssions, eclairage, emission_co2, suspenssion, capacite, nb_personne, puissance, type_boite, carburant, nb_grande_valise, nb_petite_valise, vitesse, volume_coffre, marque, categorie }) {
    return (
        <div >
            <Card className='border'>
                <CardBody>

                    <h2 className="text-slate-600 font-bold">
                        {t('Caractéristiques')}
                    </h2>
                    <div className="grid grid-cols-2 items-center mt-4 mb-5">
                        {nb_personne > 0 &&
                            <Tooltip placement="top-start" className="flex" content={t("Nombre places")}>
                                <div className="flex mb-3">
                                    <LuUsers className='me-2 h-6 w-8 dark:text-white' />
                                    <div className='text-xl font-normal'>{nb_personne} personnes</div>
                                </div>
                            </Tooltip>
                        }
                        {carburant != null && carburant != '' &&
                            <Tooltip placement="top-start" content={t('Type de carburant')}>

                                <div className="flex mb-3">
                                    <div title={t('Type de carburant')}>
                                        <BsEvStation className='h-6 w-8 leading-10 me-2  dark:text-white' />
                                    </div>
                                    <div className='text-xl font-normal'>{carburant}</div>
                                </div>
                            </Tooltip>
                        }
                        {puissance != null && puissance != '' &&
                            <Tooltip placement="top-start" content={t('Puissance du moteur')}>
                                <div className="flex mb-3">
                                    <div title={t('Puissance du moteur')}>
                                        <IoLogoCapacitor className='h-6 w-8 leading-10 me-2  dark:text-white' />
                                    </div>
                                    <div className='text-xl font-normal'>{puissance}</div>
                                </div>
                            </Tooltip>
                        }

                        {type_boite != null &&
                            <Tooltip placement="top-start" content={t('Type de boite')}>
                                <div className="flex mb-3">
                                    <div title={t('Type de boite')}>
                                        <TbCircuitCapacitorPolarized className='h-6 w-8 leading-10 me-2  dark:text-white' />
                                    </div>
                                    <div className='text-xl font-normal'>{type_boite}</div>
                                </div>
                            </Tooltip>
                        }


                        {vitesse > 0 &&
                            <Tooltip placement="top-start" content={t('Nombre vitesses')}>

                                <div className="flex mb-3">
                                    <div title={t('Nombre vitesses')}>
                                        <img className='h-6 w-8 leading-10 me-2  dark:text-white' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO2U4QqAIAyE790yaPT+/6of2XsYA4tJsFQWVPjBYHDHjiEOaBQyAtgAeABkpCWwIcRajbSEWRgnIy3BCWNnpF04jJbaTwNCZb0n4Ptv8EiAE0buJb2iZQfIL8+9ZFG07IDag+ZutjuhOIgHDAWatrkJPvdc10LKdg2o7ExWkc4uK+5nAAAAAElFTkSuQmCC" />

                                    </div>
                                    <div className='text-xl  font-normal'>{vitesse} Vitesse{vitesse > 1 ? 's' : null}</div>
                                </div>
                            </Tooltip>
                        }

                        {volume_coffre != null &&
                            <Tooltip placement="top-start" content={t('Type de carburant')}>

                                <div title={t('Volume du coffre')} className="flex mb-3">
                                    <div>
                                        <BsTaxiFront className='h-6 w-8 leading-8 me-2 dark:text-white' />
                                    </div>
                                    <div className='text-xl  font-normal'>{volume_coffre}</div>
                                </div>
                            </Tooltip>
                        }
                        {nb_grande_valise > 0 &&
                            <Tooltip placement="top-start" content={t('Nombre de grandes valises')}>
                                <div className="flex mb-3">
                                    <div title={t('Nombre de grandes valises')}>
                                        <MdOutlineCardTravel className=' h-6 w-8 leading-10 me-2 dark:text-white' />
                                    </div>
                                    <div className='text-xl  font-normal'>{nb_grande_valise} Grande{nb_petite_valise > 1 ? 's' : null} valise{nb_grande_valise > 1 ? 's' : null}</div>
                                </div>
                            </Tooltip>
                        }
                        {nb_petite_valise > 0 &&
                            <Tooltip placement="top-start" content={t('Nombre de petites valises')}>

                                <div className="flex mb-3">
                                    <div title={t('Nombre de petites valises')}>
                                        <svg className='h-6 w-8 me-2 dark:text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                                        </svg>
                                    </div>
                                    <div className='text-xl font-normal'>{nb_petite_valise} petite{nb_petite_valise > 1 ? 's' : null} valise{nb_petite_valise > 1 ? 's' : null}</div>
                                </div>
                            </Tooltip>
                        }
                        {capacite != null &&

                            <Tooltip placement="top-start" content={t('Capacité du réservoir')}>
                                <div className="flex mb-3">
                                    <svg className='h-6 w-8 me-2 dark:text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                                    </svg>
                                    <div className='text-xl font-normal'>{capacite} </div>
                                </div>
                            </Tooltip>
                        }
                        {eclairage != null &&
                            <Tooltip placement="top-start" content={t("Type d'éclairage")}>
                                <div className="flex mb-3">
                                    <div className='flex' >
                                        <FaLightbulb className=' h-6 w-6 leading-10 me-2 dark:text-white' />
                                        <div className='text-xl font-normal'>{eclairage} </div>
                                    </div>
                                </div>
                            </Tooltip>
                        }
                        {emission_co2 != null &&
                            <Tooltip placement="top-start" content={t('Emission du co2')}>
                                <div className="flex mb-3">

                                    <div className='flex'>
                                        <FaSmoking className=' h-6 w-6 leading-10 me-2 dark:text-white' />
                                        <div className='text-xl font-normal'>{emission_co2} </div>
                                    </div>
                                </div>
                            </Tooltip>
                        }
                        {suspenssion != null &&
                            <Tooltip placement="top-start" content={t("Type de suspenssion")}>
                                <div className="flex mb-3">
                                    <div className='flex'>
                                        <GiSuspensionBridge className=' h-6 w-6 leading-10 me-2 dark:text-white' />

                                        <div className='text-xl font-normal'>{suspenssion} </div>
                                    </div>
                                </div>
                            </Tooltip>
                        }
                        {dimenssions != null &&
                            <Tooltip placement="top-start" content={t("Type de suspenssion")}>
                                <div className="flex mb-3">
                                    <div className='flex'>
                                        <FaSmoking className=' h-6 w-6 leading-10 me-2 dark:text-white' />
                                        <div className='text-xl font-normal'>{dimenssions} </div>
                                    </div>
                                </div>
                            </Tooltip>
                        }
                    </div>

                </CardBody>
            </Card>
        </div>
    )
}
