import { useState, useContext, useEffect } from 'react';
// import FlexSidebarNav from './flex-sidebarnav'
import FlexSidebarContext from "context/flexSidebar";
import FlexSidebarContainer from './FlexSidebarContainer'
import FlexSidebarItems from './FlexSidebarItems'
import styles from '../../styles/Flex.module.scss'
import { Button, ButtonGroup, useColorModeValue } from '@chakra-ui/react';

const FlexSidebar = ({ onClick, addFlexItem, selectedItem }) => {

  const [container, setContainer] = useState(true)
  const [items, setItems] = useState(false)
  const [selected, setSelected] = useState(false)

  const flexCtx = useContext(FlexSidebarContext)
  const myItems = flexCtx.Flex_items
  const findSelectedItem = myItems.find(item => item.selected === true)

  const cx = (...classNames) => classNames.join(' ');
  const bg = useColorModeValue('blackAlpha.200', 'white')

  useEffect(() => {
    if (findSelectedItem !== undefined) {
      setItems(true)
      setContainer(false)
    }
  })

  const containerDisplay = () => {
    setContainer(true)
    setItems(false)
  }

  const itemsDisplay = () => {
    setItems(true)
    setContainer(false)
  }

  return (
    <aside className={styles.left_sidebar}>

      <ButtonGroup className={styles.sidebar_nav} spacing="1" size="md" colorScheme='blue' variant='ghost' bg={bg}>
        <Button className={container ? `${cx(styles.active, 'active')}` : ''} onClick={containerDisplay} w="100%">
          Container
        </Button>
        <Button className={items ? `${cx(styles.active, 'active')}` : ''} onClick={itemsDisplay} w="100%">
          Items
        </Button>
      </ButtonGroup>

      <section className={styles.wrap}>
        {container === true && <FlexSidebarContainer
          onClick={onClick} />}
        
        {items === true && <FlexSidebarItems
          addFlexItem={addFlexItem}
          selectedItem={selectedItem} />}
      </section>

      <ButtonGroup colorScheme='blue' variant='outline' spacing="2" size="md" justifyContent="center" mt="auto" mb="30px">
        <Button onClick={flexCtx.doClearItems}>
          Start Over
        </Button>
        <Button>
          View Markup
        </Button>
      </ButtonGroup>
    </aside>
  )

}

export default FlexSidebar