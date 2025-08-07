import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import AlertMessage from "@/Components/Alert/AlertMessage";

export default function UserShow({ auth, user }) {

    const { flash } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Usuarios
                </h2>
            }
        >
            <Head title="Usuario" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex justify-between">
                            <h3 className="text-lg font-semibold">
                                Visualizar Usuario
                            </h3>
                            <SecondaryButton>
                                <Link href={route("users.index")}>
                                    Listar Usuarios
                                </Link>
                            </SecondaryButton>
                            </div>
                            <AlertMessage message={flash} />
                        </div>
                        <div className="bg-gray-50 text-sm dark:bg-gray-700 p-4 rounded-lg shadow-m"   >
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-700 dark:text-gray-200">ID</p>
                            <p className="text-gray-600 dark:text-gray-400">{user.id}</p>
                        </div>

                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-700 dark:text-gray-200">Nome</p>
                            <p className="text-gray-600 dark:text-gray-400">{user.name}</p>
                        </div>

                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-700 dark:text-gray-200">E-mail</p>
                            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                        </div>
                        </div>
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}
