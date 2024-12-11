/**
 * Formats a given Date object into a string in the format MM/DD/YYYY.
 *
 * @param date - The date to format
 * @returns The formatted date string
 */

export function formatDate(date: Date): string {
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const year = date.getUTCFullYear();
  return `${month}/${day}/${year}`;
}
