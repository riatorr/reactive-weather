// Make sure first word is capitalized in description.
export function capitalizeFirstLetter ([first, ...remaining]) {
    return first.toUpperCase() + remaining.join('');
}

export function roundNumberToWhole (temperature) {
    return Math.floor(Math.round(temperature));
}