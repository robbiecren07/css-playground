import { useContext } from "react";
import FlexSidebarContext from "context/flexSidebar";
import Link from "next/link"
import FlexSidebarTooltip from "./flex-sidebartooltip"
import { fdOptions, fwOptions, jcOptions, aiOptions, acOptions} from '@/utils/select-options'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/pro-solid-svg-icons'

import styles from '../../styles/Flex.module.scss'

const FlexSidebarContainer = ({ onClick }) => {

  const flexCtx = useContext(FlexSidebarContext)

  console.log(flexCtx.FD_value)

  return (
    <>
      <p className={styles.warning}>Edit properties of the flex container here. Click an item to the right to edit its properties.</p>
      <button type="button" className="btn" onClick={onClick}>
        Add Flex Item
      </button>
        
      <form className={styles.form}>

        {/* flex-direction */}
        <div className={styles.form_item}>
          <div className={styles.form_label_wrap}>
            <label>flex-direction</label>
            <FlexSidebarTooltip tooltipText="The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed)." />
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction" passHref>
              <a className="e_link" target="_blank" title="Read more about CSS flex-direction">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Link>
          </div>
          
          <select
            name="flex-direction"
            value={flexCtx.FD_value}
            className={styles.form_item_wrap}
            onChange={(e) => flexCtx.fetchFDValue(e.target.value)}
          >
            {fdOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* flex-wrap */}
        <div className={styles.form_item}>
          <div className={styles.form_label_wrap}>
            <label>flex-wrap</label>
            <FlexSidebarTooltip tooltipText="The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked." />
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap" passHref>
              <a className="e_link" target="_blank" title="Read more about CSS flex-wrap">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Link>
          </div>
          
          <select
            name="flex-wrap"
            value={flexCtx.FW_value}
            className={styles.form_item_wrap}
            onChange={(e) => flexCtx.fetchFWValue(e.target.value)}
          >
            {fwOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* justify-content */}
        <div className={styles.form_item}>
          <div className={styles.form_label_wrap}>
            <label>justify-content</label>
            <FlexSidebarTooltip tooltipText="The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container." />
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content" passHref>
              <a className="e_link" target="_blank" title="Read more about CSS justify-content">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Link>
          </div>
          
          <select
            name="justify-content"
            value={flexCtx.JC_value}
            className={styles.form_item_wrap}
            onChange={(e) => flexCtx.fetchJCValue(e.target.value)}
          >
            {jcOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* align-items */}
        <div className={styles.form_item}>
          <div className={styles.form_label_wrap}>
            <label>align-items</label>
            <FlexSidebarTooltip tooltipText="The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis." />
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items" passHref>
              <a className="e_link" target="_blank" title="Read more about CSS align-items">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Link>
          </div>
          
          <select
            name="align-items"
            value={flexCtx.AI_value}
            className={styles.form_item_wrap}
            onChange={(e) => flexCtx.fetchAIValue(e.target.value)}
          >
            {aiOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* align-content */}
        <div className={styles.form_item}>
          <div className={styles.form_label_wrap}>
            <label>align-content</label>
            <FlexSidebarTooltip tooltipText="The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis." />
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-content" passHref>
              <a className="e_link" target="_blank" title="Read more about CSS align-content">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </Link>
          </div>
          
          <select
            name="align-content"
            value={flexCtx.AC_value}
            className={styles.form_item_wrap}
            onChange={(e) => flexCtx.fetchACValue(e.target.value)}
          >
            {acOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

      </form>
    </>
  )
}

export default FlexSidebarContainer