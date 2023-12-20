import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { Progress, Switch } from '@material-tailwind/react';
import Translate from '@/components/Translate';
import TextArea from '@/components/TextArea';

export default function MarqueForm({ className = '', onSubmit, btntext = 'Enrégister' }) {
    // intialize as en empty array
   const refs = useRef([]); // or an {}
   refs.current = []; // or an {}
   
    const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData(id, value);
  };

  const handleFileChange = (e) => {
    console.log(e.target.files);
    console.log(e.target.files[0]);
    setData('logo', e.target.files[0]);
  };
   const addToRefs = el => {
     if (el && !refs.current.includes(el)) {
       refs.current.push(el);
     }
    };
    const {  data, setData, post, progress , errors, processing, recentlySuccessful } = useForm({
        nom: '',
        logo: '',
        pays_id: '',
        annee_fondation: '',
        site_web: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Submit the form data to the server
        post(route('dashboard.marques.store'), {
          onSuccess: () => {
            // Handle success, e.g., redirect
            alert('Ok')
          },
          onError: (errors) => {
            if (errors.password) {
                alert('!!!ok')
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

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <InputLabel htmlFor="nom" value="Nom de la marque" />

                    <TextInput
                        id="nom"
                        ref={addToRefs}
                        value={data.nom}
                        onChange={handleInputChange}
                        type="text"
                        className="mt-1 block w-full"
                    />

                    <InputError message={errors.nom} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="logo" value="Logo" />

                    <input
                        id="logo"
                        ref={addToRefs}
                        onChange={(e) => setData("logo", e.target.files?e.target.files[0]:null)}
                        type="file"
                        className="mt-1  bg-white shadow-none border py-1.5 px-4 block w-full"
                        autoComplete="current-password"
                    />
                     {progress && (
                        <Progress  value={progress.percentage}  color="blue" max="100">
                            {progress.percentage}%
                        </Progress>
                        )}
                    
                    <InputError message={errors.logo} className="mt-2" />
                </div>
                <div className='grid md:grid-cols-2 md:gap-4'>
                    <div>
                        <InputLabel htmlFor="pays_id" value="Pays d'origine de la marque" />
                        <TextInput
                            id="pays_id"
                            ref={addToRefs}
                            value={data.pays_id}
                            onChange={handleInputChange}
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />

                        <InputError message={errors.pays_id} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="annee_fondation" value="Année de création de la marque" />

                        <TextInput
                            id="annee_fondation"
                            ref={addToRefs}
                            size='4'
                            value={data.annee_fondation}
                            onChange={handleInputChange}
                            type="text"
                            className="mt-1 w-32 block "
                            autoComplete="current-password"
                        />

                        <InputError message={errors.annee_fondation} className="mt-2" />
                    </div>
                   
                </div>
                <div>
                        <InputLabel htmlFor="site_web" value="Site Web" />
                        <TextInput
                            id="site_web"
                            ref={addToRefs}
                            value={data.site_web}
                            onChange={handleInputChange}
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />

                        <InputError message={errors.site_web} className="mt-2" />
                    </div>
                <div className=''>
                    <div>
                        <InputLabel htmlFor="nom" value="Description" />

                        <TextArea
                            id="description"
                            ref={addToRefs}
                            value={data.description}
                            onChange={handleInputChange}
                            rows="6"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />

                        <InputError message={errors.description} className="mt-2" />
                    </div>
                    
                </div>
                
                
                <div className="flex items-center gap-4">
                {progress > 0 && <div>{`Upload Progress: ${progress}%`}</div>}
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
            </form>
        </section>
    );
}
