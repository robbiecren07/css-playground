import { useState, useEffect, useContext } from "react";
import FlexSidebarContext from "context/flexSidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCanXmark } from '@fortawesome/pro-solid-svg-icons'

import styles from '../../styles/Flex.module.scss'

const FlexItem = ({ itemCount, selectedItem, trashClick, addFGStyle }) => {
  
  const flexCtx = useContext(FlexSidebarContext)

  return (
    <div className={styles.flex_item} style={{ flexGrow: flexCtx.FG_value }}>
      <div className={styles.flex_item_wrap}>
        <div className={styles.flex_item_inner}>
          Item: {itemCount + 1}
        </div>
        <button className={styles.edit} onClick={selectedItem}>Edit</button>
      </div>
    
      <button className={styles.trash} onClick={trashClick}>
        <FontAwesomeIcon icon={faTrashCanXmark} />
      </button>
    </div>
  )

}

export default FlexItem