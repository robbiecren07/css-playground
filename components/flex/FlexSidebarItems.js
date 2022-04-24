import { useState, useEffect, useContext } from "react";
import FlexSidebarContext from "context/flexSidebarContext";
//import Link from "next/link"
import { Box, Input, Link, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import FlexSidebarTooltip from "./FlexSidebarTooltip"
import { asOptions} from '@/utils/select-options'

import styles from '../../styles/Flex.module.scss'

const FlexSidebarItems = ({ }) => {
 
  const flexCtx = useContext(FlexSidebarContext)
  const addFlexItem = flexCtx.Flex_items.length
  const myItems = flexCtx.Flex_items
  const findSelectedItem = myItems.find(item => item.selected === true)
  const theSelectedItem = new Array(findSelectedItem)

  const handleFGChange = (value, key) => flexCtx.fetchFGValue(value, key)
  const handleFSChange = (value, key) => flexCtx.fetchFSValue(value, key)
  const handleFBChange = (value, key) => flexCtx.fetchFBValue(value, key)
  const handleASChange = (value, key) => flexCtx.fetchASValue(value, key)
  const handleORChange = (value, key) => flexCtx.fetchORValue(value, key)

  const changeFG = (value, key) => {
    handleFGChange(value, key)
  }
  const changeFS = (value, key) => {
    handleFSChange(value, key)
  }
  const changeFB = (value, key) => {
    handleFBChange(value, key)
  }
  const changeAS = (value, key) => {
    handleASChange(value, key)
  }
  const changeOR = (value, key) => {
    handleORChange(value, key)
  }

  if (addFlexItem === 0) {
    return (
      <p className={styles.warning}>Add an item from the Container tab first.</p>
    )
  }

  if (findSelectedItem === undefined) {
    return (
      <p className={styles.warning}>Click on a flex item in the container on the right to edit its styles.</p>
    )
  }

  if (findSelectedItem !== undefined) {
    return theSelectedItem.map(item => (
      <Box as="div" key={item.key}>
        <p className={styles.warning}>Edit properties of the flex items here. The selected item will have a green border. Click the selected item again to stop editing it.</p>

        <form className={styles.form}>
          
          {/* flex-grow */}
          <div className={styles.form_item}>
            <div className={styles.form_label_wrap}>
              <label>flex-grow</label>
              <FlexSidebarTooltip tooltipText="The flex-grow CSS property sets the flex grow factor of a flex item's main size." />
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow" title="Read more about CSS flex-grow" isExternal>
                <ExternalLinkIcon mx="2px" />
              </Link>
            </div>
            
            <div className={styles.form_item_wrap}>
              <NumberInput
                type="number"
                id="flex-grow"
                name="flex-grow"
                min={0}
                max={1000}
                size="lg"
                fontSize="1rem"
                h="40px"
                mt="4px"
                defaultValue={item.FG_value}
                onChange={(value) => changeFG(value, item.key)}
              >
                <NumberInputField h="40px" data-lpignore="true" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </div>
          </div>

          {/* flex-shrink */}
          <div className={styles.form_item}>
            <div className={styles.form_label_wrap}>
              <label>flex-shrink</label>
              <FlexSidebarTooltip tooltipText="The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink." />
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink" title="Read more about CSS flex-shrink" isExternal>
                <ExternalLinkIcon mx="2px" />
              </Link>
            </div>
            
            <div className={styles.form_item_wrap}>
              <NumberInput
                type="number"
                id="flex-shrink"
                name="flex-shrink"
                min={0}
                max={1000}
                size="lg"
                fontSize="1rem"
                h="40px"
                mt="4px"
                defaultValue={item.FS_value}
                onChange={(value) => changeFS(value, item.key)}
              >
                <NumberInputField h="40px" data-lpignore="true" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </div>
          </div>

          {/* flex-basis */}
          <div className={styles.form_item}>
            <div className={styles.form_label_wrap}>
              <label>flex-basis</label>
              <FlexSidebarTooltip tooltipText="The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing." />
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis" title="Read more about CSS flex-basis" isExternal>
                <ExternalLinkIcon mx="2px" />
              </Link>
            </div>
            
            <div className={styles.form_item_wrap}>
              <Input
                type="text"
                id="flex-basis"
                name="flex-basis"
                size="lg"
                fontSize="1rem"
                h="40px"
                mt="4px"
                defaultValue={item.FB_value}
                onChange={(value) => changeFB(value, item.key)}
                data-lpignore="true"
              />
            </div>
          </div>

          {/* align-self */}
          <div className={styles.form_item}>
            <div className={styles.form_label_wrap}>
              <label>align-self</label>
              <FlexSidebarTooltip tooltipText="The align-self CSS property overrides a grid or flex item's align-items value. In Flexbox, it aligns the item on the cross axis." />
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis" title="Read more about CSS align-self" isExternal>
                <ExternalLinkIcon mx="2px" />
              </Link>
            </div>
            
            <Select
              name="align-self"
              size="lg"
              fontSize="1rem"
              h="40px"
              mt="4px"
              defaultValue={item.AS_value}
              onChange={(e) => changeAS(e.target.value, item.key)}
            >
            {asOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </Select>
          </div>

          {/* order */}
          <div className={styles.form_item}>
            <div className={styles.form_label_wrap}>
              <label>order</label>
              <FlexSidebarTooltip tooltipText="The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order." />
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/order" title="Read more about CSS order" isExternal>
                <ExternalLinkIcon mx="2px" />
              </Link>
            </div>
            
            <div className={styles.form_item_wrap}>
              <NumberInput
                type="number"
                id="order"
                name="order"
                min={0}
                max={1000}
                size="lg"
                fontSize="1rem"
                h="40px"
                mt="4px"
                defaultValue={item.OR_value}
                onChange={(value) => changeOR(value, item.key)}
              >
                <NumberInputField h="40px" data-lpignore="true" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </div>
          </div>

        </form>
      </Box>
    ))
  }

}

export default FlexSidebarItems