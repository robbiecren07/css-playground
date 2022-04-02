import { useState } from 'react';
import Link from "next/link"
import Select from 'react-select';
import FlexSidebarTooltip from "./flex-sidebartooltip"
import FlexSidebarSelect from './flex-sidebarselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/pro-solid-svg-icons'
import styles from '../../styles/Flex.module.scss'

const FlexSidebarContainer = ({ sidebarProps, onClick, handleOnChange }) => {

  const options = sidebarProps.options

  return (
    <>
      <p className={styles.warning}>{sidebarProps.containerWarningText}</p>
      <button type="button" className="btn" onClick={onClick}>
        {sidebarProps.addItemBtn}
        </button>
        
      <form className={styles.form}>
        {options.map((option, index) => {
          return (
            <div key={index} className={styles.form_item}>
              <div className={styles.form_label_wrap}>
                <label id={option.title}>{option.title}</label>
                <FlexSidebarTooltip tooltipText={option.tooltip} />
                <Link href={option.externalLink.url}>
                  <a className="e_link" target="_blank">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </Link>
              </div>

              {/* <FlexSidebarSelect options={option.items} handleOnChange={handleOnChange} /> */}
              
              <Select
                className={styles.form_item_wrap}
                onChange={handleOnChange}
                options={option.items.map(item => ({ value: item.value, label: item.item }))}
                defaultValue={option.items.map(item => ({ label: item.item }))}
                instanceId={option.title}
              />
            </div>
          )
        })}
      </form>
    </>
  )
}

export default FlexSidebarContainer