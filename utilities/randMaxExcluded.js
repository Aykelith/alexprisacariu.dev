export default function randMaxExcluded(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
