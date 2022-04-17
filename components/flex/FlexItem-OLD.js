import { useState, useEffect, useContext } from "react";
import FlexSidebarContext from "context/flexSidebar";
import { Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCanXmark } from '@fortawesome/pro-solid-svg-icons'

import styles from '../../styles/Flex.module.scss'

const FlexItem = ({ itemCount, selectedItem, itemKey, itemID, isActive }) => {
  
  const flexCtx = useContext(FlexSidebarContext)
  const handleRemoveItem = (e) => flexCtx.removeFlexItem(e)
  const handleEditItem = (e) => flexCtx.fetchEditItem(e)

  //console.log(flexCtx.Flex_items)
  //const activeValue = flexCtx.Flex_items

  // const [active, setActive] = useState(false)

  const edit = () => {
    handleEditItem(itemKey)
    selectedItem()
  }

  const cx = (...classNames) => classNames.join(' ');

  return (
    <div className={styles.flex_item} style={{ flexGrow: flexCtx.FG_value, flexShrink: flexCtx.FS_value, flexBasis: flexCtx.FB_value, alignSelf: flexCtx.AS_value, order: flexCtx.OR_value }}>
      <div className={styles.flex_item_wrap}>
        <div className={styles.flex_item_inner}>
         <Text color="#080808">Item: {itemCount}</Text>
        </div>
        <button className={isActive ? `${cx(styles.edit, styles.active)}` : `${styles.edit}`} onClick={edit}>{isActive ? 'Done' : 'Edit'}</button>
      </div>
    
      <button className={styles.trash} onClick={() => handleRemoveItem(itemKey)}>
        <FontAwesomeIcon icon={faTrashCanXmark} />
      </button>
    </div>
  )

}

export default FlexItem