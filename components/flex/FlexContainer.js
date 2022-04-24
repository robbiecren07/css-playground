import { useState, useEffect, useContext } from 'react';
import FlexSidebarContext from "context/flexSidebarContext";
import DisplayFlexItem from './DisplayFlexItem';
import FlexMarkup from './FlexMarkup';

import styles from '../../styles/Flex.module.scss'

const FlexContainer = () => {

  const flexCtx = useContext(FlexSidebarContext)
  const showMarkUp = flexCtx.markUpValue

  return (
    <>
      {showMarkUp === false && 
        <section className={styles.right_content}
          style={{ flexDirection: flexCtx.FD_value, flexWrap: flexCtx.FW_value, justifyContent: flexCtx.JC_value, alignItems: flexCtx.AI_value, alignContent: flexCtx.AC_value }}>
          <DisplayFlexItem />
        </section>
      }
      
      {showMarkUp === true &&
        <section className={styles.right_content}>
          <FlexMarkup />
        </section>
      }
    </>
  )

}

export default FlexContainer