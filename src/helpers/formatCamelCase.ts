/**
 * Formats a camelCase string by inserting spaces before uppercase letters.
 * Converts camelCase to a space-separated string: "serviceGroup" → "service Group"
 *
 * @function
 * @param {string} str - The camelCase string to format.
 * @returns {string} The formatted string with spaces inserted.
 *
 * @example
 * import { formatCamelCase } from 'helpers'
 *
 * formatCamelCase('camelCaseExample')
 *     // Output: 'camel Case Example'
 * formatCamelCase(null)
 *     // Output: ''
 */
export default function formatCamelCase(str: string): string {
	return str ? str?.replace(/([a-z])([A-Z])/g, '$1 $2') : ''
}