import HomeLayout from '@/Layouts/HomeLayout';
import AvisClients from '@/components/locations/AvisClients';
import LocationExpert from '@/components/locations/LocationExpert';
import LocationFaq from '@/components/locations/LocationFaq';
import LocationHelpSteps from '@/components/locations/LocationHelpSteps';
import LocationSteps from '@/components/locations/LocationSteps';
import LocationTop from '@/components/locations/LocationTop';
import LocationTopMarque from '@/components/locations/LocationTopMarque';
import TopLieux from '@/components/locations/TopLieux';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth,top_marques, avis_clients,top_locations, top_points, top_faqs}) {
    return (
        <>
        <HomeLayout auth={auth}>            
            <Head title="Location ert Vente de voitures moins cher au Bénin" />
            <LocationSteps/>
            <LocationTopMarque marques={top_marques}/>
            <LocationExpert/>
            <LocationTop locations={top_locations}/>
            {/*<TopLieux lieux={top_points} />*/}
            <LocationHelpSteps>
            <AvisClients avis={avis_clients}/>
            </LocationHelpSteps>
            <LocationFaq faqs={top_faqs}/>
        </HomeLayout>
        </>
    );
}
