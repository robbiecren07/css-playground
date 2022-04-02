import { useState, useEffect } from 'react';
import FlexItem from './flex-item'
import styles from '../../styles/Flex.module.scss'

const DisplayFlexItem = ({ flexItems, removeFlexItem }) => {
  return flexItems.map((item) => (
    <>
      <FlexItem key={item} itemCount={item} trashClick={() => { removeFlexItem(item) }} />
    </>
  ))
}

const FlexContainer = ({ addFlexItem, setAddFlexItem, addFlexItemStyles }) => {

  const [isaddFlexItemStyles, setaddFlexItemStyles] = useState(addFlexItemStyles)
  
  useEffect(() => {
    setaddFlexItemStyles(addFlexItemStyles.label)
  }, [addFlexItemStyles.label])

  return (
    <section className={styles.right_content} style={{ flexDirection: isaddFlexItemStyles, alignItems: 'flex-start' }}>

      <DisplayFlexItem
        flexItems={addFlexItem}
        removeFlexItem={(item) => {
          const newAddFlexItem = addFlexItem.filter((currentItem) => currentItem !== item)
          setAddFlexItem(newAddFlexItem)
        }}
      />
      
    </section>
  )

}

export default FlexContainer