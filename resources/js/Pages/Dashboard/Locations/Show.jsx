import DashboardLayout from '@/Layouts/DashboardLayout'
import Breadcrumb from '@/components/Breadcrumb'
import DashHeadTitle from '@/components/dashboard/DashHeadTitle'
import { Head, Link } from '@inertiajs/react'
import { Card, CardBody, Typography } from '@material-tailwind/react'
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Translate from '@/components/Translate'
import { HTTP_FRONTEND_HOME } from '@/tools/constantes'
import { DateToFront } from '@/tools/utils'
import i18n from '@/i18n'
import ModaleImage from '@/components/ModaleImage'

export default function Show({ auth, location, page_id = '', page_subid = '', page_title = '', page_subtitle = '' }) {
    return (
        <DashboardLayout auth={auth} page_id={page_id} page_subid={page_subid}>
            <Breadcrumb>
                <Link href={route('dashboard.locations')} className="opacity-60">
                    <span>Locations</span>
                </Link>
                <Link href='#'>
                    <span>Affichage</span>
                </Link>
            </Breadcrumb>

            <Head title={page_title} />
            <DashHeadTitle title={page_title} subtitle={page_subtitle} >
                <Link className='px-4 font-bold flex items-center py-2 bg-white shadow-sm  rounded-md'
                    href={route('dashboard.locations')}>
                    <AiOutlineArrowLeft className='me-1' />    <Translate>Retour</Translate>
                </Link>
            </DashHeadTitle>
            <div className="grid grid-cols-3 gap-4 items-start  justify-between ">
            {location.voiture && location.voiture.photo!='' &&  location.voiture.photo!=null &&
                    <Card className='col-span-3   lg:col-span-1'>
                        <CardBody className="w-full md:m-auto">
                          <Typography variant='h5' className='mb-3'> {location.voiture.nom??''}</Typography>
                          <ModaleImage title={location.voiture.nom} url={HTTP_FRONTEND_HOME + '' + location.voiture.photo}>

                            {
                               <img
                                    className="max-h-auto mx-auto max-w-full  rounded-lg object-cover object-center"
                                    src={HTTP_FRONTEND_HOME + '' + location.voiture.photo}
                                    alt={location.voiture.nom}
                                />
                            }
                            </ModaleImage>
                        </CardBody>
                    </Card>
                }
                <Card className='col-span-3 lg:col-span-2'>
                    <div className="App w-full md:m-auto overflow-auto">
                        <table className='w-full min-w-max table-auto text-left h-full ' align='top'>
                            <tbody>
                                {location.voiture!=null && location.voiture.nom!='' &&
                                <tr className='p-4 border-b'>
                                    <th
                                        className=" border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="lead"
                                            color="blue-gray"
                                            className="font-bold leading-none opacity-70"
                                        >
                                            <Translate>voiture</Translate>

                                        </Typography>
                                    </th>
                                    <td>{location.voiture.nom}</td>
                                </tr>
                                }
                                <tr className='p-4 border-b'>
                                    <th
                                        className=" border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="lead"
                                            color="blue-gray"
                                            className="font-bold leading-none opacity-70"
                                        >
                                            <Translate>Date début </Translate>

                                        </Typography>
                                    </th>
                                    <td>{DateToFront(location.date_debut_location,i18n.language,'d/m/Y')}</td>
                                </tr>
                                <tr className='p-4 border-b'>
                                    <th
                                        className=" border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="lead"
                                            color="blue-gray"
                                            className="font-bold leading-none opacity-70"
                                        >
                                            <Translate>Date fin </Translate>

                                        </Typography>
                                    </th>
                                    <td>{DateToFront(location.date_fin_location,i18n.language,'d/m/Y')}</td>
                                </tr>
                                <tr className='p-4 border-b'>
                                    <th
                                        className=" border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="lead"
                                            color="blue-gray"
                                            className="font-bold leading-none opacity-70"
                                        >
                                            <Translate>Poins de retrait </Translate>

                                        </Typography>
                                    </th>
                                    <td>
                                    {location.points_retrait && location.points_retrait.length >0 && location.points_retrait.map(({lieu},index)=>(
                                       
                                       <>
                                       <span key={index} className='my-2 mx-1 block float-left 
                                       bg-gray-200 rounded-sm py-1 px-2 text-xs'>                                                
                                            *<Translate>{lieu??''}</Translate>
                                        </span>
                                        </>
                                    ))}
                                    </td>
                                </tr>
                                <tr className='p-4 border-b'>
                                    <th
                                        className=" border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="lead"
                                            color="blue-gray"
                                            className="font-bold leading-none opacity-70"
                                        >
                                            <Translate>Conditions </Translate>
                                        </Typography>
                                    </th>
                                    <td>{location.conditions??''}</td>
                                </tr>
                                 {location.tarif_location_heure!=null && location.tarif_location_heure!='' &&
                                <tr className='p-4 border-b'>
                                    <th
                                        className=" border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="lead"
                                            color="blue-gray"
                                            className="font-bold leading-none opacity-70"
                                        >
                                            <Translate>Tarif par heure</Translate>

                                        </Typography>
                                    </th>
                                    <td>{location.tarif_location_heure}</td>
                                </tr>
                                }
                                 {location.tarif_location_journalier!=null && location.tarif_location_journalier!='' &&
                                <tr className='p-4 border-b'>
                                    <th
                                        className=" border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="lead"
                                            color="blue-gray"
                                            className="font-bold leading-none opacity-70"
                                        >
                                            <Translate>Tarif par jour</Translate>

                                        </Typography>
                                    </th>
                                    <td>{location.tarif_location_journalier}</td>
                                </tr>
                                }
                                 {location.tarif_location_hebdomadaire!=null && location.tarif_location_hebdomadaire!='' &&
                                <tr className='p-4 border-b'>
                                    <th
                                        className=" border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="lead"
                                            color="blue-gray"
                                            className="font-bold leading-none opacity-70"
                                        >
                                            <Translate>Tarif par semaine</Translate>

                                        </Typography>
                                    </th>
                                    <td>{location.tarif_location_hebdomadaire}</td>
                                </tr>
                                }
                                 {location.tarif_location_mensuel!=null && location.tarif_location_mensuel!='' &&
                                <tr className='p-4 border-b'>
                                    <th
                                        className=" border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="lead"
                                            color="blue-gray"
                                            className="font-bold leading-none opacity-70"
                                        >
                                            <Translate>Tarif par mois</Translate>

                                        </Typography>
                                    </th>
                                    <td>{location.tarif_location_mensuel}</td>
                                </tr>
                                }
                                
                               
                                <tr className='border-b blue-gray-100 bg-blue-gray-50/50 p-4'>
                                    <th
                                        className="p-4 "
                                    >
                                        <Typography
                                            variant="lead"
                                            color="blue-gray"
                                            className="font-bold leading-none opacity-70"
                                        >
                                            <Translate>Description</Translate>
                                        </Typography>
                                    </th>
                                    <td>
                                        <div variant='small' className='text-sm break-words bg-white overflow-auto max-w-xs xl:max-w-lg lg:max-w-md md:max-w-sm py-4'>
                                            {location.description??''}
                                        </div>
                                    </td>
                                </tr>

                                <tr className='p-4 border-b'>
                                    <th
                                        className=" border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="lead"
                                            color="blue-gray"
                                            className="font-bold leading-none opacity-70"
                                        >
                                            <Translate>Date d'ajout</Translate>
                                        </Typography>
                                    </th>
                                    <td> {DateToFront(location.created_at, i18n.language)}</td>
                                </tr>
                                {location.created_at!=location.updated_at && 
                                <tr className='p-4 border-b'>
                                    <th
                                        className=" border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="lead"
                                            color="blue-gray"
                                            className="font-bold leading-none opacity-70"
                                        >
                                            <Translate>Dernière modification</Translate>
                                        </Typography>
                                    </th>
                                    <td> {DateToFront(location.updated_at, i18n.language)}</td>
                                </tr>
                            }
                                
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    )
}
