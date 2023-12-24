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
                            
                            
                            <div className='md:grid md:grid-cols-2 gap-4'>

                            <div>
                                <InputLabel htmlFor="tarif_location_heure"  >Tarif par heure</InputLabel>
                                <TextInput
                                    id="tarif_location_heure"
                                    ref={addToRefs}
                                    value={data.tarif_location_heure}
                                    onChange={handleInputChange}
                                    type="number"
                                    className="mt-1 block w-full"
                                    placeholder={t('5000')}

                                />

                                <InputError message={errors.tarif_location_heure} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="tarif_location_journalier"  >Tarif par jour</InputLabel>
                                <TextInput
                                    id="tarif_location_journalier"
                                    ref={addToRefs}
                                    value={data.tarif_location_journalier}
                                    onChange={handleInputChange}
                                    type="number"
                                    className="mt-1 block w-full"
                                    placeholder={t('20000')}

                                />

                                <InputError message={errors.tarif_location_journalier} className="mt-2" />
                            </div>
                            </div>
                            <div className='md:grid md:grid-cols-2 gap-4'>

                            <div>
                                <InputLabel htmlFor="tarif_location_hebdomadaire"  >Tarif par semaine (Hedomadaire)</InputLabel>
                                <TextInput
                                    id="tarif_location_hebdomadaire"
                                    ref={addToRefs}
                                    value={data.tarif_location_hebdomadaire}
                                    onChange={handleInputChange}
                                    type="number"
                                    className="mt-1 block w-full"
                                    placeholder={t('100000')}

                                />

                                <InputError message={errors.tarif_location_hebdomadaire} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="tarif_location_mensuel"  >Tarif par mois</InputLabel>
                                <TextInput
                                    id="tarif_location_mensuel"
                                    ref={addToRefs}
                                    value={data.tarif_location_mensuel}
                                    onChange={handleInputChange}
                                    type="number"
                                    className="mt-1 block w-full"
                                    placeholder={t('300000')}

                                />
                                <InputError message={errors.tarif_location_mensuel} className="mt-2" />
                            </div>
                            </div>

                            <div className='md:grid md:grid-cols-12 gap-4'>
                                <div className='md:col-span-6'>

                                    <InputLabel htmlFor="date_debut_location" >Date début location</InputLabel>
                                    <TextInput
                                        id="date_debut_location"
                                        ref={addToRefs}
                                        value={data.date_debut_location}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="mt-1 w-full block  "
                                        placeholder={'10/01/'+(new Date().getFullYear())}

                                    />
                                    <InputError message={errors.date_debut_location} className="mt-2" />
                                </div>
                                <div className='md:col-span-6'>

                                    <InputLabel htmlFor="date_fin_location" >Date fin location</InputLabel>
                                    <TextInput
                                        id="date_fin_location"
                                        ref={addToRefs}
                                        value={data.date_fin_location}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="mt-1 w-full block  "
                                        placeholder={'10/01/'+(new Date().getFullYear())}

                                    />
                                    <InputError message={errors.date_fin_location} className="mt-2" />
                                </div>
                            </div>
                            <div className='md:col-span-4'>

                                    <InputLabel htmlFor="point_retrait_id" >Points de retrait</InputLabel>
                                    <Select
                                    isMulti
                                        id="point_retrait_id"
                                        ref={addToRefs}
                                        value={data.point_retrait_id}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="mt-1 w-full block  "
                                    />
                                    <InputError message={errors.point_retrait_id} className="mt-2" />
                                </div>
                            <div >
                                <div >

                                    <InputLabel htmlFor="conditions" >Conditions de la location</InputLabel>
                                    <TextArea
                                        id="conditions"
                                        ref={addToRefs}
                                        value={data.conditions}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="mt-1 w-full block"

                                    />
                                    <InputError message={errors.conditions} className="mt-2" />
                                </div>
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
