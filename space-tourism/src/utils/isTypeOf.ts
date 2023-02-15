export function isTypeOf<T>(check: any): check is T {
    if (check as T) {
        return true;
    }
    return false;
}
