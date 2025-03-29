/**
 * Converts a string or a nested array of strings into a flat array of strings.
 *
 * @param {string | (string | string[])[]} str - The input value to be normalized.
 * It can be a single string, an array of strings, a nested array of strings, or undefined.
 * @returns {string[]} A flat array of strings. If the input is undefined or null, an empty array is returned.
 *
 * @example
 * // Input as a single string
 * stringToStringArray('hello')
 * // Result: ['hello']
 *
 * @example
 * // Input as a nested array of strings
 * stringToStringArray(['hello', ['world', 'test']])
 * // Result: ['hello', 'world', 'test']
 *
 * @example
 * // Input is undefined
 * stringToStringArray(undefined)
 * // Result: []
 */
export default function stringToStringArray(str: string | (string | string[])[]): string[] {
  return str ? (typeof str === 'string' ? [str] : str?.flatMap((i) => i) || []) : []
}