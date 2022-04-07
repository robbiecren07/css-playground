import { useState } from 'react';
// import FlexSidebarNav from './flex-sidebarnav'
import FlexSidebarContainer from './flex-sidebarcontainer'
import FlexSidebarItems from './flex-sidebaritems'
import styles from '../../styles/Flex.module.scss'

const FlexSidebar = ({ onClick, handleFD, handleFW, handleJC, handleAI, handleAC, addFlexItem, selectedItem, handleFG }) => {

  const [container, setContainer] = useState(true)
  const [items, setItems] = useState(false)

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

      <nav className={styles.sidebar_nav} role="group">
        <button type="button" className={`btn_sb btn_sb-left ${container ? "active" : ""}`} onClick={containerDisplay}>
          Container
        </button>
        <button type="button" className={`btn_sb btn_sb-right ${items ? "active" : ""}`} onClick={itemsDisplay}>
          Items
        </button>
      </nav>

      <section className={styles.wrap}>
        {container === true && <FlexSidebarContainer
          onClick={onClick}
          handleFD={handleFD}
          handleFW={handleFW}
          handleJC={handleJC}
          handleAC={handleAC}
          handleAI={handleAI} />}
        
        {items === true && <FlexSidebarItems
          addFlexItem={addFlexItem}
          selectedItem={selectedItem}
          handleFG={handleFG} />}
      </section>

    </aside>
  )

}

export default FlexSidebar