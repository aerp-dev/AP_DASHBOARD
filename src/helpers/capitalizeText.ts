/** Textni birinchi harfini katta harfga o'girib beradi. Misol: name = Name
 * @param {string} text - Kerakli text berib yuboriladi.
 * @returns {string} So'zning birinchi harfini kattalashgan holatda natija qaytaradi
 */
export default function capitalizeText(text: string): string {
	return text ? text?.charAt(0)?.toUpperCase() + text?.slice(1) : ''
}