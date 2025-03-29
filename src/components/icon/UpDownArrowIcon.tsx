import { type FC, memo } from 'react'

// Components
import { Icon } from 'components'

// Types
import { voidFunction } from 'types'
type UpDownArrowIconProps = { width?: number; isOpen: boolean; className?: string; onClick?: voidFunction }

const UpDownArrowIcon: FC<UpDownArrowIconProps> = memo(
  ({ width = 26, isOpen, className = '', onClick = () => null }): React.JSX.Element => (
    <Icon width={width} icon={isOpen ? 'iconamoon:arrow-up-2-duotone' : 'iconamoon:arrow-down-2-duotone'} className={`cursor-pointer mr-1 ${className}`} onClick={onClick} />
  ),
)
export default UpDownArrowIcon