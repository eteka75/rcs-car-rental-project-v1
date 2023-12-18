import React from 'react';

import Menudropdown from '../../components/Menudropdown';
import { VscDashboard } from 'react-icons/vsc';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsCart2 } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoCarSportOutline, IoKeyOutline } from 'react-icons/io5';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Link } from '@inertiajs/react';
import { PiUsersThree } from 'react-icons/pi';
import { menuItemsData } from '@/data/DashMenus';
import { Button } from 'bootstrap';
export default function DashMainMenu() {
  
  return (
    <>
      <div className="col-span-2 sm:col-span-3 lg:col-span-2 ">

        <div className="flex py-12 min-h-full sm:border-r md:pe-4 flex-col gap-2 max-w-[280px] mx-auto ">
          <h2 className="text-sm text-gray-500 tracking-widest px-4 font-bold uppercase line-clamp-5">Menu de Navigation</h2>
          {menuItemsData.map((menu, index) => {
            return (
              <Menudropdown key={index}>
                <Menudropdown.Trigger>
                  <button type="button"
                    className="flex items-center text-start px-2 py-1 ms-2 text-md mb-0 leading-4 font-medium rounded-md text-gray-900 dark:text-gray-100  dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"

                  >{menu.icon} {menu.title}
                    {menu.sub && menu.sub.length && (<span className='float-right right-1 sm:absolute'>
                      <svg className="w-4 h-4 ms-2  text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

                    </span>)}
                  </button>
                  <Menudropdown.Content >
                  {menu.sub ? menu.sub.map((smenu, sindex) => (
                      <Menudropdown.Link key={sindex} className='flex' href={route(smenu.route)}> {smenu.title}</Menudropdown.Link>
                      )) : ''}
                  </Menudropdown.Content>
                </Menudropdown.Trigger>
              </Menudropdown>
            );
          })}
          <div className="menu hidden">
            <Menudropdown>
              <Menudropdown.Trigger>
                <span className="inline-flex w-full ">
                  <Link
                    href={route('dashboard')}
                  >
                    <VscDashboard className='me-0 md:me-1 lg:me-2 h-5 w-5 text-slate-600' />
                    <span className="menu-label hidden sm:flex">Tableau de bord</span>
                  </Link>
                </span>
              </Menudropdown.Trigger>
            </Menudropdown>
            <Menudropdown></Menudropdown>
            <Menudropdown is_open={true}>
              <Menudropdown.Trigger>
                <span className="inline-flex w-full ">
                  <button
                    type="button"
                    className="inline-flex items-center  text-start px-2 py-1 ms-2 text-md leading-4 font-medium rounded-md text-gray-900 dark:text-gray-100  dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                  >

                    <BsCart2 className='me-0 md:me-1 lg:me-2  h-5 w-5 text-slate-600' />
                    <span className="menu-label hidden sm:flex">Commandes </span>
                    <span className='float-right right-1 sm:absolute'>
                      <svg className="w-4 h-4 ms-2  text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

                    </span>
                  </button>
                </span>
              </Menudropdown.Trigger>

              <Menudropdown.Content>
                <Menudropdown.Link className='flex' href={route('dashboard')}> Locations</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Achats </Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Annulations </Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Factures</Menudropdown.Link>
              </Menudropdown.Content>
            </Menudropdown>

            <Menudropdown>
              <Menudropdown.Trigger>
                <span className="inline-flex w-full ">
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 ms-2 text-md leading-4 font-medium rounded-md text-gray-900 dark:text-gray-100  dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                  >

                    <IoCarSportOutline className='me-0 md:me-1 lg:me-2 h-5 w-5 text-slate-600' />
                    <span className="menu-label hidden sm:flex">Gérer les voitures</span>
                    <span className='float-right right-1 sm:absolute'>
                      <svg className="w-4 h-4 ms-2  text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

                    </span>
                  </button>
                </span>
              </Menudropdown.Trigger>

              <Menudropdown.Content>
                <Menudropdown.Link className='flex' href={route('dashboard')}> Véhicules</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Marques</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Modèles</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Catégories</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Options</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Systèmes de sécurité</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Réparations</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Favoris</Menudropdown.Link>

              </Menudropdown.Content>
            </Menudropdown>
            <Menudropdown>
              <Menudropdown.Trigger>
                <span className="inline-flex w-full ">
                  <button
                    type="button"
                    className="inline-flex items-center text-start px-2 py-1 ms-2 text-md leading-4 font-medium rounded-md text-gray-900 dark:text-gray-100  dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                  >

                    <IoKeyOutline className='me-0 md:me-1 lg:me-2  h-5 w-5 text-slate-600' /> <span className="menu-label hidden sm:flex">Gérer les locations</span>
                    <span className='float-right right-1 sm:absolute'>
                      <svg className="w-4 h-4 ms-2  text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

                    </span>
                  </button>
                </span>
              </Menudropdown.Trigger>

              <Menudropdown.Content>
                <Menudropdown.Link className='flex' href={route('dashboard')}> En locations</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Points de retrait</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Villes</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Assurances</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Conditions</Menudropdown.Link>
              </Menudropdown.Content>
            </Menudropdown>
            <Menudropdown>
              <Menudropdown.Trigger>
                <span className="inline-flex w-full ">
                  <button
                    type="button"
                    className="inline-flex items-center text-start px-2 py-1 ms-2 text-md leading-4 font-medium rounded-md text-gray-900 dark:text-gray-100  dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                  >

                    <BsCart2 className='me-0 md:me-1 lg:me-2  h-5 w-5 text-slate-600' />
                    <span className="menu-label hidden sm:flex">Gérer les ventes</span>
                    <span className='float-right right-1 sm:absolute'>
                      <svg className="w-4 h-4 ms-2  text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

                    </span>
                  </button>
                </span>
              </Menudropdown.Trigger>

              <Menudropdown.Content>
                <Menudropdown.Link className='flex' href={route('dashboard')}> En ventes</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Services</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Conditions</Menudropdown.Link>
              </Menudropdown.Content>
            </Menudropdown>
            <Menudropdown >
              <Menudropdown.Trigger>
                <span className="inline-flex w-full ">
                  <button
                    type="button"
                    className="inline-flex items-center text-start px-2 py-1 ms-2 text-md leading-4 font-medium rounded-md text-gray-900 dark:text-gray-100  dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                  >

                    <PiUsersThree className='me-0 md:me-1 lg:me-2  h-5 w-5 text-slate-600' />
                    <span className="menu-label hidden sm:flex">Gérer utilisateurs</span>
                    <span className='float-right right-1 sm:absolute'>
                      <svg className="w-4 h-4 ms-2  text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

                    </span>
                  </button>
                </span>
              </Menudropdown.Trigger>

              <Menudropdown.Content>
                <Menudropdown.Link className='flex' href={route('dashboard')}> Clients</Menudropdown.Link>
                <Menudropdown.Link className='flex ' href={route('profile.edit')}> Administrateurs</Menudropdown.Link>
              </Menudropdown.Content>
            </Menudropdown>
            <Menudropdown>
              <Menudropdown.Trigger>
                <span className="inline-flex w-full ">
                  <button
                    type="button"
                    className="inline-flex items-center text-start px-2 py-1 ms-2 text-md leading-4 font-medium rounded-md text-gray-900 dark:text-gray-100  dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                  >
                    <IoMdNotificationsOutline className='me-0 md:me-1 lg:me-2  h-5 w-5 text-slate-600' />
                    <span className="menu-label hidden sm:flex">Notifications </span>
                  </button>
                </span>
              </Menudropdown.Trigger>
            </Menudropdown>
            <Menudropdown>
              <Menudropdown.Trigger>
                <span className="inline-flex w-full ">
                  <button
                    type="button"
                    className="inline-flex items-center text-start px-2 py-1 ms-2 text-md leading-4 font-medium rounded-md text-gray-900 dark:text-gray-100  dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                  >
                    <BiMessageSquareDetail className='me-0 md:me-1 lg:me-2  h-5 w-5 text-slate-600' />
                    <span className="menu-label hidden sm:flex">Messagerie</span>
                  </button>
                </span>
              </Menudropdown.Trigger>
            </Menudropdown>

            <Menudropdown>
              <Menudropdown.Trigger>
                <span className="inline-flex w-full ">
                  <button
                    type="button"
                    className="inline-flex items-center text-start px-2 py-1 ms-2 text-md leading-4 font-medium rounded-md text-gray-900 dark:text-gray-100  dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                  >
                    <AiOutlineSetting className='me-0 md:me-1 lg:me-2  h-5 w-5 text-slate-600' />
                    <span className="menu-label hidden sm:flex">Paramètres </span>
                  </button>
                </span>
              </Menudropdown.Trigger>
            </Menudropdown>
          </div>
        </div>
      </div>
    </>
  )
}
