import React from 'react'
import { MdAttachMoney, MdChecklistRtl } from 'react-icons/md';
import { TbCalculator, TbSettingsDollar } from 'react-icons/tb'
import vexpert from "../../assets/images/design/v-expert.png";

export default function LocationExpert() {
    return (
        <>
            <div className="bg-slate-100 py-8 ">
                <div className="max-w-screen-xl mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <img src={vexpert} alt="h-auto max-w-full" />
                        </div>
                        <div className='py-10'>
                            <h1 className="text-4xl font-extrabold mb-4">Notre expertise à votre service</h1>
                            <div className="flex text-xl items-center mb-4">
                                <MdAttachMoney className='text-center justify-center leading-10 h-10 w-10 font-bold rounded-full me-2 text-sm bg-white shadow p-2' />
                                <div>Une analyse objective des prix</div>
                            </div>
                            <div className="flex text-xl items-center mb-4">
                                <MdChecklistRtl className='text-center justify-center leading-10 h-10 w-10 font-bold rounded-full me-2 text-sm bg-white shadow p-2' />
                                <div>Une visibilité complète sur l'historique du véhicule</div>
                            </div>
                            <div className="flex text-xl items-center mb-4">
                                <TbCalculator className='text-center justify-center leading-10 h-10 w-10 font-bold rounded-full me-2 text-sm bg-white shadow p-2' />
                                <div>Votre budget maîtrisé avec notre simulateur de financement</div>
                            </div>
                            <div className="flex text-xl items-center mb-4">
                                <TbSettingsDollar className='text-center justify-center leading-10 h-10 w-10 font-bold rounded-full me-2 text-sm bg-white shadow p-2' />
                                <div>Une projection claire sur les futurs entretiens de votre voiture</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
