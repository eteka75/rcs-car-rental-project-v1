import ApplicationLogo from '@/Components/ApplicationLogo';
import FooterMega from '@/components/FooterMega';
import HeaderMenu from '@/components/HeaderMenu';
import LocationHeader from '@/components/locations/LocationHeader';
import { Link } from '@inertiajs/react';

export default function Guest({ auth = {}, children }) {
    return (
        <>
            <div className="">
                <HeaderMenu />
                <div className="max-w-screen-xl_ mx-auto dark:bg-gray-800  overflow-hidden">
                    {children}
                </div>
                <FooterMega />
            </div>
        </>
    );
}
