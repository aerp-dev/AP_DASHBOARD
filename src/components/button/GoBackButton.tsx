import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function GoBackButton({ btnTitle = '', btnStyle, url = '..' }: { btnTitle?: string; btnStyle?: string; url?: string }) {
	const { t } = useTranslation()
	const navigate = useNavigate()

	return (
		<button className={btnStyle} onClick={() => navigate(url)}>
			{btnTitle || t('global.goBack')}
		</button>
	)
}