import { Head, Link } from "@inertiajs/react";

export default function Landing() {
    const appName = import.meta.env.VITE_APP_NAME || "Laravel";
    return (
        <>
            <Head title={appName} />
            <div>
                <h1>{appName}</h1>
                <Link href="/login">Login</Link>
            </div>
        </>
    );
}
