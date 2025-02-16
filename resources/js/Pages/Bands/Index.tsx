import editIcon from "@/../assets/icon-edit.svg";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Band } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Index({ bands }: { bands: Band[] }) {
    const pageName = "登録されているバンド一覧";
    console.log(bands);
    return (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {pageName}
                </h2>
            }
        >
            <Head title={pageName} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="overflow-x-auto border-b border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                                        >
                                            編集
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                                        >
                                            バンド名
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                                        >
                                            メンバー
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                                        >
                                            更新日時
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                                        >
                                            登録日時
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                                    {bands.map((band) => (
                                        <tr key={band.id}>
                                            <td className="whitespace-nowrap px-4 py-2">
                                                <Link href={`/bands/${band.id}`}>
                                                    <button className="rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400">
                                                        <img
                                                            src={editIcon}
                                                            alt="✏️"
                                                            className="h-5 w-5 max-w-none"
                                                        />
                                                    </button>
                                                </Link>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {band.name}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <ul>
                                                    {band.users.map(
                                                        (user) => (
                                                            <li key={user.id}>
                                                                {
                                                                    user.name
                                                                }
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {new Date(
                                                    band.updated_at,
                                                ).toLocaleString("ja-JP")}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {new Date(
                                                    band.created_at,
                                                ).toLocaleString("ja-JP")}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated >
    );
}
