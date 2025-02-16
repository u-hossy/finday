import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Band, User } from "@/types";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function UpdateBandInformation({
    band,
    // status,
    className = "",
    users,
}: {
    band: Band,
    // status?: string;
    className?: string,
    users: User[],
}) {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: band.name,
            users: band.users.map((user) => user.id),
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("band.update", { id: band.id }));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    バンド情報の更新
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    バンドの名前とメンバー情報を更新できます。
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="バンド名" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="users" value="メンバー" />

                    <select
                        id="users"
                        className="mt-1 block w-full"
                        multiple
                        value={data.users.map(String)}
                        onChange={(e) =>
                            setData(
                                "users",
                                Array.from(e.target.selectedOptions, (option) =>
                                    Number(option.value),
                                ),
                            )
                        }
                    >
                        {users.map((user: User) => (
                            <option key={user.id} value={user.id}>
                                {user.name} ({user.email})
                            </option>
                        ))}
                    </select>

                    <InputError className="mt-2" message={errors.users} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>保存</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            保存されました。
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
