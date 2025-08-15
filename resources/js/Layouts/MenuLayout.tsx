import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function MenuLayout({ children }: PropsWithChildren) {
    const appName = "Finday";
    const groupName = "OXサークル";
    return (
        <>
            <Head title={appName} />
            <div className="">
                <div className="my-6 flex flex-col items-center">
                    <span className="mb-2 text-3xl font-bold">{appName}</span>
                    {groupName && (
                        <span className="mb-4 text-xl">For {groupName}</span>
                    )}
                </div>

                <div className="">{children}</div>
            </div>
        </>
    );
}
