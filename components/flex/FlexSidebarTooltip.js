import { Tooltip } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

const FlexSidebarTooltip = ({ tooltipText }) => {

  return (
    <div className='flex flex-wrap'>
      <Tooltip label={tooltipText} placement='right' fontSize='14px' padding='1rem'>
        <InfoIcon w={4} h={4} cursor='pointer' />
      </Tooltip>
    </div>
  )

}

export default FlexSidebarTooltip