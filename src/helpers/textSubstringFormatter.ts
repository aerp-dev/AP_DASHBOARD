/**
 * Trims the text to the specified length and adds '...' if it's too long.
 *
 * @param text - The string to format.
 * @param max_length - The maximum allowed length for the text.
 * @returns Formatted string with a possible '...' suffix.
 */
export default function textSubstringFormatter(text: string, max_length: number): string {
  return text && text?.length > max_length ? text?.substring(0, max_length)?.trim() + '...' : text
}