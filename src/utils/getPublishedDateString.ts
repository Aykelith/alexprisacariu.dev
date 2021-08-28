//= Functions & Modules
// Own
import getMonthName from '../utils/getMonthName';

export default function getDateString(publishedDateRaw: string): string {
    const publishedDate = new Date(publishedDateRaw);
    return `${publishedDate.getDate()} ${getMonthName(publishedDate.getMonth())}`;
}
