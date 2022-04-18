import { useState, useContext, useEffect } from 'react';
// import FlexSidebarNav from './flex-sidebarnav'
import FlexSidebarContext from "context/flexSidebar";
import FlexSidebarContainer from './FlexSidebarContainer'
import FlexSidebarItems from './FlexSidebarItems'
import styles from '../../styles/Flex.module.scss'
import { Button, ButtonGroup } from '@chakra-ui/react';

const FlexSidebar = ({ onClick, addFlexItem, selectedItem }) => {

  const [container, setContainer] = useState(true)
  const [items, setItems] = useState(false)
  const [selected, setSelected] = useState(false)

  const flexCtx = useContext(FlexSidebarContext)
  const myItems = flexCtx.Flex_items
  const findSelectedItem = myItems.find(item => item.selected === true)

  console.log(findSelectedItem)
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

      <ButtonGroup className={styles.sidebar_nav} spacing="1" size="xl">
        <Button className={`${container ? "active" : ""}`} onClick={containerDisplay} variant="sb-btn">
          Container
        </Button>
        <Button className={`${items ? "active" : ""}`} onClick={itemsDisplay} variant="sb-btn">
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

    </aside>
  )

}

export default FlexSidebar