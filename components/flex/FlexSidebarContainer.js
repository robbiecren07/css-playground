import { useContext } from 'react'
import FlexSidebarContext from 'context/flexSidebarContext'
//import Link from 'next/link'
import { Button, Link, Select } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import FlexSidebarTooltip from './FlexSidebarTooltip'
import { fdOptions, fwOptions, jcOptions, aiOptions, acOptions} from '@/utils/select-options'

import styles from '../../styles/Flex.module.scss'

const FlexSidebarContainer = ({ }) => {

  const flexCtx = useContext(FlexSidebarContext)
  const addItem = flexCtx.addFlexItems

  return (
    <>
      <p className={styles.warning}>Edit properties of the flex container here. Click an item to the right to edit its properties.</p>
      <Button
        variant="solid-blue"
        w="100%" 
        h="48px"
        fontSize="18px"
        onClick={addItem}
      >
        Add Flex Item
      </Button>
        
      <form className={styles.form}>

        {/* flex-direction */}
        <div className={styles.form_item}>
          <div className={styles.form_label_wrap}>
            <label>flex-direction</label>
            <FlexSidebarTooltip tooltipText="The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed)." />
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction" title="Read more about CSS flex-direction" isExternal>
              <ExternalLinkIcon mx="2px" />
            </Link>
          </div>
          
          <Select
            name="flex-direction"
            value={flexCtx.FD_value}
            size="lg"
            fontSize="1rem"
            h="40px"
            mt="4px"
            onChange={(e) => flexCtx.fetchFDValue(e.target.value)}
          >
            {fdOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </Select>
        </div>

        {/* flex-wrap */}
        <div className={styles.form_item}>
          <div className={styles.form_label_wrap}>
            <label>flex-wrap</label>
            <FlexSidebarTooltip tooltipText="The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked." />
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap" title="Read more about CSS flex-wrap" isExternal>
              <ExternalLinkIcon mx="2px" />
            </Link>
          </div>
          
          <Select
            name="flex-wrap"
            value={flexCtx.FW_value}
            size="lg"
            fontSize="1rem"
            h="40px"
            mt="4px"
            onChange={(e) => flexCtx.fetchFWValue(e.target.value)}
          >
            {fwOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </Select>
        </div>

        {/* justify-content */}
        <div className={styles.form_item}>
          <div className={styles.form_label_wrap}>
            <label>justify-content</label>
            <FlexSidebarTooltip tooltipText="The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container." />
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content" title="Read more about CSS justify-content" isExternal>
              <ExternalLinkIcon mx="2px" />
            </Link>
          </div>
          
          <Select
            name="justify-content"
            value={flexCtx.JC_value}
            size="lg"
            fontSize="1rem"
            h="40px"
            mt="4px"
            onChange={(e) => flexCtx.fetchJCValue(e.target.value)}
          >
            {jcOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </Select>
        </div>

        {/* align-items */}
        <div className={styles.form_item}>
          <div className={styles.form_label_wrap}>
            <label>align-items</label>
            <FlexSidebarTooltip tooltipText="The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis." />
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items" title="Read more about CSS align-items" isExternal>
              <ExternalLinkIcon mx="2px" />
            </Link>
          </div>
          
          <Select
            name="align-items"
            value={flexCtx.AI_value}
            size="lg"
            fontSize="1rem"
            h="40px"
            mt="4px"
            onChange={(e) => flexCtx.fetchAIValue(e.target.value)}
          >
            {aiOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </Select>
        </div>

        {/* align-content */}
        <div className={styles.form_item}>
          <div className={styles.form_label_wrap}>
            <label>align-content</label>
            <FlexSidebarTooltip tooltipText="The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis." />
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-content" title="Read more about CSS align-content" isExternal>
              <ExternalLinkIcon mx="2px" />
            </Link>
          </div>
          
          <Select
            name="align-content"
            value={flexCtx.AC_value}
            size="lg"
            fontSize="1rem"
            h="40px"
            mt="4px"
            onChange={(e) => flexCtx.fetchACValue(e.target.value)}
          >
            {acOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </Select>
        </div>

      </form>
    </>
  )
}

export default FlexSidebarContainer