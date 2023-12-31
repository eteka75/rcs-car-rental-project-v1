import React from 'react';

import v1 from "../../assets/images/vehicules/v1.jpg";
import v2 from "../../assets/images/vehicules/v2.jpg";
import v3 from "../../assets/images/vehicules/v3.jpg";
import v4 from "../../assets/images/vehicules/v4.jpg";
import v5 from "../../assets/images/vehicules/v5.jpg";
import v6 from "../../assets/images/vehicules/v6.jpg";
import '@/css/front.css';
import { MdOutlineCardTravel } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HTTP_FRONTEND_HOME } from '@/tools/constantes';
import { TbCircuitCapacitorPolarized } from 'react-icons/tb';
import { BsEvStation, BsFillEvStationFill, BsTaxiFront } from 'react-icons/bs';
import { formaterMontant, setTarif } from '@/tools/utils';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { t } from 'i18next';
import { IoLogoCapacitor } from 'react-icons/io5';
import { Link } from '@inertiajs/react';
import { LocaVoitureCard } from './LocaVoitureCard';



export default function LocationTop({ locations }) {
    const {t}=useTranslation()
  
    return (
        <>
            {console.log(locations)}
            <div className="max-w-screen-xl mx-auto p-4">
                <h2 className="font-bold text-2xl  mt-8 flex">
                    En location
                </h2>
                <p className="text-slate-600">Louez à petit prix et voyagez en grand</p>
                <div id='car' className="car-vehicules overflow-auto mt-6 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                    {locations?.map(({voiture,id,tarif_location_heure,
                    tarif_location_journalier,tarif_location_hebdomadaire,
                    tarif_location_mensuel
                }, index) =>
                        <LocaVoitureCard                         
                        ville ={'Cotonou'}
                        id={id}
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
                        key={index}/>
                        )}
                </div>



                <div className='  my-6'>
                    <Link href={route('front.locations')} className=' items-center px-0 mx-auto flex bg-white hover:opacity-70   text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold   text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                        Consulter le catalogue
                        <FaAngleRight className="ms-1" />
                    </Link>
                </div>
                
            </div>
        </>
    )
}

