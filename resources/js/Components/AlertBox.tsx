import { HTMLAttributes } from "react";

interface AlertBoxProps extends HTMLAttributes<HTMLDivElement> {
    type: "info" | "warning" | "error";
    children: React.ReactNode;
}

export default function AlertBox({
    type,
    children,
    className = "",
    ...props
}: AlertBoxProps) {
    const baseClasses = "px-8 py-4 mx-auto rounded-md text-white w-fit";
    let typeClasses = "";

    switch (type) {
        case "info":
            typeClasses = "bg-green-600";
            break;
        case "warning":
            typeClasses = "bg-yellow-600";
            break;
        case "error":
            typeClasses = "bg-red-600";
            break;
    }

    return (
        <div
            {...props}
            className={`${baseClasses} ${typeClasses} ${className}`}
        >
            {children}
        </div>
    );
}
