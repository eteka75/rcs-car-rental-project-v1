import { BsCart2 } from "react-icons/bs";
import { IoCarSportOutline, IoKeyOutline } from "react-icons/io5";
import { VscDashboard } from "react-icons/vsc";


export const menuItemsData = [
  {
    title: 'Tableau de bord',
    url: '/dashboard',
    id: 'dashs',
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
        route: 'dashboard.voitures'
      },
      {
        title: "Marques",
        route: 'dashboard.voitures.create'
      },
      {
        title: "Catégories",
        route: 'dashboard.voitures.create'
      },
      {
        title: "Types de carburants",
        route: 'dashboard.voitures.create'
      },
      {
        title: "Contrôles techniques",
        route: 'dashboard.voitures.create'
      },
      {
        title: "Types de motorisation",
        route: 'dashboard.voitures.create'
      },
      {
        title: "Systèmes de sécurité",
        route: 'dashboard.voitures.create'
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
        route: 'dashboard.voitures'
      },
      {
        title: "Points de retrait",
        route: 'dashboard.voitures.create'
      },
      {
        title: "Villes",
        route: 'dashboard.voitures.create'
      },
      {
        title: "Contrôles techniques",
        route: 'dashboard.voitures.create'
      },
      {
        title: "Assurances",
        route: 'dashboard.voitures.create'
      },
      {
        title: "Options de locations",
        route: 'dashboard.voitures.create'
      }, 
      {
        title: "Conditions",
        route: 'dashboard.voitures.create'
      },
      {
        title: "Réductions",
        route: 'dashboard.voitures.create'
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
        route: 'dashboard.voitures'
      },
      {
        title: "Points de retrait",
        route: 'dashboard.voitures.create'
      },
      {
        title: "Services",
        route: 'dashboard.voitures.create'
      },
      {
        title: "Conditions",
        route: 'dashboard.voitures.create'
      }
    ],

  },
];


