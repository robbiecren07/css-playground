//import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCanXmark } from '@fortawesome/pro-solid-svg-icons'
import styles from '../../styles/Flex.module.scss'

const FlexItem = ({ itemCount, trashClick }) => {
  
  // const [isaddFlexItem, setaddFlexItem] = useState(addFlexItem)
  
  // useEffect(() => {
  //   setaddFlexItem(addFlexItem)
  //   console.log(isaddFlexItem)
  // }, [addFlexItem])

  // const clearState = () => {
  //   setaddFlexItem(false)
  // }

  return (
    // isaddFlexItem ?
      <div className={styles.flex_item}>
        <div className={styles.flex_item_wrap}>
          <div className={styles.flex_item_inner}>
            Item: {itemCount + 1}
          </div>
          <button className={styles.edit}>Edit</button>
        </div>
      
        <button className={styles.trash} onClick={trashClick}>
          <FontAwesomeIcon icon={faTrashCanXmark} />
        </button>
      </div>
    // : "empty"
  )

}

export default FlexItem