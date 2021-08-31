import alt from '../alt'

class ListActionsGenerator {
  constructor() {
    this.generateActions('addItem', 'removeItem')
  }

  updateList(list) {
    return list
  }
}
const listActions = alt.createActions(ListActionsGenerator)

export default listActions
