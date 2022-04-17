import { useState } from 'react';

import styles from '../../styles/Flex.module.scss'

// Build left sidebar
const FlexSidebarNav = ({ sidebarProps }) => {
  const [isActive, setIsActive] = useState(false)

  console.log(sidebarProps)

  return (
    <nav className={styles.sidebar_nav} role="group">
      <button type="button" className={`btn_sb btn_sb-left ${setIsActive ? 'active' : ''}`} onClick={() => setIsActive(true)}>
        {sidebarProps.navLink1}
      </button>
      <button type="button" className={`btn_sb btn_sb-right ${isActive ? 'active' : ''}`} >
        {sidebarProps.navLink2}
      </button>
    </nav>
  )
}

export default FlexSidebarNav