import React from "react"
import { createPopper } from "@popperjs/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/pro-solid-svg-icons'
import styles from '../../styles/Flex.module.scss'

const FlexSidebarTooltip = ({ tooltipText }) => {
  const [popoverShow, setPopoverShow] = React.useState(false)
  const btnRef = React.createRef()
  const popoverRef = React.createRef()

  const openTooltip = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "right"
    })
    setPopoverShow(true)
  }

  const closeTooltip = () => {
    setPopoverShow(false)
  }

  return (
    <div className="flex flex-wrap">
      <button className={styles.fa_btn} type="button" onMouseEnter={openTooltip} onMouseLeave={closeTooltip} ref={btnRef}>
        <FontAwesomeIcon icon={faCircleQuestion} />
      </button>
      <div className={ (popoverShow ? "" : "hidden ") + `${styles.tooltip_show}` } ref={popoverRef}>
        <p className={styles.tooltip_text}>{tooltipText}</p>
      </div>
    </div>
  )
}

export default FlexSidebarTooltip