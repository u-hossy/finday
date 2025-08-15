import MenuLayout from "@/Layouts/MenuLayout";
import { Link } from "@inertiajs/react";

export default function GuestMenu() {
    return (
        <>
            <MenuLayout>
                <div className="flex flex-col items-center">
                    <Link href="/dashboard" as="button">
                        ログイン
                    </Link>
                </div>
            </MenuLayout>
        </>
    );
}
