import { useEffect } from 'react';
import Logo from "../../assets/images/logo-v0-min.png";
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { IoLogInOutline } from "react-icons/io5";
import {  FcOk } from 'react-icons/fc';
import { PiCarProfileDuotone } from "react-icons/pi";
import MiniFixedFooter from '@/components/MiniFixedFooter';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Conexion à votre compte" />
            <div className="md:grid md:grid-cols-2 min-h-screen mb-0">
                <div className=" shadow-xl md:flex border-0   overflow-hidden  bg-[url('@/assets/images/design/bg-2.jpg')] bg-cover bg-no-repeat bg-[left_calc(100%)_top_calc(100%)]">
                    <div className="bg-[rgba(0,0,0,.25)] relative  duration-300 bg-gradient-to-t from-[rgba(0,0,0,.95)]  h-full w-full ">
                        <div className=' sm:max-w-md lg:max-w-lg absolute top-1/3 left-4 right-4  xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2    '>
                            <div className='min-w-min mb-6 rounded-lg shadow-sm bg-[rgba(255,255,255,.8)]   '>
                                <div className="grid grid-flow-col items-center md:gap-4">

                                    <div className='px-8 py-4'>
                                        <h2 className="text-xl font-extrabold">
                                            Soyez la bienvenue !
                                        </h2>
                                        <h3 className="text-md">
                                            Connectez-vous pour découvrir un monde de possibilités :
                                        </h3>
                                        <div className="text-sm text-light text-slate-900">
                                            <ul>
                                                <li className='flex flex-row py-1  mt-1'>
                                                    <div className='items-center justify-center'>
                                                        <FcOk className='me-1 text-lg' />
                                                    </div>
                                                    <div>
                                                        Mettez à jour votre profil
                                                    </div>
                                                </li>
                                                <li className='flex flex-row  py-1'>
                                                    <div className='items-center justify-center'>
                                                        <FcOk className='me-1 text-lg' />
                                                    </div>
                                                    <div>
                                                        Explorez notre catalogue varié de voitures
                                                    </div>
                                                </li>
                                                <li className='flex flex-row  py-1'>
                                                    <div className='items-center justify-center'>
                                                        <FcOk className='me-1 text-lg' />
                                                    </div>
                                                    <div>
                                                        Profitez de fonctionnalités exclusives pour une expérience automobile personnalisée
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className='rounded-b-md mb-6 shadow-sm mx-auto border-gray-200 bg-blue-600 text-white py-4 px-8'>


                                    <div className="grid items-center grid-flow-col gap-4">
                                        <div>
                                            <PiCarProfileDuotone className='text-5xl' />
                                        </div>
                                        <div>
                                            <h2 className="text-sm w-full ">
                                                Prêt à prendre le volant de votre prochaine aventure ?
                                            </h2>
                                            <h3 className='text-sm'>Connectez-vous et commencez dès maintenant !</h3>
                                            <p className='text-slate-300 text-sm'>

                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className=' items-center justify-center'>
                    <div className='sm:max-w-md  px-8 py-10 md:pt-[30%] md:pb-[20vh]'>
                    <Link
                        href={"/"}
                        className="flex items-center  mb-14 space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src={Logo}
                            className="h-10"
                            alt="Logo CRS Bénin"
                            />
                        <span className="self-center  sm:flex md:text-xl uppercase_ font-semibold whitespace-nowrap dark:text-white">
                            Rental Car Services
                        </span>
                    </Link>
                        <h1 className='text-3xl mb-4 font-bold flex'>
                            <IoLogInOutline className='me-1' />
                            Connexion</h1>
                        <form onSubmit={submit}>
                            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                            <div>
                                <InputLabel htmlFor="email" value="Adresse e-mail" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Mot de passe" />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="block mt-4">

                                <div className="flex items-center">
                                    <input name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        type="checkbox" id="hs-basic-with-description" className="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200
                                            focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500
                                            dark:focus:ring-offset-gray-600 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition 
                                            before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description" className="text-sm text-gray-500 ms-3 dark:text-gray-400">Rester connecté</label>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 text-center sm:text-start md:grid-cols-2 items-center gap-4 justify-start mt-4">
                                <PrimaryButton className="bg-blue-600 text-center whitespace-nowrap" disabled={processing}>
                                    Se connecter
                                </PrimaryButton>
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                    >Mot de passe oublié ?</Link>
                                )}


                            </div>
                            <div className='mt-8  text-center sm:text-start'> Nouveau ?
                                <Link
                                    href={route('register')}
                                    className="underline mx-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                >
                                    Créer un compte
                                </Link>
                            </div>
                        </form>
                        
                </div>
                
            </div>
            <MiniFixedFooter/>
            </div>
        </GuestLayout >
    );
}
