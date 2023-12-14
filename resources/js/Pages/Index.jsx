import FrontLayout from '@/Layouts/FrontLayout';
import Header from '@/components/Header';
import LocationExpert from '@/components/locations/LocationExpert';
import LocationSteps from '@/components/locations/LocationSteps';
import LocationTopMarque from '@/components/locations/LocationTopMarque';
import LocationTop from '@/components/locations/LocationTop';
import { Link, Head } from '@inertiajs/react';
import LocationHelpSteps from '@/components/locations/LocationHelpSteps';
import LocationFaq from '@/components/locations/LocationFaq';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
        <FrontLayout auth={auth}>            
            <Head title="Location ert Vente de véhicules moins cher au Bénin" />
            <LocationSteps/>
            <LocationExpert/>
            <LocationTop/>
            <LocationTopMarque/>
            <LocationHelpSteps/>
            <LocationFaq/>
        </FrontLayout>
        </>
    );
}
