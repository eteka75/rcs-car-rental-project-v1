import FrontLayout from '@/Layouts/FrontLayout';
import LocationExpert from '@/components/locations/LocationExpert';
import LocationSteps from '@/components/locations/LocationSteps';
import LocationTopMarque from '@/components/locations/LocationTopMarque';
import LocationTop from '@/components/locations/LocationTop';
import { Head } from '@inertiajs/react';
import LocationHelpSteps from '@/components/locations/LocationHelpSteps';
import LocationFaq from '@/components/locations/LocationFaq';

export default function Welcome({ auth,top_marques, top_locations, top_faqs}) {
    return (
        <>
        <FrontLayout auth={auth}>            
            <Head title="Location ert Vente de voitures moins cher au Bénin" />
            <LocationSteps/>
            <LocationTopMarque marques={top_marques}/>
            <LocationExpert/>
            <LocationTop locations={top_locations}/>
            <LocationHelpSteps/>
            <LocationFaq faqs={top_faqs}/>
        </FrontLayout>
        </>
    );
}
