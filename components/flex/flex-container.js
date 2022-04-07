import { useState, useEffect, useContext } from 'react';
import FlexSidebarContext from "context/flexSidebar";
import FlexItem from './flex-item'

import styles from '../../styles/Flex.module.scss'

const DisplayFlexItem = ({ flexItems, removeFlexItem, selectedItem }) => {
  return flexItems.map((item) => (
    <>
      <FlexItem key={item} itemCount={item} trashClick={() => { removeFlexItem(item) }} selectedItem={selectedItem} />
    </>
  ))
}

const FlexContainer = ({ addFlexItem, setAddFlexItem, selectedItem }) => {

  const flexCtx = useContext(FlexSidebarContext)

  return (
    <section
      className={styles.right_content}
      style={{ flexDirection: flexCtx.FD_value, flexWrap: flexCtx.FW_value, justifyContent: flexCtx.JC_value, alignItems: flexCtx.AI_value, alignContent: flexCtx.AC_value }}
    >

      <DisplayFlexItem
        flexItems={addFlexItem}
        selectedItem={selectedItem}
        removeFlexItem={(item) => {
          const newAddFlexItem = addFlexItem.filter((currentItem) => currentItem !== item)
          setAddFlexItem(newAddFlexItem)
        }}
      />
      
    </section>
  )

}

export default FlexContainer