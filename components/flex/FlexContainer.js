import { useState, useEffect, useContext } from 'react';
import FlexSidebarContext from "context/flexSidebar";
import DisplayFlexItem from './DisplayFlexItem';

import styles from '../../styles/Flex.module.scss'

const FlexContainer = () => {

  const flexCtx = useContext(FlexSidebarContext)

  return (
    <section
      className={styles.right_content}
      style={{ flexDirection: flexCtx.FD_value, flexWrap: flexCtx.FW_value, justifyContent: flexCtx.JC_value, alignItems: flexCtx.AI_value, alignContent: flexCtx.AC_value }}
    >

      <DisplayFlexItem />
      
    </section>
  )

}

export default FlexContainer