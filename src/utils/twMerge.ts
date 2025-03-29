import { ClassNameValue, twMerge as twM } from 'tailwind-merge'
import { stringToStringArray } from 'helpers'

/**
 * Merges multiple Tailwind CSS class names into a single string while resolving conflicts.
 *
 * @param {...ClassNameValue[]} classLists - A list of class names or arrays of class names to merge. Each value can be a string, array, or undefined.
 * @returns {string} A single string containing the merged class names with conflicts resolved.
 *
 * @remarks
 * - This function uses `tailwind-merge` to handle conflicts between Tailwind utility classes.
 * - The `stringToStringArray` helper ensures that all input values are converted to arrays of strings before merging.
 *
 * @example
 * // Basic usage with strings
 * const merged = twMerge('bg-red-500', 'bg-blue-500') // Result: 'bg-blue-500'
 *
 * @example
 * // Usage with arrays
 * const merged = twMerge(['text-sm', 'font-bold'], 'text-lg') // Result: 'font-bold text-lg'
 *
 * @see {@link tailwind-merge} for the conflict resolution logic.
 * @see {@link stringToStringArray} for input normalization.
 */
export function twMerge(...classLists: ClassNameValue[]): string {
  return twM(stringToStringArray(classLists as any))
}