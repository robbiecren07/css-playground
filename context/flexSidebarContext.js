import { createContext, useState } from 'react'

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

  Flex_items: [],
  addFlexItems: function () { },
  removeFlexItem: function (value) { },
  fetchEditItem: function (value) { },
  doClearItems: function () { },
  
  selectedItemValue: false,
  fetchSelectedItem: function () {},

  fetchFGValue: function (value, key) { },
  fetchFSValue: function (value, key) { },
  fetchFBValue: function (value, key) { },
  fetchASValue: function (value, key) { },
  fetchORValue: function (value, key) { },

  markUpValue: false,
  fetchMarkup: function () { },
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

  const [showMarkUp, setMarkUp] = useState(false)

  const markUp = () => {
    setMarkUp(!showMarkUp)
  }
  
  {/* add flex items */ }
  const [items, setItems] = useState([])

  const randomKey = () => {
    return '_' + Math.random().toString(36).substring(2, 9);
  }

  const addItem = () => {
    setItems((items) => [...items, {
      id: items.length,
      value: items.length + 1,
      key: randomKey(),
      selected: false,
      FG_value: 0,
      FS_value: 0,
      FB_value: 'auto',
      AS_value: 'auto',
      OR_value: 0,
    }])
  }

  const removeItem = (value) => {
    const newItemCount = items.filter(item => item.key !== value)
    setItems(newItemCount)
  }

  {/* select/edit flex item */ }
  const editItem = (value) => {
    const updatedItems = items.map((item) => item.key === value ? {
      ...item,
      selected: !item.selected
    } : {
      ...item,
      selected: false
    })
    setItems(updatedItems)
  }

  const clearItems = () => {
    const copyItems = [...items]
    const setDefaults = copyItems.map(item => ({
      ...item,
      selected: false,
      FG_value: 0,
      FS_value: 0,
      FB_value: 'auto',
      AS_value: 'auto',
      OR_value: 0,
    }))
    setItems(setDefaults)
    setFDValue('row')
    setFWValue('nowrap')
    setJCValue('flex-start')
    setAIValue('flex-start')
    setACValue('flex-start')
  }

  const editFGValue = (value, key) => {
    const FGValue = items.map((item) => item.key === key ? {
      ...item,
      FG_value: value
    } : item)
    setItems(FGValue)
  }

  const editFSValue = (value, key) => {
    const FSValue = items.map((item) => item.key === key ? {
      ...item,
      FS_value: value
    } : item)
    setItems(FSValue)
  }

  const editFBValue = (value, key) => {
    const FBValue = items.map((item) => item.key === key ? {
      ...item,
      FB_value: value
    } : item)
    setItems(FBValue)
  }

  const editASValue = (value, key) => {
    const ASValue = items.map((item) => item.key === key ? {
      ...item,
      AS_value: value
    } : item)
    setItems(ASValue)
  }

  const editORValue = (value, key) => {
    const ORValue = items.map((item) => item.key === key ? {
      ...item,
      OR_value: value
    } : item)
    setItems(ORValue)
  }

  const context = {
    Flex_items: items,
    addFlexItems: addItem,
    removeFlexItem: removeItem,
    fetchEditItem: editItem,
    doClearItems: clearItems,

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

    fetchFGValue: editFGValue,
    fetchFSValue: editFSValue,
    fetchFBValue: editFBValue,
    fetchASValue: editASValue,
    fetchORValue: editORValue,

    markUpValue: showMarkUp,
    fetchMarkup: markUp,
  }

  return (
    <FlexSidebarContext.Provider value={context}>
      {children}
    </FlexSidebarContext.Provider>
  )
}

export default FlexSidebarContext