import { createContext, useState } from "react";

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
  fetchFGValue: function (value) { },
  FS_value: 0,
  fetchFSValue: function (value) { },
  FB_value: 'auto',
  fetchFBValue: function (value) { },
  AS_value: 'auto',
  fetchASValue: function (value) { },
  OR_value: 0,
  fetchORValue: function (value) { },
  Flex_items: [],
  addFlexItems: function () { },
  removeFlexItem: function (e) {},
})

export const FlexSidebarContextProvider = ({ children }) => {
  {/* sidebar container states */ }
  const [isFDValue, setFDValue] = useState('row')
  const [isFWValue, setFWValue] = useState('nowrap')
  const [isJCValue, setJCValue] = useState('flex-start')
  const [isAIValue, setAIValue] = useState('flex-start')
  const [isACValue, setACValue] = useState('flex-start')

  const setFDValues = (value) => { setFDValue(value) }
  const setFWValues = (value) => { setFWValue(value) }
  const setJCValues = (value) => { setJCValue(value) }
  const setAIValues = (value) => { setAIValue(value) }
  const setACValues = (value) => { setACValue(value) }
  
  {/* sidebar items states */}
  const [isFGValue, setFGValue] = useState(0)
  const [isFSValue, setFSValue] = useState(0)
  const [isFBValue, setFBValue] = useState('auto')
  const [isASValue, setASValue] = useState('auto')
  const [isORValue, setORValue] = useState(0)

  const setFGValues = (value) => { setFGValue(value) }
  const setFSValues = (value) => { setFSValue(value) }
  const setFBValues = (value) => { setFBValue(value) }
  const setASValues = (value) => { setASValue(value) }
  const setORValues = (value) => { setORValue(value) }

  {/* add flex items */ }
  const [items, setItems] = useState([])

  const addItem = () => {
    const flex_item = 'flex_item-'
    setItems((items) => [...items, {
      id: items.length,
      value: items.length + 1,
      key: flex_item.concat(Math.floor(Math.random() * 1000 + 1))
    }])
  }

  const removeItem = (e) => {
    const theItem = e
    const newItemCount = items.filter(item => item.key !== theItem)
    setItems(newItemCount)
  }

  const context = {
    Flex_items: items,
    addFlexItems: addItem,
    removeFlexItem: removeItem,
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
    FS_value: isFSValue,
    fetchFSValue: setFSValues,
    FB_value: isFBValue,
    fetchFBValue: setFBValues,
    AS_value: isASValue,
    fetchASValue: setASValues,
    OR_value: isORValue,
    fetchORValue: setORValues,
  }

  return (
    <FlexSidebarContext.Provider value={context}>
      {children}
    </FlexSidebarContext.Provider>
  )
}

export default FlexSidebarContext