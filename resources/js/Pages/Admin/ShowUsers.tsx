import editIcon from "@/../assets/icon-edit.svg";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import { Head } from "@inertiajs/react";

export default function ShowUsers({ users }: { users: User[] }) {
    const pageName = "登録されているユーザーの閲覧";
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
                                            className="py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                                        ></th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                                        >
                                            学籍番号
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                                        >
                                            名前
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                                        >
                                            管理者
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300"
                                        >
                                            更新日時
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td className="whitespace-nowrap py-4">
                                                <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-600">
                                                    <img
                                                        src={editIcon}
                                                        alt="✏️"
                                                        className="h-5 w-5"
                                                    />
                                                </button>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {user.student_id}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {user.name}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {user.is_admin === 1
                                                    ? "はい"
                                                    : "いいえ"}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {new Date(
                                                    user.updated_at,
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
        </Authenticated>
    );
}
