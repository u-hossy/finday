import Authenticated from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import { Head } from "@inertiajs/react";

export default function ShowUsers({ users }: { users: User[] }) {
    const pageName = "登録されているユーザーの閲覧";
    console.log(users);
    return (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {pageName}
                </h2>
            }
        >
            <Head title={pageName} />
            <div>aaa</div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">学籍番号</th>
                        <th scope="col">名前</th>
                        <th scope="col">管理者</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.student_id}</td>
                            <td>{user.name}</td>
                            <td>{user.is_admin === 1 ? "はい" : "いいえ"}</td>
                            <td>
                                {new Date(user.updated_at).toLocaleString(
                                    "ja-JP",
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticated>
    );
}
