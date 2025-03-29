export { default as getImageURL } from './getImageURL'
export { default as switchTheme } from './switchTheme'
export { default as capitalizeText } from './capitalizeText'

/**
 * Formats a camelCase string by inserting spaces before uppercase letters.
 * Converts camelCase to a space-separated string (e.g., "serviceGroup" → "service Group").
 *
 * @function
 * @param {string} str - The camelCase string to format.
 * @returns {string} - The formatted string with spaces inserted, or an empty string if the input is falsy.
 *
 * @example
 * import formatCamelCase from './formatCamelCase'
 *
 * console.log(formatCamelCase('serviceGroup')) // Output: 'service Group'
 * console.log(formatCamelCase('camelCaseExample')) // Output: 'camel Case Example'
 * console.log(formatCamelCase('')) // Output: ''
 * console.log(formatCamelCase(null)) // Output: ''
 */
export { default as getFullName } from './getFullName'
export { default as formatCamelCase } from './formatCamelCase'
export { default as stringToStringArray } from './stringToStringArray'
export { mobileDeviceChecker, isMobileDeviceScreen } from './isMobileDevice'

export { default as fieldsToFormData } from './fieldsToFormData'
export { default as historyParamsSet } from './historyParamsSet'
export { copyToClipboard, copyTextLinkToClipboard } from './copyToClipboard'
export { default as textSubstringFormatter } from './textSubstringFormatter'
export { default as getDefaultAPIParams } from './getDefaultAPIParams'
export { default as setDefaultPaginationParamsToHistory } from './setDefaultPaginationParamsToHistory'