import { createContext, useContext, useState } from "react";

const FlexSidebarContext = createContext({
  FD_value: 'row',
  fetchFDValue: function (value) {},
  FW_value: 'nowrap',
  fetchFWValue: function (value) {},
  JC_value: 'flex-start',
  fetchJCValue: function (value) {},
  AI_value: 'flex-start',
  fetchAIValue: function (value) {},
  AC_value: 'flex-start',
  fetchACValue: function (value) {},
  FG_value: 0,
  fetchFGValue: function (value) {},
})

export const FlexSidebarContextProvider = ({ children }) => {
  {/* sidebar container states */ }
  const [isFDValue, setFDValue] = useState('')
  const [isFWValue, setFWValue] = useState('')
  const [isJCValue, setJCValue] = useState('')
  const [isAIValue, setAIValue] = useState('')
  const [isACValue, setACValue] = useState('')

  const setFDValues = (value) => { setFDValue(value) }
  const setFWValues = (value) => { setFWValue(value) }
  const setJCValues = (value) => { setJCValue(value) }
  const setAIValues = (value) => { setAIValue(value) }
  const setACValues = (value) => { setACValue(value) }
  
  {/* sidebar items states */}
  const [isFGValue, setFGValue] = useState(0)

  const setFGValues = (value) => { setFGValue(value) }

  const context = {
    FD_value: isFDValue,
    fetchFDValue: setFDValues,
    FW_value: isFWValue,
    fetchFWValue: setFWValues,
    JC_value: isJCValue,
    fetchJCValue: setJCValues,
    AI_value: isAIValue,
    fetchAIValue: setAIValues,
    AC_value: isACValue,
    fetchACValue: setACValues,
    FG_value: isFGValue,
    fetchFGValue: setFGValues,
  }

  return (
    <FlexSidebarContext.Provider value={context}>
      {children}
    </FlexSidebarContext.Provider>
  )
}

export default FlexSidebarContext