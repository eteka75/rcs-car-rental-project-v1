import DashboardLayout from '@/Layouts/DashboardLayout'
import DashHeadTitle from '@/components/dashboard/DashHeadTitle'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import { AiOutlineBarChart, AiOutlineDelete, AiOutlineEdit, AiOutlineExport, AiOutlinePlus } from 'react-icons/ai';

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
import TextInput from '@/components/TextInput';
import { DateToFront } from '@/tools/utils';
import i18n from '@/i18n';
import Breadcrumb from '@/components/Breadcrumb';


const TABLE_HEAD = ["Logo","Nom", "Année de fabrication","Date d'ajout", "Actions"];

export default function Index({ auth, marques, page_id,page_subid, page_title, page_subtitle }) {
    const Search = (e) => {
        e.preventDefault();
        alert('ok')

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
                    <div className="w-full md:w-2/5">
                        <form className="flex items-center" onSubmit={Search}>
                            <label htmlFor="simple-search" className="sr-only">Rechercher</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <TextInput type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Rechercher" required="" />
                            </div>
                        </form>
                    </div>
                    <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <Menu placement="bottom-end">
                            <MenuHandler>
                                <Button className='bg-white text-gray-900 flex gap-2 border shadow-none py-2 capitalize px-3 text-sm'>Action
                                    <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>

                                </Button>
                            </MenuHandler>
                            <MenuList className='items-center'>
                                <MenuItem className='py-2 hover:bg-gray-100 rounded-none'>
                                    <Link href='#' className='flex gap-2'>
                                        <AiOutlineExport/> Exporter
                                    </Link>
                                </MenuItem>
                                <MenuItem className='py-2 hover:bg-gray-100 rounded-none'>
                                <Link href='#' className='flex gap-2'>
                                        <AiOutlineBarChart className='h-5 leading-5'/> Statistiques
                                    </Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>

                    </div>
                </div>
                <CardBody className=" p-0">
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
                           {marques.data && marques.data.length ===0 &&
                            <td colSpan={TABLE_HEAD.length}>
                                        <Typography className='text-center text-gray-600 p-4'>
                                            Aucun enrégistrement disponible
                                        </Typography>
                            </td>
                           }
                           {console.log(marques)}
                            {marques.data && marques.data.length>0 && marques.data.map(
                                ({ id,nom,annee_fondation,logo, created_at }, index) => {
                                    const isLast = index === marques.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={nom}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                  {logo && <Avatar src={logo} alt={nom} className='w-10' size="sm" />}
                                                    
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
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
                                                    
                                                    {DateToFront(created_at,i18n.language)}
                                                    
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Tooltip content="Edit User">
                                                    <IconButton variant="text">
                                                        <AiOutlineEdit className='h-6 w-4 text-gray-500' />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip content="Edit User">
                                                    <IconButton variant="text">
                                                        <AiOutlineDelete className='h-6 w-4 text-gray-500' />
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
                    </table>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        Page 1 of 10
                    </Typography>
                    <div className="flex gap-2">
                        <Button variant="outlined" size="sm">
                            Previous
                        </Button>
                        <Button variant="outlined" size="sm">
                            Next
                        </Button>
                    </div>
                </CardFooter>


            </Card>

        </DashboardLayout>
    )
}
