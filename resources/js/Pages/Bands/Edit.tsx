import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Band, PageProps, User } from "@/types";
import { Head } from "@inertiajs/react";
import DeleteBandForm from "./Partials/DeleteBandForm";
import UpdateBandInformationForm from "./Partials/UpdateBandInformationForm";

export default function Edit({
    band,
    // status,
    users,
}: PageProps<{
    band: Band,
    // status?: string,
    users: User[],
}>) {
    const pageName = `${band.name} の情報の編集`;
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {pageName}
                </h2>
            }
        >
            <Head title={pageName} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <UpdateBandInformationForm
                            band={band}
                            // status={status}
                            className="max-w-xl"
                            users={users}
                        />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <DeleteBandForm band={band} className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
