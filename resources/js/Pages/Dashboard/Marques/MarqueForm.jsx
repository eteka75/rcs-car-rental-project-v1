import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { Switch } from '@material-tailwind/react';
import Translate from '@/components/Translate';

export default function MarqueForm({ className = '', onSubmit, btntext = 'Enrégister' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        nom: '',
        logo: '',
        pays_id: '',
        annee_fondation: '',
        site_web: '',
        description: ''
    });

    const SaveMarque = (e) => {
        e.preventDefault();

        post(route('dashboard.marques.create'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    alert('ok')
                  //  passwordInput.current.focus();
                }

                if (errors.current_password) {
                    //reset('current_password');
                    //currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>

            <form onSubmit={onSubmit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="nom" value="Nom de la marque" />

                    <TextInput
                        id="nom"
                        ref={currentPasswordInput}
                        value={data.nom}
                        onChange={(e) => setData('nom', e.target.value)}
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                    />

                    <InputError message={errors.nom} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="nom" value="Logo" />

                    <TextInput
                        id="nom"
                        ref={currentPasswordInput}
                        value={data.nom}
                        onChange={(e) => setData('nom', e.target.value)}
                        type="file"
                        className="mt-1 border border-slate-300 py-1.5 px-4 block w-full"
                        autoComplete="current-password"
                    />

                    <InputError message={errors.nom} className="mt-2" />
                </div>
                <div className='grid md:grid-cols-3 md:gap-4'>
                    <div>
                        <InputLabel htmlFor="nom" value="Couleur" />
                        <TextInput
                            id="nom"
                            ref={currentPasswordInput}
                            value={data.nom}
                            onChange={(e) => setData('nom', e.target.value)}
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />

                        <InputError message={errors.nom} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="nom" value="Nombre de places" />

                        <TextInput
                            id="nom"
                            ref={currentPasswordInput}
                            value={data.nom}
                            onChange={(e) => setData('nom', e.target.value)}
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />

                        <InputError message={errors.nom} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="nom" value="Année de fabrication" />

                        <TextInput
                            id="nom"
                            ref={currentPasswordInput}
                            value={data.nom}
                            onChange={(e) => setData('nom', e.target.value)}
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />

                        <InputError message={errors.nom} className="mt-2" />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 md:gap-4'>
                    <div>
                        <InputLabel htmlFor="nom" value="Marque" />

                        <TextInput
                            id="nom"
                            ref={currentPasswordInput}
                            value={data.nom}
                            onChange={(e) => setData('nom', e.target.value)}
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />

                        <InputError message={errors.nom} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="nom" value="Catégorie" />

                        <TextInput
                            id="nom"
                            ref={currentPasswordInput}
                            value={data.nom}
                            onChange={(e) => setData('nom', e.target.value)}
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />

                        <InputError message={errors.nom} className="mt-2" />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 md:gap-4'>
                    <div>
                        <InputLabel htmlFor="nom" value="Date d'achat" />

                        <TextInput
                            id="nom"
                            ref={currentPasswordInput}
                            value={data.nom}
                            onChange={(e) => setData('nom', e.target.value)}
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />

                        <InputError message={errors.nom} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="nom" value="Volume du coffre" />

                        <TextInput
                            id="nom"
                            ref={currentPasswordInput}
                            value={data.nom}
                            onChange={(e) => setData('nom', e.target.value)}
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />

                        <InputError message={errors.nom} className="mt-2" />
                    </div>
                </div>

                <div className='grid md:grid-cols-2 md:gap-4'>
                    <div>
                        <InputLabel htmlFor="nom" value="Type de carburant" />

                        <TextInput
                            id="nom"
                            ref={currentPasswordInput}
                            value={data.nom}
                            onChange={(e) => setData('nom', e.target.value)}
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />
                        <InputError message={errors.nom} className="mt-2" />
                    </div>
                    <div className='md:pt-7 md:items-center'>
                        <div class="flex items-center">
                            <label for="hs-basic-with-description" class="text-sm text-gray-500 me-3 dark:text-gray-400"><Translate>Occupée</Translate></label>

                            <input name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                type="checkbox" id="hs-basic-with-description" class="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200
   focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500
    dark:focus:ring-offset-gray-600 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition 
    before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                            <label for="hs-basic-with-description" class="text-sm text-gray-500 ms-3 dark:text-gray-400"><Translate>Disponible</Translate></label>

                            <InputError message={errors.nom} className="mt-2" />
                        </div>
                    </div>
                </div>
                <div>
                    <InputLabel htmlFor="nom" value="Autres photos (minimum 3 photos)" />

                    <TextInput
                        id="nom"
                        ref={currentPasswordInput}
                        value={data.nom}
                        onChange={(e) => setData('nom', e.target.value)}
                        type="file"
                        className="mt-1 border border-slate-300 py-1.5 px-4 block w-full"
                        autoComplete="current-password"
                    />

                    <InputError message={errors.nom} className="mt-2" />
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton
                        className='bg-blue-600 hover:bg-blue-800 text-white'
                        disabled={processing}>
                        {btntext}
                    </PrimaryButton>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                    </Transition>
                </div>
                <div className="py-4">

                </div>
            </form>
        </section>
    );
}
