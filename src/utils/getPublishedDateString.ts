//= Functions & Modules
// Own
import getMonthName from '../utils/getMonthName';

const currentDate = new Date();

export default function getDateString(publishedDateRaw: string): string {
    const publishedDate = new Date(publishedDateRaw);
    return `${publishedDate.getDate()} ${getMonthName(publishedDate.getMonth())}${currentDate.getFullYear() != publishedDate.getFullYear() ? ` ${publishedDate.getFullYear()}` : ""}`;
}
