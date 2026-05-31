export interface UserCreateRequest {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export interface UserResponse {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
}