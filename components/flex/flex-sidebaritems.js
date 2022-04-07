import { useState, useEffect, useContext } from "react";
import FlexSidebarContext from "context/flexSidebar";
import Link from "next/link"
import FlexSidebarTooltip from "./flex-sidebartooltip"
import { asOptions} from '@/utils/select-options'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/pro-solid-svg-icons'

import styles from '../../styles/Flex.module.scss'

const FlexSidebarItems = ({ addFlexItem, selectedItem }) => {
  
  const flexCtx = useContext(FlexSidebarContext)

  //console.log(flexCtx.FG_value)

  if (addFlexItem.length === 0) {
    return (
      <p className={styles.warning}>Add an item from the Container tab first.</p>
    )
  }

  if (selectedItem === null) {
    return (
      <p className={styles.warning}>Click on a flex item in the container on the right to edit its styles.</p>
    )
  }

  if (selectedItem !== null) {
    return (
      <>
        <p className={styles.warning}>Edit properties of the flex items here. The selected item will have a green border. Click the selected item again to stop editing it.</p>

        <form className={styles.form}>
          
          {/* flex-grow */}
          <div className={styles.form_item}>
            <div className={styles.form_label_wrap}>
              <label>flex-grow</label>
              <FlexSidebarTooltip tooltipText="The flex-grow CSS property sets the flex grow factor of a flex item's main size." />
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow" passHref>
                <a className="e_link" target="_blank" title="Read more about CSS flex-grow">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </Link>
            </div>
            
            <div className={styles.form_item_wrap}>
              <input
                type="number"
                id="flex-grow"
                name="flex-grow"
                minLength={0}
                maxLength={1000}
                placeholder="0"
                value={flexCtx.FG_value}
                onChange={(e) => flexCtx.fetchFGValue(e.target.value)}
              />
            </div>
          </div>

          {/* flex-shrink */}
          <div className={styles.form_item}>
            <div className={styles.form_label_wrap}>
              <label>flex-shrink</label>
              <FlexSidebarTooltip tooltipText="The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink." />
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink" passHref>
                <a className="e_link" target="_blank" title="Read more about CSS flex-shrink">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </Link>
            </div>
            
            <div className={styles.form_item_wrap}>
              <input
                type="number"
                id="flex-shrink"
                name="flex-shrink"
                minLength={0}
                maxLength={1000}
                placeholder="0"
              />
            </div>
          </div>

          {/* flex-basis */}
          <div className={styles.form_item}>
            <div className={styles.form_label_wrap}>
              <label>flex-basis</label>
              <FlexSidebarTooltip tooltipText="The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing." />
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis" passHref>
                <a className="e_link" target="_blank" title="Read more about CSS flex-basis">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </Link>
            </div>
            
            <div className={styles.form_item_wrap}>
              <input
                type="text"
                id="flex-basis"
                name="flex-basis"
                placeholder="auto"
              />
            </div>
          </div>

          {/* align-self */}
          <div className={styles.form_item}>
            <div className={styles.form_label_wrap}>
              <label>align-self</label>
              <FlexSidebarTooltip tooltipText="The align-self CSS property overrides a grid or flex item's align-items value. In Flexbox, it aligns the item on the cross axis." />
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis" passHref>
                <a className="e_link" target="_blank" title="Read more about CSS align-self">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </Link>
            </div>
            
            <select
              name="align-self"
              value={flexCtx.AS_value}
              className={styles.form_item_wrap}
              onChange={(e) => flexCtx.fetchASValue(e.target.value)}
            >
              {asOptions.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          {/* order */}
          <div className={styles.form_item}>
            <div className={styles.form_label_wrap}>
              <label>order</label>
              <FlexSidebarTooltip tooltipText="The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order." />
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/order" passHref>
                <a className="e_link" target="_blank" title="Read more about CSS order">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </Link>
            </div>
            
            <div className={styles.form_item_wrap}>
              <input
                type="number"
                id="order"
                name="order"
                minLength={0}
                maxLength={1000}
                placeholder="0"
              />
            </div>
          </div>

        </form>
      </>
    )
  }

}

export default FlexSidebarItems