import TimeTable from "@/Components/TimeTable";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Reservation, Room, Time } from "@/types";

export default function Show({
    room,
    reservations,
    times,
    userId,
}: {
    room: Room[];
    reservations: Reservation[];
    times: Time[];
    userId: number;
}) {
    const pageName = `${room[0].name}の予約状況`;
    console.log(room);
    console.log(reservations);
    console.log(userId);
    return userId ? (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {pageName}
                </h2>
            }
        >
            <TimeTable
                pageName={pageName}
                room={room}
                reservations={reservations}
                times={times}
                userId={userId}
            />
        </Authenticated>
    ) : (
        <div>
            <TimeTable
                pageName={pageName}
                room={room}
                reservations={reservations}
                times={times}
            />
        </div>
    );
}
