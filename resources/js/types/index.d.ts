export interface User {
    id: number;
    student_id: string;
    name: string;
    email: string;
    email_verified_at?: string;
    is_admin: number;
    created_at: string;
    updated_at: string;
}

export interface Band {
    id: number;
    name: string;
    users: User[];
    created_at: string;
    updated_at: string;
}

export interface BandMember {
    id: number;
    band_id: number;
    user_id: number;
    user: User;
    created_at: string;
    updated_at: string;
}

export interface Reservation {
    id: number;
    date: string;
    time: number;
    room_id: number;
    band_id: number;
    band: Band;
    over_reservable: boolean;
    created_at: string;
    updated_at: string;
}

export interface Room {
    id: number;
    name: string;
    useable: boolean;
    who_has_key?: number | null;
    created_at: string;
    updated_at: string;
}

export interface Time {
    id: number;
    time_id: number;
    name: string;
    starts_at: string;
    ends_at: string;
    created_at: string;
    updated_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User,
    },
};
