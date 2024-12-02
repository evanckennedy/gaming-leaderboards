/**
 * Formats a given Date object into a string in the format MM/DD/YYYY.
 *
 * @param date - The date to format
 * @returns The formatted date string
 */

export function formatDate(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}
