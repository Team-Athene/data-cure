import { sha256 } from "ohash";

export const hashEmail = (email: string): string => {
    return '0x' + sha256(email);
}