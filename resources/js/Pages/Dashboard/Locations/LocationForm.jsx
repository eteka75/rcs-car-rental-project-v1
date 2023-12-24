import { useEffect, useRef, useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { Card, CardBody, Progress } from '@material-tailwind/react';
import Select from 'react-select';
import Translate from '@/components/Translate';
import TextArea from '@/components/TextArea';
import { useTranslation } from 'react-i18next';
import { DateToFront } from '@/tools/utils';
import i18n from '@/i18n';

export default function LocationForm({ className = '', location = null, pays = [], action, btntext = 'Enrégister' }) {
    // intialize as en empty array
    const { t } = useTranslation();
    const { voitures, point_retraits } = usePage().props
    const [showDetatail,setShowDetail]=useState(true);

    const refs = useRef([]); // or an {}
    refs.current = []; // or an {}  

    const handleFileChange = (e) => {
        let file = e.target.files;

        if (file !== undefined && file[0]) {
            setData("fichier", file[0]);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setData(id, value);
    };

    const setDefaultValue = (id, val) => {
        if (id && val) { return { label: val, value: id }; }
        return null;
    }
    const ConvertSelectData = (tab) => {
        if (Array.isArray(tab)) {
            let v = [];
            tab.map(({ id, nom }) => {
                v.push({ value: id, label: nom });
            });
            return v;
        }
        return [];
    }
    const addToRefs = el => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    const { data, setData, post, progress, errors, processing, recentlySuccessful } = useForm(location !== null && action === 'update' ?
        {
            tarif_location_heure: location.tarif_location_heure ?? '',
            tarif_location_hebdomadaire: location.tarif_location_hebdomadaire ?? '',
            tarif_location_journalier: location.tarif_location_journalier ?? '',
            tarif_location_mensuel: location.tarif_location_mensuel ?? '',
            date_debut_location: DateToFront(location.date_debut_location, i18n.language, 'd/m/Y') ?? '',
            date_fin_location: DateToFront(location.date_fin_location, i18n.language, 'd/m/Y') ?? '',
            point_retrait_id: location.point_retrait_id ?? '',
            conditions: location.conditions ?? '',
            description: location.description ?? ''
        } : {
            tarif_location_heure: '',
            tarif_location_hebdomadaire: '',
            tarif_location_journalier: '',
            tarif_location_mensuel: '',
            date_debut_location: '',
            date_fin_location: '',
            point_retrait_id: '',
            conditions: '',
            description: ''
        });
    const handleSubmit = (e) => {
        e.preventDefault();

        if (location && action === 'update') {
            post(route('dashboard.locations.update', location.id), data, {
                onSuccess: () => {
                    // Handle success, e.g., redirect
                    //alert('Ok')
                },

                onError: (errors) => {
                    //console.log(errors);
                },
            });
        }
        if (action === 'save') {
            post(route('dashboard.locations.store'), {
                onSuccess: () => {
                    // Handle success, e.g., redirect
                    //alert('Ok')
                },
                onError: (errors) => {
                    //console.log(errors);
                },
            });
        }
    };

    return (
        <div className='md:grid md:grid-cols-2 md:gap-4'>
            <Card>
                <CardBody>
                    <section className={className}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            <div>
                                <InputLabel htmlFor="voiture_id"  >Voiture</InputLabel>
                                <Select
                                    id="voiture_id"
                                    isClearable={true}
                                    isSearchable={true}
                                    defaultValue={setDefaultValue(data.voiture_id, (location && location.voiture.nom) ? location.voiture.nom : '')}

                                    onChange={(options) =>
                                        !options ? setData('voiture_id', "") : setData('voiture_id', options.value)
                                    }
                                    className="mt-1 block w-full"
                                    options={ConvertSelectData(voitures)}
                                />

                                <InputError message={errors.voiture_id} className="mt-2" />
                            </div>
                            
                            <div>
                                <InputLabel htmlFor="point_retrait_id"  >Lieu de retrait</InputLabel>
                                <Select
                                    id="point_retrait_id"
                                    isClearable={true}
                                    isSearchable={true}
                                    defaultValue={setDefaultValue(data.point_retrait_id, (location && location.voiture.ville) ? location.voiture.nom : '')}

                                    onChange={(options) =>
                                        !options ? setData('point_retrait_id', "") : setData('voiture_id', options.value)
                                    }
                                    className="mt-1 block w-full"
                                    options={ConvertSelectData(point_retraits)}
                                />

                                <InputError message={errors.voiture_id} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="nom_location"  >Nom de l'opération</InputLabel>
                                <TextInput
                                    id="nom_location"
                                    ref={addToRefs}
                                    value={data.nom_location}
                                    onChange={handleInputChange}
                                    type="text"
                                    className="mt-1 block w-full"
                                    placeholder={t('Réparation de la filtre à aire, Réparation, Entretien, ...')}

                                />

                                <InputError message={errors.nom_location} className="mt-2" />
                            </div>

                            <div className='md:grid md:grid-cols-12 gap-4'>
                                <div className='md:col-span-4'>

                                    <InputLabel htmlFor="date_location" >Date du contrôle</InputLabel>
                                    <TextInput
                                        id="date_location"
                                        ref={addToRefs}
                                        value={data.date_location}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="mt-1 w-full block  "
                                        placeholder={t('10/01/1990')}

                                    />
                                    <InputError message={errors.date_location} className="mt-2" />
                                </div>
                                <div className='md:col-span-8'>
                                    <InputLabel htmlFor="prix_location"  >Responsable de l'opération</InputLabel>
                                    <TextInput
                                        id="responsable_location"
                                        ref={addToRefs}
                                        value={data.responsable_location}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="mt-1 block w-full"
                                        placeholder={t('John DIMAC')}

                                    />

                                    <InputError message={errors.responsable_location} className="mt-2" />
                                </div>
                            </div>

                            <div className='md:grid md:grid-cols-4 md:gap-4'>
                                <div className='md:col-span-2'>
                                    <InputLabel htmlFor="prix_location"  >Prix de l'opération</InputLabel>
                                    <TextInput
                                        id="prix_location"
                                        ref={addToRefs}
                                        value={data.prix_location}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="mt-1 block w-full"
                                        placeholder={t('15000')}

                                    />

                                    <InputError message={errors.prix_location} className="mt-2" />

                                </div>
                                <div className='md:col-span-2'>
                                    <InputLabel htmlFor="kilometrage" >Kilométrage</InputLabel>

                                    <TextInput
                                        id="kilometrage"
                                        ref={addToRefs}
                                        size='4'
                                        value={data.kilometrage}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="mt-1 w-full block  "
                                        placeholder={t('100045')}

                                    />

                                    <InputError message={errors.kilometrage} className="mt-2" />
                                </div>

                            </div>
                            <div>

                                <InputLabel htmlFor="fichier" >Fichier sur la réparation</InputLabel>

                                <input
                                    id="fichier"
                                    ref={addToRefs}
                                    onChange={handleFileChange}
                                    type="file"
                                    className="mt-1 rounded-md  bg-white shadow-none border border-slate-300 py-1.5 px-4 block w-full"

                                />
                                {progress && (
                                    <Progress value={progress.percentage} color="blue" max="100">
                                        {progress.percentage}%
                                    </Progress>
                                )}

                                <InputError message={errors.fichier} className="mt-2" />
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
                                        placeholder={t('Description')}

                                    />

                                    <InputError message={errors.description} className="mt-2" />
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
                </CardBody>
            </Card>
            <Card className={"transition-all duration-300 "+(showDetatail?'block':'hidden')}>
                <CardBody>
                    <section>

                    </section>
                </CardBody>
            </Card>
        </div>
    );
}
