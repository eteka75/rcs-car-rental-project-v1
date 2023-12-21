import { CardFooter, Typography } from '@material-tailwind/react';
import React, { Children } from 'react'
import Pagination from '../Pagination';
import Translate from '../Translate';

export default function ViewTable({ head = null, links = '', children }) {
    return (
        <>
            {links && Array.isArray(links) && links.length > 3 &&
                <CardFooter className="hidden lg:flex  items-center justify-end border-t py-2 mt-1  border-blue-gray-50 px-4">
                    <Pagination links={links} />
                </CardFooter>
            }
            {console.log(links)}
            <table className=" w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {head && head.map((head) => (
                            <th
                                key={head}
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    <Translate> {head}</Translate>
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
            {links && Array.isArray(links) && links.length > 3 &&

            <CardFooter className="flex items-center justify-end border-t  border-blue-gray-50 px-4">
                <Pagination links={links} />
            </CardFooter>
            }
        </>
    )
}
