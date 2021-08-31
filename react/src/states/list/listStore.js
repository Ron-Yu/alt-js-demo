import alt from '../alt'
import listActions from './listActions'

class ListStoreGenerator {
  constructor() {
    this.list = ['default item']

    // #1 explicit binding
    this.bindListeners({
      handleUpdateList: listActions.UPDATE_LIST,
    })

    // #2 inexplicit binding
    this.bindActions(listActions)
  }

  handleUpdateList(list) {
    this.list = list
  }

  addItem(item) {
    this.list = [...this.list, item]
  }

  onRemoveItem() {
    this.list = this.list.slice(0, -1)
  }
}
const listStore = alt.createStore(ListStoreGenerator, 'ListStoreGenerator')

export default listStore
