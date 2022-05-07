import { useState, useContext, useEffect } from 'react'
// import FlexSidebarNav from './flex-sidebarnav'
import FlexSidebarContext from 'context/flexSidebarContext'
import FlexSidebarContainer from './FlexSidebarContainer'
import FlexSidebarItems from './FlexSidebarItems'
import { Box, Button, ButtonGroup, useColorModeValue } from '@chakra-ui/react'

import styles from '../../styles/Flex.module.scss'

const FlexSidebar = ({ onClick, addFlexItem, selectedItem }) => {

  const [showContainer, setContainer] = useState(true)
  const [showItems, setItems] = useState(false)
  const [markUpText, setMarkUpText] = useState(false)

  const flexCtx = useContext(FlexSidebarContext)
  const myItems = flexCtx.Flex_items
  const findSelectedItem = myItems.find(item => item.selected === true)

  const cx = (...classNames) => classNames.join(' ')
  const bg = useColorModeValue('blackAlpha.200', 'white')
  const brColor = useColorModeValue('#e5e7eb', 'whiteAlpha.300')

  useEffect(() => {
    if (findSelectedItem !== undefined) {
      setItems(true)
      setContainer(false)
    }
    if (findSelectedItem === undefined) {
      setItems(false)
      setContainer(true)
    }
  }, [myItems])

  const containerDisplay = () => {
    setContainer(true)
    setItems(false)
  }

  const itemsDisplay = () => {
    setItems(true)
    setContainer(false)
  }

  const handleMarkUp = () => {
    flexCtx.fetchMarkup()
    setMarkUpText(!markUpText)
  }

  return (
    <Box as="aside" className={styles.left_sidebar} borderColor={brColor}>

      <ButtonGroup className={styles.sidebar_nav} spacing="1" size="md" colorScheme='blue' variant='ghost' bg={bg}>
        <Button className={showContainer ? `${cx(styles.active, 'active')}` : ''} onClick={containerDisplay} w="100%">
          Container
        </Button>
        <Button className={showItems ? `${cx(styles.active, 'active')}` : ''} onClick={itemsDisplay} w="100%">
          Items
        </Button>
      </ButtonGroup>

      <section className={styles.wrap}>
        {showContainer === true && <FlexSidebarContainer
          onClick={onClick} />}
        
        {showItems === true && <FlexSidebarItems
          addFlexItem={addFlexItem}
          selectedItem={selectedItem} />}
      </section>

      <ButtonGroup colorScheme="blue" variant="outline" spacing="2" size="md" justifyContent="center" mt="auto" mb="30px">
        <Button onClick={flexCtx.doClearItems}>
          Start Over
        </Button>
        <Button onClick={() => handleMarkUp()}>
          {markUpText ? 'View Flex Items' : 'View Markup'}
        </Button>
      </ButtonGroup>
    </Box>
  )

}

export default FlexSidebar