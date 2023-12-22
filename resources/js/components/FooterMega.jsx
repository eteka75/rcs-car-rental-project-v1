import React from 'react';
import { Link } from '@inertiajs/react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';


export default function FooterMega() {
    return (
        <>
            <div id='footer'>
                <footer className="bg-gray-950 border-0 dark:bg-gray-900 bg-gradient-to-b from-gray-800 to-gray-90">
                    <div className="mx-auto w-full max-w-screen-xl relative">
                        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 text-sm">
                        <div className='col-span-2 md:col-span-1'>
                                <h2 className="mb-2 text-sm font-semibold text-gray-200 uppercase dark:text-white">Rental Car services</h2>
                               <p className="text-slate-400">
                                Nous sommes une entreprise de location et de vente de voitures de toutes catégories au Bénin. Nous sommes situé à Sèmè-Kpodji au Bénin 
                               </p>
                               <div className="flex mt-4 pt-4 md:mt-0 space-x-5 rtl:space-x-reverse">
                                <a href="https://twitter.com/?lang=fr" className="text-gray-400 hover:text-gray-200 dark:hover:text-white">
                                   <FaXTwitter className='text-3xl md:text-xl' />
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a href="https://facebook.com" className="text-gray-400 hover:text-gray-200 dark:hover:text-white">
                                <FaFacebookSquare className='text-3xl md:text-xl'/> 
                                    <span className="sr-only">Twitter page</span>
                                </a>
                            </div>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">La société</h2>
                                <ul className="text-gray-400  dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link href="#" className="hover:underline hover:text-blue-500">A propos</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#" className="hover:underline hover:text-blue-500">Services</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#" className="hover:underline hover:text-blue-500">Nous contacter</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#" className="hover:underline hover:text-blue-500">Louer une voiture</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#" className="hover:underline hover:text-blue-500">Acheter une voiture</Link>
                                    </li>
                                   
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">Centre d'aide</h2>
                                <ul className="text-gray-400  dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link href="#" className="hover:underline hover:text-blue-500">Messages</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#" className="hover:underline hover:text-blue-500">Forum aux question</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#" className="hover:underline hover:text-blue-500">Facebook</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="#" className="hover:underline hover:text-blue-500">Nous contacter</Link>
                                    </li>
                                    <li className="mb-4">
                                    <Link href="#" className="hover:underline hover:text-blue-500">Terms &amp; Conditions</Link>

                                    </li>
                                </ul>
                            </div>
                            
                        </div>

                    </div>
                    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 ">
                        <div className='mx-auto max-w-screen-xl text-center md:flex md:items-center md:justify-center'>
                            <span className="text-sm text-gray-500 dark:text-gray-300  text-center">Copyright © {new Date().getFullYear()} Rental Car Services Bénin. Tous droits réservés.

                            </span>
                            
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
