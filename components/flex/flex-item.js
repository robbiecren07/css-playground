import { useState, useEffect, useContext } from "react";
import FlexSidebarContext from "context/flexSidebar";
import { Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCanXmark } from '@fortawesome/pro-solid-svg-icons'

import styles from '../../styles/Flex.module.scss'

const FlexItem = ({ itemCount, selectedItem, itemKey }) => {
  
  const flexCtx = useContext(FlexSidebarContext)
  const handleRemoveItem = (e) => flexCtx.removeFlexItem(e)

  return (
    <div className={styles.flex_item} style={{ flexGrow: flexCtx.FG_value, flexShrink: flexCtx.FS_value, flexBasis: flexCtx.FB_value, alignSelf: flexCtx.AS_value, order: flexCtx.OR_value }}>
      <div className={styles.flex_item_wrap}>
        <div className={styles.flex_item_inner}>
         <Text>Item: {itemCount}</Text>
        </div>
        <button className={styles.edit} onClick={selectedItem}>Edit</button>
      </div>
    
      <button className={styles.trash} onClick={() => handleRemoveItem(itemKey)}>
        <FontAwesomeIcon icon={faTrashCanXmark} />
      </button>
    </div>
  )

}

export default FlexItem