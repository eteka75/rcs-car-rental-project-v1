import { useEffect, useRef, useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { Progress, Switch } from '@material-tailwind/react';
import Translate from '@/components/Translate';
import TextArea from '@/components/TextArea';
import { useTranslation } from 'react-i18next';

export default function VoitureForm({ className = '', voiture = null, marques = [],categories=[], type_carburants =[], action, btntext = 'Enrégister' }) {
    // intialize as en empty array
  const { t, i18n } = useTranslation();

    const refs = useRef([]); // or an {}
    refs.current = []; // or an {}
    //const [marques, setMarques] = useState([]);
    //useEffect(() => { setMarques(pays); }, []);

    const handleFileChange = (e) => {
        let file = e.target.files;

        if (file !== undefined && file[0]) {
            setData("photo", file[0]);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setData(id, value);
    };
    const addToRefs = el => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    const { data, setData, post, put, progress, errors, processing, recentlySuccessful } = useForm(voiture !== null && action === 'update' ?
        {
            nom: voiture.nom ?? '',
            photo: '',
            description: voiture.description ?? ''
        } : {
            nom: '',
            photo: '',
            description: ''
        });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (action === 'update') {
            post(route('dashboard.voitures.update', voiture.id), data, {
                onSuccess: () => {
                    // Handle success, e.g., redirect
                    //alert('Ok')
                },
                onError: (errors) => {
                    console.log(errors);
                },
            });
        }
        if (action === 'save') {
            post(route('dashboard.voitures.store'), {
                onSuccess: () => {
                    // Handle success, e.g., redirect
                    //alert('Ok')
                },
                onError: (errors) => {
                    console.log(errors);
                },
            });
        }
    };


    return (
        <section className={className}>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <InputLabel htmlFor="nom"  >Nom</InputLabel>
                    <TextInput
                        id="nom"
                        ref={addToRefs}
                        value={data.nom}
                        onChange={handleInputChange}
                        type="text"
                        className="mt-1 block w-full"
                        placeholder={t('Toyota Camry Full option')}

                    />

                    <InputError message={errors.nom} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="photo" >Photo</InputLabel>
                    <input
                        id="photo"
                        ref={addToRefs}
                        onChange={handleFileChange}
                        type="file"
                        className="mt-1 rounded-md  bg-white shadow-none border py-1.5 px-4 block w-full"

                    />
                    {progress && (
                        <Progress value={progress.percentage} color="blue" max="100">
                            {progress.percentage}%
                        </Progress>
                    )}

                    <InputError message={errors.photo} className="mt-2" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4'>
                <div>
                    <InputLabel htmlFor="annee_fabrication">Année de fabrication</InputLabel>
                    <TextInput
                        id="annee_fabrication"
                        ref={addToRefs}
                        value={data.annee_fabrication}
                        onChange={handleInputChange}
                        type="text"
                        className="mt-1 block w-full"
                        placeholder={t('2018')}

                    />

                    <InputError message={errors.annee_fabrication} className="mt-2" />
                </div>
                
                <div>
                    <InputLabel htmlFor="date_achat"  >Date d'achat</InputLabel>
                    <TextInput
                        id="date_achat"
                        ref={addToRefs}
                        value={data.nb_place}
                        onChange={handleInputChange}
                        type="text"
                        className="mt-1 block w-full"
                        placeholder={t('10/01/2012')}

                    />

                    <InputError message={errors.date_achat} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="nb_place">Nombre de places</InputLabel>
                    <TextInput
                        id="nb_place"
                        ref={addToRefs}
                        value={data.nb_place}
                        onChange={handleInputChange}
                        type="number"
                        className="mt-1 block w-full"
                        placeholder={t('5')}

                    />

                    <InputError message={errors.nb_place} className="mt-2" />
                </div>    
                
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
                <div>
                    <InputLabel htmlFor="annee_fabrication">Couleur</InputLabel>
                    <TextInput
                        id="couleur"
                        ref={addToRefs}
                        value={data.couleur}
                        onChange={handleInputChange}
                        type="text"
                        className="mt-1 block w-full"
                        placeholder={t('Rouge')}

                    />

                    <InputError message={errors.couleur} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="annee_fabrication">Volume du coffre</InputLabel>
                    <TextInput
                        id="couleur"
                        ref={addToRefs}
                        value={data.couleur}
                        onChange={handleInputChange}
                        type="text"
                        className="mt-1 block w-full"
                        placeholder={t('15 Litres')}

                    />

                    <InputError message={errors.couleur} className="mt-2" />
                </div>
                </div>
                <div className='grid md:grid-cols-3 md:gap-4'>
                    <div className='col-span-1'>
                        <InputLabel htmlFor="marque_id" >Catégories</InputLabel>
                        <select
                            id="marque_id" value={data.categorie_id}
                            ref={addToRefs}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm">
                            <option value=''>Sélectionnez une catégorie</option>
                            {categories && categories.length > 0 && categories.map(({ id, nom }, index) =>
                                <option

                                    key={index} value={id} >{nom}</option>
                            )}
                        </select>


                        <InputError message={errors.marque_id} className="mt-2" />
                    </div>
                    <div className='col-span-1'>
                        <InputLabel htmlFor="marque_id" >Marques</InputLabel>
                        <select
                            id="marque_id" value={data.marque_id}
                            ref={addToRefs}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm">
                            <option value=''>Sélectionnez une marque</option>
                            {marques && marques.length > 0 && marques.map(({ id, nom }, index) =>
                                <option

                                    key={index} value={id} >{nom}</option>
                            )}
                        </select>


                        <InputError message={errors.marque_id} className="mt-2" />
                    </div>
                    <div className='col-span-1'>
                    <InputLabel htmlFor="marque_id" >Type de carburant</InputLabel>
                        <select
                            id="marque_id" value={data.marque_id}
                            ref={addToRefs}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm">
                            <option value=''>Sélectionnez un type</option>
                            {type_carburants && type_carburants.length > 0 && type_carburants.map(({ id, nom }, index) =>
                                <option

                                    key={index} value={id} >{nom}</option>
                            )}
                        </select>

                        <InputError message={errors.type_carburant_id} className="mt-2" />
                    </div>

                </div>
                <div>
                    <InputLabel htmlFor="nom">Marques</InputLabel>
                    <TextInput
                        id="marque_id"
                        ref={addToRefs}
                        value={data.marque_id}
                        onChange={handleInputChange}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.marque_id} className="mt-2" />
                </div>
                
                
                
                <div className=''>
                    <div>
                        <InputLabel htmlFor="nom">Description</InputLabel>

                        <TextArea
                            id="description"
                            ref={addToRefs}
                            value={data.description}
                            onChange={handleInputChange}
                            rows="6"
                            className="mt-1 block w-full"

                        />

                        <InputError message={errors.description} className="mt-2" />
                    </div>

                </div>
                <div>
                    <div className="flex items-center">
                        <input name="disponibilite"
                            checked={data.disponibilite}
                            onChange={(e) => setData('disponibilite', e.target.checked)}
                            type="checkbox" id="hs-basic-with-description" className="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200
                                focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500
                                dark:focus:ring-offset-gray-600 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition 
                                before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                    <label htmlFor="hs-basic-with-description" className="text-sm text-gray-500 ms-3 dark:text-gray-400">Disponible</label>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {progress > 0 && <div>{`Upload Progress: ${progress}%`}</div>}
                    <PrimaryButton
                        className='bg-blue-600 hover:bg-blue-800 text-white'
                        disabled={processing}>
                       <Translate>{btntext}</Translate>
                    </PrimaryButton>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            <Translate>Sauvegardé</Translate>
                        </p>
                    </Transition>
                </div>
                
            </form>
        </section>
    );
}
