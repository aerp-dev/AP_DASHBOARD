import { lazy } from 'react'

export { default as Loader } from './loader/Loader'
export { default as Loading } from './loader/Loading'
export { default as SectionVisibilityDetector } from './sectionVisibilityDetector/SectionVisibilityDetector'

/** Iconify integratsiyasi va shuni customlashgan componenta. */
export const Icon = lazy(() => import('./icon/Icon'))
/** Icon componenti orqali toggle arrow up-down componentasi. */
export const UpDownArrowIcon = lazy(() => import('./icon/UpDownArrowIcon'))

/** h5 title text componentasi.
 * @param {string} params.title - Ko'rinishi kerak bo'lgan title yoziladi.
 * @returns {JSX.Element} h5 tag qaytaradi.
 */
export const TitleText = lazy(() => import('./titleText/TitleText'))
/** Ssilkali text uchun maxsus componenta.
 * @param {string} params.title - Ko'rinishi kerak bo'lgan title yoziladi.
 * @param {string} params.url - Bosganda ochiladigan URL.
 * @param {string} params.className - Link uchun className.
 * @param {string} params.translate - auto tarjima qilishga ruxsat berish. Default - 'no'.
 * @returns {JSX.Element} h5 tag qaytaradi.
 */
export const LinkedText = lazy(() => import('./linkedText/LinkedText'))

/** Bu bitta oldingi linkga yoki customlinkka otuvchi button, bu faqat back uchcun emas custom title va link bersa bo'ladi. */
export const GoBackButton = lazy(() => import('./button/GoBackButton'))
/** Bu item list pagelarda data filterlar yonidagi Add buttoni va bosganda add pagega otadi. */
export const Button = lazy(() => import('./button/Button'))
/** Add qilish formali pagelardagi Action buttonlar(SUbmit, Cancel) 2xil stilda. */
export const ActionsInAddItem = lazy(() => import('./button/ActionsInAddItem'))
/** Bu list tablitsalardagi action button update, delete item degan, kichik ekranlarda faqat iconkasi ko'rinadi. */
export const TableActionButtons = lazy(() => import('./button/TableActionButtons'))
/** Bu modallardagi o'ng taraf tepada turadigan Close X iconkali button. */
export const CloseAddItemModalButton = lazy(() => import('./button/CloseAddItemModalButton'))
/** */
export const SaveCancelButtons = lazy(() => import('./button/SaveCancelButtons'))

/** List table uchun son va button/strike'lik pagination. */
export const Pagination = lazy(() => import('./pagination/Pagination'))

/** Ekranda height bo'yicha azgina pastga tushganda ko'rinadi va bossa tepaga yana qaytarib qo'yadi scrolni. */
export const ScrollToTop = lazy(() => import('./scrollToTop/ScrollToTop'))

/** Coming soon component for blocing not actual or in process items */
export const ComingSoon = lazy(() => import('./comingSoon/ComingSoon'))

/** Navbar */
export const Navbar = lazy(() => import('./navbar/Navbar'))

/** GeneralInfo */
export const GeneralInfo = lazy(() => import('./generalInfo/GeneralInfo'))