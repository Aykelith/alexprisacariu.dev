export default function addPostDataDefaults(data, variablesNames = []) {
    if (variablesNames.length === 0 || (variablesNames.includes("coverSmall") && !data.coverSmall)) {
        data.coverSmall = "/imgs/posts/placeholder/cover-small.png";
    }

    if (variablesNames.length === 0 || (variablesNames.includes("coverLarge") && !data.coverLarge)) {
        data.coverLarge = "/imgs/posts/placeholder/cover-large.png";
    }

    return data;
}
