import { BsCart2 } from "react-icons/bs";
import { IoCarSportOutline } from "react-icons/io5";
import { VscDashboard } from "react-icons/vsc";


export const menuItemsData = [
  {
    title: 'Tableau de bord',
    url: '/dashboard',
    id: 'dashs',
    icon:<VscDashboard className='me-0 md:me-1 lg:me-2 h-5 w-5 text-slate-600' />,
  },
    {
      title: 'Gérer les voitures',
      url: '',
      id: 'voitures',
      icon: <IoCarSportOutline className='me-0 md:me-1 lg:me-2 h-5 w-5 text-slate-600' />,
      sub: [
        {
          title: "Voitures",
          route: 'dashboard.voitures'
        },
        {
          title: "Ajouter",
          route: 'dashboard.voitures.create'
        },
      ]
    },
  ];


