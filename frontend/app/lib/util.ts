function formatDegrees(degrees: number) {
    const absDegrees = Math.abs(degrees);
    const degreesInt = Math.floor(absDegrees);
    const minutes = Math.floor((absDegrees - degreesInt) * 60);
    const seconds = Math.floor(((absDegrees - degreesInt) * 60 - minutes) * 60);
    return `${degreesInt}° ${minutes}' ${seconds}"`;
}

export function formatLatitude(latitude: number) {
    const direction = latitude >= 0 ? 'N' : 'S';
    const formattedDegrees = formatDegrees(latitude);
    return `${formattedDegrees} ${direction}`;
}

export function formatLongitude(longitude: number) {
    const direction = longitude >= 0 ? 'E' : 'W';
    const formattedDegrees = formatDegrees(longitude);
    return `${formattedDegrees} ${direction}`;
}
