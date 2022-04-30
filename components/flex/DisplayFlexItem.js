import { useContext } from 'react'
import FlexSidebarContext from 'context/flexSidebarContext'
import { Text } from '@chakra-ui/react'
import { TrashCanIcon } from '@/styles/theme'

import styles from '../../styles/Flex.module.scss'

const DisplayFlexItem = () => {

  const flexCtx = useContext(FlexSidebarContext)
  const flexItems = flexCtx.Flex_items
  const handleRemoveItem = (e) => flexCtx.removeFlexItem(e)
  const handleEditItem = (e) => flexCtx.fetchEditItem(e)
  const cx = (...classNames) => classNames.join(' ')

  const edit = (e) => {
    handleEditItem(e)
  }

  const remove = (e) => {
    handleRemoveItem(e)
  }

  return flexItems.map((item) => (
    <div key={item.key} className={item.selected ? `${cx(styles.flex_item, styles.active)}` : `${styles.flex_item}`} style={{ flexGrow: item.FG_value, flexShrink: item.FS_value, flexBasis: item.FB_value, alignSelf: item.AS_value, order: item.OR_value }}>
      <div className={styles.flex_item_wrap}>
        <div className={styles.flex_item_inner}>
        <Text color="#080808">Item: {item.id}</Text>
        </div>
        <button className={item.selected ? `${cx(styles.edit, styles.active)}` : `${styles.edit}`} onClick={() => edit(item.key)}>{item.selected ? 'Done' : 'Edit'}</button>
      </div>
    
      <button className={styles.trash} onClick={() => remove(item.key)}>
        <TrashCanIcon w="16px" h="16px" fill="#A3A3A3" /> 
      </button>
    </div>
  ))

}

export default DisplayFlexItem