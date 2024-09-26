export function getUnixTimeInSeconds(): number {
    const currentUnixTime = new Date().valueOf();
    const inSeconds = Math.floor(currentUnixTime / 1000);
    return inSeconds;
}
