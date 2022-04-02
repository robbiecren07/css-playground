import Link from "next/link"
import FlexSidebarTooltip from "./flex-sidebartooltip"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/pro-solid-svg-icons'
import styles from '../../styles/Flex.module.scss'


const FlexSidebarItems = ({ sidebarProps }) => {

  const itemsOptions = sidebarProps.itemsOptions
  
  //console.log(itemsOptions)
  
  return (
    <>
      <p className={styles.warning}>{sidebarProps.itemWarningText}</p>
      
      <form className={styles.form}>
        {itemsOptions.map((itemsOption, index) => {
          return (
            itemsOption.items !== null ? (
              <div key={index} className={styles.form_item}>
                <div className={styles.form_label_wrap}>
                  <label>{itemsOption.title}</label>
                  <FlexSidebarTooltip tooltipText={itemsOption.tooltip} />
                  <Link href={itemsOption.externalLink.url}>
                    <a className="e_link" target="_blank">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </Link>
                </div>
                <div className={styles.form_item_wrap}>
                  <select>
                    {itemsOption.items.map((item, i) => {
                      return (
                        <option key={item.id}>{item.item}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
            ) : itemsOption.title == 'flex-basis' ? (
              <div key={index} className={styles.form_item}>
                <div className={styles.form_label_wrap}>
                  <label>{itemsOption.title}</label>
                  <FlexSidebarTooltip tooltipText={itemsOption.tooltip} />
                  <Link href={itemsOption.externalLink.url}>
                    <a className="e_link" target="_blank">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </Link>
                </div>
                <div className={styles.form_item_wrap}>
                  <input name={itemsOption.title}></input>
                </div>
              </div>
            ) : (
              <div key={index} className={styles.form_item}>
                <div className={styles.form_label_wrap}>
                  <label>{itemsOption.title}</label>
                  <FlexSidebarTooltip tooltipText={itemsOption.tooltip} />
                  <Link href={itemsOption.externalLink.url}>
                    <a className="e_link" target="_blank">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </Link>
                </div>
                <div className={styles.form_item_wrap}>
                  <input name={itemsOption.title} type="number" min="0"></input>
                </div>
              </div>
            )
          )
        })}
      </form>
    </>
  )
}

export default FlexSidebarItems