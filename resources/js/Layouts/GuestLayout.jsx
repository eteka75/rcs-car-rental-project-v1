import ApplicationLogo from '@/Components/ApplicationLogo';
import FooterMega from '@/components/FooterMega';
import HeaderMenu from '@/components/HeaderMenu';
import LocationHeader from '@/components/locations/LocationHeader';
import { Link } from '@inertiajs/react';

export default function Guest({ auth = {}, children }) {
    return (
        <>
            <div className="min-h-screen bg-slate-100">
                <HeaderMenu />
                <div className="w-full   mx-auto sm:max-w-md my-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            <FooterMega />
            </div>
        </>
    );
}
