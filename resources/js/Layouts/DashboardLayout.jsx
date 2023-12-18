import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DashMainMenu from '@/components/dashboard/DashMainMenu';
import DashHeadTitle from '@/components/dashboard/DashHeadTitle';
import DashMain from '@/Layouts/DashMain';

export default function DashboardLayout({ auth = {}, children }) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user} auth={auth}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Mon compte</h2>}
            >

                <div className="max-w-screen-2xl mx-auto  grid grid-cols-10">
                    <DashMainMenu />
                    <DashMain >
                        {children}

                    </DashMain>
                </div>
            </AuthenticatedLayout>
        </>
    )
}
