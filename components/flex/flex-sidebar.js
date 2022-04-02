import { useState } from 'react';
// import FlexSidebarNav from './flex-sidebarnav'
import FlexSidebarContainer from './flex-sidebarcontainer'
import FlexSidebarItems from './flex-sidebaritems'
import styles from '../../styles/Flex.module.scss'

const FlexSidebar = ({ sidebarProps, onClick, handleOnChange }) => {

  const [container, setContainer] = useState(true)
  const [containerActive, containerSetActive] = useState(true)
  const [items, setItems] = useState(false)
  const [itemsActive, itemsSetActive] = useState(false)
  // console.log(sidebarProps)

  const containerDisplay = () => {
    setContainer(true)
    containerSetActive(true)
    itemsSetActive(false)
    setItems(false)
  }

  const itemsDisplay = () => {
    setItems(true)
    itemsSetActive(true)
    containerSetActive(false)
    setContainer(false)
  }

  return (
    <aside className={styles.left_sidebar}>

      {/* <FlexSidebarNav sidebarProps={sidebarProps} /> */}
      <nav className={styles.sidebar_nav} role="group">
        <button type="button" className={`btn_sb btn_sb-left ${containerActive ? "active" : ""}`} onClick={containerDisplay}>
          {sidebarProps.navLink1}
        </button>
        <button type="button" className={`btn_sb btn_sb-right ${itemsActive ? "active" : ""}`} onClick={itemsDisplay}>
          {sidebarProps.navLink2}
        </button>
      </nav>

      <section className={styles.wrap}>
        {/* we are padding the onClick to the child component */}
        {container === true && <FlexSidebarContainer sidebarProps={sidebarProps} onClick={onClick} handleOnChange={handleOnChange} />}
        {items === true && <FlexSidebarItems sidebarProps={sidebarProps} />}
      </section>

    </aside>
  )

}

export default FlexSidebar