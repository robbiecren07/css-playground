import { useState, useEffect, useContext } from "react";
import FlexSidebarContext from "context/flexSidebar";
import { Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCanXmark } from '@fortawesome/pro-solid-svg-icons'

import styles from '../../styles/Flex.module.scss'

const DisplayFlexItem = () => {

  const flexCtx = useContext(FlexSidebarContext)
  const flexItems = flexCtx.Flex_items
  const handleRemoveItem = (e) => flexCtx.removeFlexItem(e)
  const handleEditItem = (e) => flexCtx.fetchEditItem(e)
  const handleSelectedItem = (e) => flexCtx.fetchSelectedItem(e)

  const edit = (e) => {
    handleEditItem(e)
    handleSelectedItem(e)
  }

  const remove = (e) => {
    handleRemoveItem(e)
  }

  const cx = (...classNames) => classNames.join(' ');

  return flexItems.map((item) => (
    <>
      <div className={styles.flex_item} style={{ flexGrow: item.FG_value, flexShrink: item.FS_value, flexBasis: item.FB_value, alignSelf: item.AS_value, order: item.OR_value }}>
        <div className={styles.flex_item_wrap}>
          <div className={styles.flex_item_inner}>
          <Text color="#080808">Item: {item.id}</Text>
          </div>
          <button className={item.active ? `${cx(styles.edit, styles.active)}` : `${styles.edit}`} onClick={() => edit(item.key)}>{item.active ? 'Done' : 'Edit'}</button>
        </div>
      
        <button className={styles.trash} onClick={() => remove(item.key)}>
          <FontAwesomeIcon icon={faTrashCanXmark} />
        </button>
      </div>
    </>
  ))

}

export default DisplayFlexItem