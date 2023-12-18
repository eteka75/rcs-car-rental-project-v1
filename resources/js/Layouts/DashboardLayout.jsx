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
                user={auth.user} auth={auth} >

                <div className="max-w-screen-2xl mx-auto  grid grid-cols-10">
                    <DashMainMenu  />
                    <DashMain >
                        {children}
                    </DashMain>
                </div>
            </AuthenticatedLayout>
        </>
    )
}
