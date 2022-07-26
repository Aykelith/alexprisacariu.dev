//= Functions & Modules
// Own
import { getMonthName } from '../../general';

const currentDate = new Date();

export function getPublishedDateString(publishedDateRaw: string): string {
    const publishedDate = new Date(publishedDateRaw);
    return `${publishedDate.getDate()} ${getMonthName(publishedDate.getMonth())}${currentDate.getFullYear() != publishedDate.getFullYear() ? ` ${publishedDate.getFullYear()}` : ""}`;
}
