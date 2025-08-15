import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function MenuLayout({ children }: PropsWithChildren) {
    const appName = import.meta.env.VITE_APP_NAME || "Finday";
    const groupName = import.meta.env.VITE_GRUOP_NAME || "";
    return (
        <>
            <Head title={appName} />
            <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
                <div>
                    {/* <Link href="/">
                        <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                    </Link> */}
                    <span>{appName}</span>
                    {groupName && <span>For {groupName}</span>}
                </div>

                <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                    {children}
                </div>
            </div>
        </>
    );
}
