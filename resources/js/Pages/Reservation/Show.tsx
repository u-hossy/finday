import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Reservation, Room } from "@/types";
import { Head } from "@inertiajs/react";

function Table({
    pageName,
    room,
    reservations,
    userId,
}: {
    pageName: string,
    room: Room[],
    reservations: Reservation[],
    userId?: number,
}) {
    console.log(room);
    console.log(reservations);
    console.log(userId);
    return (
        <>
            <Head title={pageName} />
            <p>table</p>
        </>
    );
}

export default function Show({
    room,
    reservations,
    userId,
}: {
    room: Room[],
    reservations: Reservation[],
    userId: number,
}) {
    const pageName = `${room[0].name}の予約状況`;
    console.log(room);
    console.log(reservations);
    console.log(userId);
    return userId ? (
        <Authenticated>
            <Table
                pageName={pageName}
                room={room}
                reservations={reservations}
                userId={userId}
            />
        </Authenticated>
    ) : (
        <div>
            <Table
                pageName={pageName}
                room={room}
                reservations={reservations}
            />
        </div>
    );
}
