import type { Token } from "./Token";
import type { User } from "./User";

export interface AuthResponse {
    user: User;
    token: Token;
}