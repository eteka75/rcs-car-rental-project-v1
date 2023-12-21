import DashboardLayout from '@/Layouts/DashboardLayout'
import DashHeadTitle from '@/components/dashboard/DashHeadTitle'
import { Head, Link, useForm } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineBarChart, AiOutlineDelete, AiOutlineEdit, AiOutlineExport, AiOutlinePlus } from 'react-icons/ai';

import {
    Card,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { CiCircleList } from "react-icons/ci";
import TextInput from '@/components/TextInput';
import { DateToFront } from '@/tools/utils';
import i18n from '@/i18n';
import Breadcrumb from '@/components/Breadcrumb';
import { HTTP_FRONTEND_HOME } from '@/tools/constantes';
import Pagination from '@/components/Pagination';
import { FaRegEdit } from 'react-icons/fa';
import InputError from '@/components/InputError';
import { Inertia } from '@inertiajs/inertia';

const TABLE_HEAD = ["Logo", "Nom", "Année de fabrication", "Date d'ajout", "Actions"];
export default function Index({ auth, marques, page_id, page_subid, page_title, page_subtitle, search_text='' }) {

    const { data, get, errors,processing, setData } = useForm({
        search: '',
    });

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        if (marques.data && marques.data.length > 0) {
            setDatas(marques.data);
        }
        if(search_text!==''){
            setData('search',search_text);
        }
        console.log(search_text);
    }, []);

   const handleSearch =(e)=>{
        setData('search', e.target.value);
   }
    const Search = (e) => {
        e.preventDefault();
        if(data.search!==''){
        get(route('dashboard.marques.search'),
            {
                onSuccess: (response) => {
                    setDatas(response.data);
                },
                onError: (error) => {
                    console.log(error);
                },
            });
        }

    }


    return (
        <DashboardLayout auth={auth} page_id={page_id} page_subid={page_subid}>
            <Head title={page_title} />
            <Breadcrumb>
                <Link href='#'>
                    <span>Marques</span>
                </Link>
            </Breadcrumb>
            <DashHeadTitle title={page_title} subtitle={page_subtitle} >
                <Link className='inline-flex whitespace-nowrap items-center text-sm sm:text-md px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 rounded-md md:ml-6 md:mb-3'
                    href={route('dashboard.marques.create')}>
                    <AiOutlinePlus className='me-1' />    Nouveau
                </Link>
            </DashHeadTitle>
            <Card className="h-full w-full">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 ">
                    <div className="w-full lg:w-2/5">
                    <form className="items-center w-full" onSubmit={Search}>   
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" disabled={processing} value={data.search??''} onChange={handleSearch} id="search" className="disabled:bg-zinc-200 block w-full px-3 py-[13px] ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-zinc-500 focus:border-zinc-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Rechercher..." required/>
                            <button type="submit" disabled={processing} className="disabled:bg-gray-500 text-white absolute end-1.5 bottom-1.5 bg-gray-700 hover:bg-zinc-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rechercher</button>
                        </div>
                        <InputError message={errors.search} className="mt-2" />
                    </form>
                    </div>
                    <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        
                    <Menu placement="bottom-end">

<MenuList className='items-center'>
    <MenuItem className='py-2 bg-red-300 hover:bg-gray-100 rounded-none'>
        <Link href='#' className='flex gap-2'>
            <AiOutlineExport /> Exporter
        </Link>
    </MenuItem>
    <MenuItem className='py-2 hover:bg-gray-100 rounded-none'>
        <Link href='#' className='flex gap-2'>
            <AiOutlineBarChart className='h-5 leading-5' /> Statistiques
        </Link>
    </MenuItem>
</MenuList>
</Menu>
                    </div>
                </div>
                <CardBody className=" p-0 overflow-auto">
                    <table className=" w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            
                                
                            
                            {datas.length > 0 && datas.map(
                                ({ id, nom, annee_fondation, logo, created_at }, index) => {
                                    const isLast = index === datas.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={id}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    {logo && <Avatar src={HTTP_FRONTEND_HOME + '' + logo} alt={nom} className='w-10' size="sm" />}

                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-bold"
                                                    >
                                                        {nom}
                                                    </Typography>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {annee_fondation}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >

                                                    {DateToFront(created_at, i18n.language)}

                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <div className="md:flex grid-cols-1 grid md:grid-cols-2 gap-1">
                                                    <IconButton title='Modifier' variant="text" className=' text-blue-500'>
                                                        <Link className='flex gap-1 items-center' href={route('dashboard.marques.edit', id)}>
                                                            <FaRegEdit className='h-6 w-4 text-blue-500' />
                                                            <span className="md:hidden">Modifier</span>
                                                        </Link>
                                                    </IconButton>
                                                <IconButton variant='text' className='text-red-600' title="supprimer cet enrégistrement">
                                                    
                                                    <Link 
                                                     method="delete"
                                                     className=' text-red-600 flex gap-1 items-center'
                                                     href={route('dashboard.marques.delete', id)}
                                                     as="button"
                                                     onClick={(e) => {
                                                       e.preventDefault();
                                                       if (window.confirm('Êtes vous sûr de pouvoir supprimer cet enrégistrement ?')) {
                                                         // Send the delete request
                                                         Inertia.delete(route('dashboard.marques.delete', id));
                                                       }
                                                     }}
                                                    variant="text">
                                                        
                                                        <AiOutlineDelete className='h-6 w-4' />
                                                        <span className="md:hidden">Supprimer</span>

                                                    </Link>
                                                </IconButton>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                            {(datas.length===0 || (data.search!=null && search_text!=null)) && 
                            <tr><td className="p-4 border-t border-blue-gray-50" colSpan={TABLE_HEAD.length}>
                                    <div className='text-center text-gray-600 '>
                                    {datas.length === 0 &&
                                            <>
                                                <CiCircleList className="text-5xl w-24 mx-auto  text-slate-400" />
                                                <div className="text-sm mb-4 mt-2">Aucun enrégistrement !</div>
                                            </>
                                     }
                                        {(data.search!=null && search_text!=null) && <Link  href={route('dashboard.marques')}> 
                                        <Button className='clear-both max-auto px-6  py-2 bg-slate-500 font-bold flex items-center mx-auto text-white shadow-sm  rounded-md'><AiOutlineArrowLeft className='me-1' />    Retour </Button>
                                        </Link>}
                                        
                                    </div>
                                </td>
                                </tr>
                                }
                        </tbody>
                    </table>
                </CardBody>
                <CardFooter className="flex items-center justify-end border-t  border-blue-gray-50 px-4">
                    <Pagination links={marques.links} />
                </CardFooter>
            </Card>

        </DashboardLayout>
    )
}
