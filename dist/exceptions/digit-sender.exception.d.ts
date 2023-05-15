declare class HostTypeInitialiserException extends Error {
    readonly statusCode?: number | undefined;
    constructor(statusCode?: number | undefined);
}
declare class PinLengthOverflowException extends Error {
    readonly length: number;
    constructor(length: number);
}
export { HostTypeInitialiserException, PinLengthOverflowException };
