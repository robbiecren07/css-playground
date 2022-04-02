import { useState } from 'react';
import styles from '../../styles/Flex.module.scss'

const FlexSidebarSelect = ({ options, handleOnChange }) => {

  //console.log(options)

  const [value, setValue] = useState("")

  const handleOptionChange = (e) => {
    let value = e.target.value
    //let parent = e.target.parentElement
    setValue({
      value
    })
  }

  console.log(value)

  return (
    <div className={styles.form_item_wrap}>
      <select onChange={handleOptionChange} id={options.map(item => ({ value: item.item }))}>
        {options.map((item, index) => {
          return (
            <option key={index} value={item.value}>{item.item}</option>
          )
        })}
      </select>
    </div>
  )
}

export default FlexSidebarSelect