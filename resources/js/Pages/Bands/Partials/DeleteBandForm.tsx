import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { Band } from "@/types";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef, useState } from "react";

export default function DeleteBandForm({
    band,
    className = "",
}: {
    band: Band,
    className?: string,
}) {
    const [confirmingBandDeletion, setConfirmingBandDeletion] = useState(false);
    const confirmInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        setError,
        clearErrors,
    } = useForm({
        confirm: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingBandDeletion(true);
    };

    const deleteBand: FormEventHandler = (e) => {
        e.preventDefault();
        clearErrors();

        if (data.confirm === band.name) {
            destroy(route("band.destroy", { id: band.id }), {
                preserveScroll: true,
                onSuccess: () => closeModal(),
                onError: () => confirmInput.current?.focus(),
                onFinish: () => reset(),
            });
        } else {
            setError("confirm", "入力が一致しません");
            confirmInput.current?.focus();
            setData("confirm", "");
        }
    };

    const closeModal = () => {
        setConfirmingBandDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    バンドの削除
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    バンドを削除するとすべての情報が削除されます。
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
                このバンドを削除する
            </DangerButton>

            <Modal show={confirmingBandDeletion} onClose={closeModal}>
                <form onSubmit={deleteBand} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        {band.name}の情報を本当に削除しますか？
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        この操作は取り消せません。削除する場合は「
                        <span className="font-bold">{band.name}</span>
                        」と入力してください。
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="confirm"
                            value="バンド名を入力してください"
                            className="sr-only"
                        />

                        <TextInput
                            id="confirm"
                            type="text"
                            name="confirm"
                            ref={confirmInput}
                            value={data.confirm}
                            onChange={(e) => setData("confirm", e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder={band.name}
                        />

                        <InputError message={errors.confirm} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            キャンセル
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            削除
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
