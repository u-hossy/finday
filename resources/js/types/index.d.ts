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

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User,
    },
};
