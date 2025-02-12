import { formatDate } from "@/libs/formatDate";
import { formatTime } from "@/libs/formatTime";
import { Reservation, Room, Time } from "@/types";
import { Head } from "@inertiajs/react";

export default function TimeTable({
    pageName,
    room,
    reservations,
    times,
    userId,
}: {
    pageName: string;
    room: Room[];
    reservations: Reservation[];
    times: Time[];
    userId?: number;
}) {
    console.log(room);
    console.log(reservations);
    console.log(times);
    console.log(userId);

    const sortedTimes: Time[] = [...times].sort(
        (a, b) => a.time_id - b.time_id,
    );

    // 今週の開始日を取得
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - startDate.getDay());

    // 一週間の日付を取得
    const weekDays = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        return date;
    });

    // 日付をフォーマットする関数
    const _formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    return (
        <>
            <Head title={pageName} />
            <div className="container mx-auto overflow-x-auto py-4">
                {!userId && (
                    <h1 className="mb-4 text-2xl font-bold">{pageName}</h1>
                )}
                <table className="min-w-full table-fixed bg-white dark:bg-gray-800">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">時間帯</th>
                            {weekDays.map((day) => (
                                <th
                                    key={day.toISOString()}
                                    className="border px-4 py-2"
                                >
                                    {formatDate(day)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedTimes.map((time) => (
                            <tr key={time.id}>
                                <td className="border px-4 py-2">
                                    <p className="font-bold">{time.name}</p>
                                    <p>{formatTime(time.starts_at)}</p>
                                    <p>- {formatTime(time.ends_at)}</p>
                                </td>
                                {weekDays.map((day) => (
                                    <td
                                        key={day.toISOString()}
                                        className="border px-4 py-2"
                                    >
                                        {reservations
                                            .filter(
                                                (reservation) =>
                                                    reservation.time ===
                                                        time.time_id &&
                                                    reservation.date ===
                                                        _formatDate(day),
                                            )
                                            .map((reservation) => (
                                                <div key={reservation.id}>
                                                    <p>
                                                        バンドID:{" "}
                                                        {reservation.band_id}
                                                    </p>
                                                    <p>
                                                        ごめんなさい:{" "}
                                                        {reservation.over_reservable
                                                            ? "はい"
                                                            : "いいえ"}
                                                    </p>
                                                </div>
                                            ))}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
