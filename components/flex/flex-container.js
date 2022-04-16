import { useState, useEffect, useContext } from 'react';
import FlexSidebarContext from "context/flexSidebar";
import FlexItem from './flex-item'

import styles from '../../styles/Flex.module.scss'

const DisplayFlexItem = ({ flexItems, selectedItem }) => {

  return flexItems.map((item) => (
    <>
      <FlexItem key={item.key} itemCount={item.value} itemKey={item.key} selectedItem={selectedItem} />
    </>
  ))
}

const FlexContainer = ({ selectedItem }) => {

  const flexCtx = useContext(FlexSidebarContext)
  const flexItems = flexCtx.Flex_items

  return (
    <section
      className={styles.right_content}
      style={{ flexDirection: flexCtx.FD_value, flexWrap: flexCtx.FW_value, justifyContent: flexCtx.JC_value, alignItems: flexCtx.AI_value, alignContent: flexCtx.AC_value }}
    >

      <DisplayFlexItem
        flexItems={flexItems}
        selectedItem={selectedItem}
      />
      
    </section>
  )

}

export default FlexContainer