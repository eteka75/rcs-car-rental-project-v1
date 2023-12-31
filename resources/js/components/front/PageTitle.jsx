import { Head } from '@inertiajs/react'
import { useTranslation } from 'react-i18next';

export default function PageTitle({ title, children, head = true }) {
    const { t } = useTranslation();

    return (
        <>
            {head && <Head title={t(title ?? '')} />}
            <div className="bg-[#f5f6f8] shadow-inner mt-0">
                
                <div className="max-w-screen-xl mx-auto px-4 ">
                <div className="">
                        {children}
                    </div>
                    <div >
                        <h1 className="text-slate-800 text-xl md:text-4xl pb-4 font-bold">{title}</h1>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
