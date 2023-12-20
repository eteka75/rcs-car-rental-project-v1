import { AiOutlineSetting } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsCart2, BsInfoCircle } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCarSportOutline, IoKeyOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import { VscDashboard } from "react-icons/vsc";


export const menuItemsData = [
  {
    title: 'Tableau de bord',
    url: '/dashboard',
    id: 'dash',
    icon: <VscDashboard className='me-0 md:me-1 lg:me-2 h-5 w-5 text-slate-600' />,
  },
  
  {
    title: 'Gérer les voitures',
    url: '',
    id: 'voitures',
    icon: <IoCarSportOutline className='me-0 md:me-1 lg:me-2 h-5 w-5 text-slate-600' />,
    sub: [
      {
        title: "Voitures",
        route: 'dashboard.voitures',
        sid:'voitures',
      },
      {
        title: "Marques",
        route: 'dashboard.marques',
        sid:'marques',
      },
      {
        title: "Catégories",
        route: 'dashboard.categories',
        sid:'categories'
      },
      {
        title: "Types de carburants",
        route: 'dashboard.voitures.create',
        sid:'Types'
      },
      {
        title: "Contrôles techniques",
        route: 'dashboard.voitures.create',
        sid:'controle'
      },
      {
        title: "Types de motorisation",
        route: 'dashboard.voitures.create',
        sid:'motorisation'
      },
      {
        title: "Systèmes de sécurité",
        route: 'dashboard.voitures.create',
        sid:'securite'
      },
    ],

  },
  {
    title: 'Gérer les locations',
    url: '',
    id: 'locations',
    icon: <IoKeyOutline className='me-0 md:me-1 lg:me-2 h-5 w-5 text-slate-600' />,
    sub: [
      {
        title: "En location",
        route: 'dashboard.voitures',
        sid:'voitures'
      },
      {
        title: "Points de retrait",
        route: 'dashboard.voitures.create',
        sid:'voitures'
      },
      {
        title: "Villes",
        route: 'dashboard.voitures.create',
        sid:'voitures'
      },
      {
        title: "Contrôles techniques",
        route: 'dashboard.voitures.create',
        sid:'voitures'
      },
      {
        title: "Assurances",
        route: 'dashboard.voitures.create',
        sid:'voitures'
      },
      {
        title: "Options de locations",
        route: 'dashboard.voitures.create',
        sid:'voitures'
      }, 
      {
        title: "Conditions",
        route: 'dashboard.voitures.create',
        sid:'Conditions'
      },
      {
        title: "Réductions",
        route: 'dashboard.voitures.create',
        sid:'Réductions'
      },
    ],

  },
  {
    title: 'Gérer les ventes',
    url: '',
    id: 'ventes',
    icon: <BsCart2 className='me-0 md:me-1 lg:me-2 h-5 w-5 text-slate-600' />,
    sub: [
      {
        title: "En vente",
        route: 'dashboard.voitures',
        sid:'ventes'
      },
      {
        title: "Points de retrait",
        route: 'dashboard.voitures.create',
        sid:'Points'
      },
      {
        title: "Services",
        route: 'dashboard.voitures.create',
        sid:'Services'
      },
      {
        title: "Conditions",
        route: 'dashboard.voitures.create',
        sid:'Conditions'
      }
    ],

  },
  {
    title: 'Support clients',
    url: '',
    id: 'support',
    icon: <BsInfoCircle className='me-0 md:me-1 lg:me-2 h-5 w-5 text-slate-600' />,
    sub: [
      {
        title: "Pages",
        route: 'dashboard.voitures.create',
        sid:'page'
      },
      {
        title: "Forums aux questions",
        route: 'dashboard.voitures',
        sid:'faq'
      }
    ],

  },
  
  {
    title: 'Notifications',
    url: '',
    id: 'ventes',
    icon: <IoMdNotificationsOutline className='me-0 md:me-1 lg:me-2 h-5 w-5 text-slate-600' />,
    sub: [
      {
        title: "Notifications",
        route: 'dashboard.voitures',
        sid:'notifications'
      },
      {
        title: "Archives",
        route: 'dashboard.voitures.create',
        sid:'archives'
      }
    ],

  },
  {
    title: 'Gérer les utilisateurs',
    url: '',
    id: 'ventes',
    icon: <PiUsersThree className='me-0 md:me-1 lg:me-2 h-5 w-5 text-slate-600' />,
    sub: [
      {
        title: "Clients",
        route: 'dashboard.voitures'
      },
      {
        title: "Administrateurs",
        route: 'dashboard.voitures.create'
      },
      {
        title: "Services",
        route: 'dashboard.voitures.create'
      }
    ],

  },
  {
    title: 'Messagerie',
    url: '/messages',
    id: 'messages',
    icon: <BiMessageSquareDetail className='me-0 md:me-1 lg:me-2 h-5 w-5 text-slate-600' />  

  },
  {
    title: 'Paramètres',
    url: '/messages',
    id: 'parametres',
    icon: <AiOutlineSetting className='me-0 md:me-1 lg:me-2 h-5 w-5 text-slate-600' />  

  },
];


