export default function getImageURL(path: string) {
	return `${import.meta.env.VITE_BASE_URL || ''}${path}`
	// return `http://192.168.100.142:2222/${path}`
}