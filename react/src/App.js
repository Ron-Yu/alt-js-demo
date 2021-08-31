import React, { useCallback } from 'react'
import connectToStores from 'alt-utils/lib/connectToStores'
import listStore from './states/list/listStore'
import listActions from './states/list/listActions'

const App = ({ list }) => {
  const handleUpdateList = useCallback(
    () => listActions.updateList(['updated item']),
    []
  )
  const handleAddItem = useCallback(() => listActions.addItem('new item'), [])
  const handleRemoveItem = useCallback(() => listActions.removeItem(), [])

  return (
    <>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button id="button1" onClick={handleUpdateList}>
        update list
      </button>
      <button id="button2" onClick={handleAddItem}>
        add item
      </button>
      <button id="button3" onClick={handleRemoveItem}>
        remove item
      </button>
    </>
  )
}

const connector = {
  getStores() {
    // this will handle the listening/unlistening for you
    return [listStore]
  },

  getPropsFromStores() {
    // this is the data that gets passed down as props
    // each key in the object returned by this function is added to the `props`
    var listState = listStore.getState()
    return {
      list: listState.list,
    }
  },
}

export default connectToStores(connector, App)
