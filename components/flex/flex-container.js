import { useState, useEffect, useContext } from 'react';
import FlexSidebarContext from "context/flexSidebar";
import FlexItem from './flex-item'

import styles from '../../styles/Flex.module.scss'

const DisplayFlexItem = ({ flexItems, removeFlexItem, selectedItem, addFGStyle }) => {
  return flexItems.map((item) => (
    <>
      <FlexItem key={item} itemCount={item} trashClick={() => { removeFlexItem(item) }} selectedItem={selectedItem} addFGStyle={addFGStyle} />
    </>
  ))
}

const FlexContainer = ({ addFlexItem, setAddFlexItem, selectedItem, addFDStyle, addFWStyle, addJCStyle, addAIStyle, addACStyle, addFGStyle }) => {

  const flexCtx = useContext(FlexSidebarContext)

  // const [isaddFDStyle, setaddFDStyle] = useState(addFDStyle)
  // const [isaddFWStyle, setaddFWStyle] = useState(addFWStyle)
  // const [isaddJCStyle, setaddJCStyle] = useState(addJCStyle)
  // const [isaddAIStyle, setaddAIStyle] = useState(addAIStyle)
  // const [isaddACStyle, setaddACStyle] = useState(addACStyle)
  
  // useEffect(() => {
  //   setaddFDStyle(addFDStyle.label)
  // }, [addFDStyle.label])
  // useEffect(() => {
  //   setaddFWStyle(addFWStyle.label)
  // }, [addFWStyle.label])
  // useEffect(() => {
  //   setaddJCStyle(addJCStyle.label)
  // }, [addJCStyle.label])
  // useEffect(() => {
  //   setaddACStyle(addACStyle.label)
  // }, [addACStyle.label])
  // useEffect(() => {
  //   setaddAIStyle(addAIStyle.label)
  // }, [addAIStyle.label])

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
        addFGStyle={addFGStyle}
      />
      
    </section>
  )

}

export default FlexContainer