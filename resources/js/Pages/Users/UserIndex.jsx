import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Pagination from "@/Components/Pagination";
import ConfirmDeleteButton from "@/Components/Delete/ConfirmDeleteButton";
import { usePage } from "@inertiajs/react";
import AlertMessage from "@/Components/Alert/AlertMessage";

export default function UserIndex({ auth, users }) {

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
            <Head title="Usuarios" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex justify-between">
                            <h3 className="text-lg font-semibold">Lista de Usuarios</h3>
                            <PrimaryButton>
                                <Link href={route('users.create')}>
                                    Adicionar Usuario
                                </Link>
                            </PrimaryButton>
                        </div>
                        <AlertMessage message={flash} />

                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
                                <thead className="bg-gray-500 dark:bg-gray-800">
                                    <tr>
                                        <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider'   >ID</th>
                                        <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider'   >Nome</th>
                                        <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 tracking-wider'   >Email</th>
                                        <th className='px-6 py-3 text-center text-sm font-medium text-gray-500 tracking-wider'   >Ações</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {users.data.map((user) => (
                                        <tr key={user.id}>
                                            <td className='px-6 py-4 text-gray-500 tracking-wider'>{user.id}</td>
                                            <td className='px-6 py-4 text-gray-500 tracking-wider'>{user.name}</td>
                                            <td className='px-6 py-4 text-gray-500 tracking-wider'>{user.email}</td>
                                            <td className='px-6 py-4 text-center'>
                                                <PrimaryButton>
                                                    <Link href={route('users.edit', user.id)}>
                                                        Editar
                                                    </Link>
                                                </PrimaryButton>
                                            </td>
                                            <td className='px-6 py-4 text-center'>
                                                <PrimaryButton>
                                                    <Link href={route('users.show', user.id)}>
                                                        Visualizar
                                                    </Link>
                                                </PrimaryButton>
                                            </td>
                                            <td className='px-6 py-4 text-center'>
                                                <ConfirmDeleteButton id={user.id} routename="users.destroy" />
                                            </td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                            <Pagination links={users.links} currentPage={users.current_page} />
                        </div>
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}
